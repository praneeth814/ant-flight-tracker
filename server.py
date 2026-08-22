"""
Flight Watch Server with Isolated User Contribution Storage and Custom Species Support
Serves static assets and provides dedicated endpoints for user contributions
persisted separately in 'user_contributions.json' and custom species in 'custom_species.json'.
"""

import http.server
import socketserver
import json
import os
import sys
import datetime
import urllib.request
import urllib.error

PORT = int(os.environ.get('PORT', 8085))
USER_DATA_FILE = os.path.join(os.path.dirname(__file__), 'user_contributions.json')
CUSTOM_SPECIES_FILE = os.path.join(os.path.dirname(__file__), 'custom_species.json')
USAGE_FILE = os.path.join(os.path.dirname(__file__), 'gemini_usage.json')
DAILY_LIMIT = int(os.environ.get('GEMINI_DAILY_LIMIT', 20))

# Ensure user_contributions.json exists with clean empty array if not present
if not os.path.exists(USER_DATA_FILE):
    with open(USER_DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump([], f, indent=2)

# Ensure custom_species.json exists with clean empty array if not present
if not os.path.exists(CUSTOM_SPECIES_FILE):
    with open(CUSTOM_SPECIES_FILE, 'w', encoding='utf-8') as f:
        json.dump([], f, indent=2)

def get_gemini_usage():
    today_str = datetime.date.today().isoformat()
    usage = {"date": today_str, "count": 0}
    if os.path.exists(USAGE_FILE):
        try:
            with open(USAGE_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if data.get('date') == today_str:
                    usage = data
                else:
                    usage = {"date": today_str, "count": 0}
        except Exception:
            pass
    return usage

def increment_gemini_usage():
    usage = get_gemini_usage()
    usage['count'] += 1
    try:
        with open(USAGE_FILE, 'w', encoding='utf-8') as f:
            json.dump(usage, f, indent=2)
    except Exception:
        pass
    return usage

class FlightWatchHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable caching for API endpoints
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/user-contributions':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.end_headers()
            try:
                if os.path.exists(USER_DATA_FILE):
                    with open(USER_DATA_FILE, 'r', encoding='utf-8') as f:
                        content = f.read()
                else:
                    content = '[]'
                self.wfile.write(content.encode('utf-8'))
            except Exception as e:
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        if self.path == '/api/custom-species':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.end_headers()
            try:
                if os.path.exists(CUSTOM_SPECIES_FILE):
                    with open(CUSTOM_SPECIES_FILE, 'r', encoding='utf-8') as f:
                        content = f.read()
                else:
                    content = '[]'
                self.wfile.write(content.encode('utf-8'))
            except Exception as e:
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        if self.path == '/api/gemini-usage':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.end_headers()
            usage = get_gemini_usage()
            self.wfile.write(json.dumps({
                "date": usage.get('date'),
                "today": usage.get('count', 0),
                "limit": DAILY_LIMIT
            }).encode('utf-8'))
            return

        # Default static file handling
        return super().do_GET()

    def do_POST(self):
        if self.path == '/api/gemini-chat':
            content_length = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_length)
            try:
                data = json.loads(post_body.decode('utf-8'))
                prompt = data.get('prompt', '').strip()
                rag_context = data.get('context', '').strip()
                client_api_key = data.get('apiKey', '').strip()
                
                # Check daily usage rate limit
                usage = get_gemini_usage()
                today_count = usage.get('count', 0)
                limit = data.get('customLimit') or DAILY_LIMIT

                if today_count >= limit:
                    self.send_response(429)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps({
                        "status": "rate_limited",
                        "error": f"Daily Gemini API limit reached ({today_count}/{limit} queries today).",
                        "limitReached": True,
                        "usage": {"today": today_count, "limit": limit}
                    }).encode('utf-8'))
                    return

                api_key = client_api_key or os.environ.get('GEMINI_API_KEY', '').strip()
                if not api_key:
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps({
                        "status": "no_key",
                        "fallback": True,
                        "message": "No Gemini API Key provided. Set an API key or use offline RAG mode.",
                        "usage": {"today": today_count, "limit": limit}
                    }).encode('utf-8'))
                    return

                url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
                
                system_text = (
                    "You are FlightWatch AI, an entomology assistant specialized in ant nuptial flight biology. "
                    "Answer accurately, grounded strictly in the provided peer-reviewed scientific literature chunks and species triggers. "
                    "Cite sources and chunk IDs when relevant. Keep your response concise, structured, and helpful."
                )
                
                payload = {
                    "contents": [
                        {
                            "parts": [
                                {
                                    "text": f"{system_text}\n\n[GROUNDED SCIENTIFIC RAG CONTEXT]:\n{rag_context}\n\n[USER QUESTION]:\n{prompt}"
                                }
                            ]
                        }
                    ],
                    "generationConfig": {
                        "maxOutputTokens": 650,
                        "temperature": 0.2
                    }
                }

                req = urllib.request.Request(
                    url,
                    data=json.dumps(payload).encode('utf-8'),
                    headers={'Content-Type': 'application/json'}
                )
                
                try:
                    with urllib.request.urlopen(req, timeout=12) as response:
                        res_data = json.loads(response.read().decode('utf-8'))
                        
                        generated_text = ""
                        candidates = res_data.get('candidates', [])
                        if candidates:
                            parts = candidates[0].get('content', {}).get('parts', [])
                            if parts:
                                generated_text = parts[0].get('text', '')
                        
                        if generated_text:
                            new_usage = increment_gemini_usage()
                            self.send_response(200)
                            self.send_header('Content-Type', 'application/json; charset=utf-8')
                            self.end_headers()
                            self.wfile.write(json.dumps({
                                "status": "success",
                                "text": generated_text,
                                "model": "gemini-1.5-flash",
                                "usage": {"today": new_usage['count'], "limit": limit}
                            }).encode('utf-8'))
                            return
                        else:
                            raise Exception("Empty generation response from Gemini API")
                except urllib.error.HTTPError as he:
                    err_body = he.read().decode('utf-8', errors='ignore')
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps({
                        "status": "api_error",
                        "fallback": True,
                        "error": f"Gemini API returned {he.code}: {err_body}",
                        "usage": {"today": today_count, "limit": limit}
                    }).encode('utf-8'))
                    return

            except Exception as e:
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "status": "error",
                    "fallback": True,
                    "error": str(e),
                    "usage": {"today": get_gemini_usage()['count'], "limit": DAILY_LIMIT}
                }).encode('utf-8'))
                return

        if self.path.startswith('/api/user-contributions/approve/'):
            sighting_id = self.path.split('/')[-1]
            return self._update_sighting_status(sighting_id, 'approved')

        if self.path.startswith('/api/user-contributions/reject/'):
            sighting_id = self.path.split('/')[-1]
            return self._update_sighting_status(sighting_id, 'rejected')

        if self.path == '/api/user-contributions':
            content_length = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_length)
            
            try:
                new_entry = json.loads(post_body.decode('utf-8'))
                
                # Load existing user contributions from separate file
                current_data = []
                if os.path.exists(USER_DATA_FILE):
                    try:
                        with open(USER_DATA_FILE, 'r', encoding='utf-8') as f:
                            current_data = json.load(f)
                    except json.JSONDecodeError:
                        current_data = []

                if isinstance(new_entry, list):
                    current_data = new_entry
                else:
                    if 'status' not in new_entry:
                        new_entry['status'] = 'pending'
                    # Check if item with same ID already exists, if so update it
                    entry_id = str(new_entry.get('id', ''))
                    existing_idx = next((i for i, item in enumerate(current_data) if str(item.get('id', '')) == entry_id), None)
                    if existing_idx is not None:
                        current_data[existing_idx] = new_entry
                    else:
                        current_data.insert(0, new_entry)

                # Save back to separate user_contributions.json
                with open(USER_DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(current_data, f, indent=2, ensure_ascii=False)

                self.send_response(201)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "status": "success",
                    "message": "User contribution saved separately to user_contributions.json",
                    "total_contributions": len(current_data)
                }).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "error": str(e)}).encode('utf-8'))
            return

        if self.path == '/api/custom-species':
            content_length = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_length)
            try:
                new_species = json.loads(post_body.decode('utf-8'))
                current_species = []
                if os.path.exists(CUSTOM_SPECIES_FILE):
                    try:
                        with open(CUSTOM_SPECIES_FILE, 'r', encoding='utf-8') as f:
                            current_species = json.load(f)
                    except json.JSONDecodeError:
                        current_species = []

                if isinstance(new_species, list):
                    current_species = new_species
                else:
                    sp_id = str(new_species.get('id', ''))
                    existing_idx = next((i for i, sp in enumerate(current_species) if str(sp.get('id', '')) == sp_id), None)
                    if existing_idx is not None:
                        current_species[existing_idx] = new_species
                    else:
                        current_species.append(new_species)

                with open(CUSTOM_SPECIES_FILE, 'w', encoding='utf-8') as f:
                    json.dump(current_species, f, indent=2, ensure_ascii=False)

                self.send_response(201)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "status": "success",
                    "message": "Custom species saved to custom_species.json",
                    "total_custom_species": len(current_species)
                }).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "error": str(e)}).encode('utf-8'))
            return

        self.send_error(404, "Endpoint not found")

    def do_PUT(self):
        if self.path.startswith('/api/user-contributions/'):
            sighting_id = self.path.split('/')[-1]
            content_length = int(self.headers.get('Content-Length', 0))
            put_body = self.rfile.read(content_length)
            try:
                updates = json.loads(put_body.decode('utf-8'))
                current_data = []
                if os.path.exists(USER_DATA_FILE):
                    with open(USER_DATA_FILE, 'r', encoding='utf-8') as f:
                        current_data = json.load(f)

                updated = False
                for item in current_data:
                    if str(item.get('id')) == sighting_id:
                        item.update(updates)
                        updated = True
                        break

                if updated:
                    with open(USER_DATA_FILE, 'w', encoding='utf-8') as f:
                        json.dump(current_data, f, indent=2, ensure_ascii=False)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "status": "success",
                    "message": f"Updated sighting {sighting_id}",
                    "updated": updated
                }).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "error": str(e)}).encode('utf-8'))
            return

        self.send_error(404, "Endpoint not found")

    def _update_sighting_status(self, sighting_id, new_status):
        try:
            current_data = []
            if os.path.exists(USER_DATA_FILE):
                with open(USER_DATA_FILE, 'r', encoding='utf-8') as f:
                    current_data = json.load(f)

            for item in current_data:
                if str(item.get('id')) == sighting_id:
                    item['status'] = new_status
                    break

            with open(USER_DATA_FILE, 'w', encoding='utf-8') as f:
                json.dump(current_data, f, indent=2, ensure_ascii=False)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps({
                "status": "success",
                "message": f"Sighting {sighting_id} status changed to {new_status}"
            }).encode('utf-8'))
        except Exception as e:
            self.send_response(400)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "error", "error": str(e)}).encode('utf-8'))

    def do_DELETE(self):
        if self.path.startswith('/api/user-contributions/'):
            sighting_id = self.path.split('/')[-1]
            try:
                current_data = []
                if os.path.exists(USER_DATA_FILE):
                    with open(USER_DATA_FILE, 'r', encoding='utf-8') as f:
                        current_data = json.load(f)
                
                filtered_data = [s for s in current_data if str(s.get('id')) != sighting_id]
                
                with open(USER_DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(filtered_data, f, indent=2, ensure_ascii=False)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "status": "success",
                    "message": f"Deleted sighting {sighting_id} from user_contributions.json",
                    "total_contributions": len(filtered_data)
                }).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "error": str(e)}).encode('utf-8'))
            return

        if self.path.startswith('/api/custom-species/'):
            species_id = self.path.split('/')[-1]
            try:
                current_species = []
                if os.path.exists(CUSTOM_SPECIES_FILE):
                    with open(CUSTOM_SPECIES_FILE, 'r', encoding='utf-8') as f:
                        current_species = json.load(f)
                
                filtered_species = [s for s in current_species if str(s.get('id')) != species_id]
                
                with open(CUSTOM_SPECIES_FILE, 'w', encoding='utf-8') as f:
                    json.dump(filtered_species, f, indent=2, ensure_ascii=False)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "status": "success",
                    "message": f"Deleted custom species {species_id}",
                    "total_custom_species": len(filtered_species)
                }).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "error": str(e)}).encode('utf-8'))
            return

        self.send_error(404, "Endpoint not found")


if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), FlightWatchHandler) as httpd:
        print(f"[OK] Flight Watch Scientific Server running at http://localhost:{PORT}")
        print(f"[OK] Base Scientific RAG: nuptial_rag_dataset.json / rag_data.js (Immutable)")
        print(f"[OK] User Contribution Store: {USER_DATA_FILE} (Separate Storage)")
        print(f"[OK] Custom Species Store: {CUSTOM_SPECIES_FILE} (Separate Storage)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.server_close()

