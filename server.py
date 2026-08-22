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

PORT = int(os.environ.get('PORT', 8085))
USER_DATA_FILE = os.path.join(os.path.dirname(__file__), 'user_contributions.json')
CUSTOM_SPECIES_FILE = os.path.join(os.path.dirname(__file__), 'custom_species.json')

# Ensure user_contributions.json exists with clean empty array if not present
if not os.path.exists(USER_DATA_FILE):
    with open(USER_DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump([], f, indent=2)

# Ensure custom_species.json exists with clean empty array if not present
if not os.path.exists(CUSTOM_SPECIES_FILE):
    with open(CUSTOM_SPECIES_FILE, 'w', encoding='utf-8') as f:
        json.dump([], f, indent=2)

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

        # Default static file handling
        return super().do_GET()

    def do_POST(self):
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

