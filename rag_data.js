/* Ant Nuptial Flight Trigger Factors — Grounded RAG Knowledge Base */
window.ANT_RAG_DATA = {
  "metadata": {
    "title": "Ant Nuptial Flight Trigger Factors — Source-Referenced RAG Dataset",
    "version": "2.1-updated",
    "total_species": 36,
    "total_chunks": 40,
    "tiers": {
      "TIER_1": {
        "title": "Tier 1 — Quantified Experimental / Field Data",
        "description": "Peer-reviewed studies that measured actual temperature, humidity, wind, or timing thresholds against observed flights.",
        "badge": "Tier 1 · Quantified Field Data",
        "confidence_level": "Highest",
        "reliability_score": 5
      },
      "TIER_2": {
        "title": "Tier 2 — Documented Qualitative Pattern (incl. Indian species)",
        "description": "Peer-reviewed or authoritative sources describing seasonal timing and general trigger conditions without precise numeric thresholds.",
        "badge": "Tier 2 · Documented Pattern",
        "confidence_level": "High",
        "reliability_score": 4
      },
      "TIER_3": {
        "title": "Tier 3 — Reproductive-Strategy Exceptions (No Classic Flight)",
        "description": "Species documented to not perform classic aerial nuptial flights at all (supercolonial/tramp species) — critical negative data points to prevent false flight predictions.",
        "badge": "Tier 3 · Non-Flying / Intranidal",
        "confidence_level": "Verified Exception",
        "reliability_score": 5
      },
      "TIER_4": {
        "title": "Tier 4 — Citizen-Science / Antkeeping Community Data",
        "description": "Aggregated hobbyist observation calendars (AntScout, AntFlights.com, AntonTop). Directionally useful but not peer-reviewed.",
        "badge": "Tier 4 · Citizen Science",
        "confidence_level": "Moderate",
        "reliability_score": 3
      },
      "TIER_5": {
        "title": "Tier 5 — India-Specific Context (Monsoon Biology, Not Direct Flight-Trigger Data)",
        "description": "Well-studied Indian species where literature documents monsoon-adaptive biology in detail, but does NOT report specific nuptial-flight weather triggers.",
        "badge": "Tier 5 · Monsoon Biology",
        "confidence_level": "Contextual (No Flight Data)",
        "reliability_score": 3
      },
      "TIER_6": {
        "title": "Tier 6 — Additional India-Occurring Species (Predicted, by City)",
        "description": "Species confirmed present in Indian cities via faunal checklists and urban ant surveys, with predictions inferred from closest documented relatives in Tiers 1–5.",
        "badge": "Tier 6 · Inferred / Predicted",
        "confidence_level": "Inferred",
        "reliability_score": 2
      }
    }
  },
  "species": [
    {
      "id": "SOL-INV",
      "name": "Red Imported Fire Ant",
      "sci": "Solenopsis invicta",
      "tier": "TIER_1",
      "region": "Native: South America. Invasive: southern USA, China, Australia, global.",
      "zone": "NA_GLOBAL",
      "tempRange": [
        25,
        35
      ],
      "tempText": "25–35°C ambient (70–90°F range also cited); larval development optimal 24–36°C.",
      "humidityRange": [
        60,
        80
      ],
      "humidityText": "60–80% relative humidity.",
      "rainfallPattern": "Within ~24 hours after rainfall while humidity is still elevated; in Guangdong field data, flights were most frequent after rain.",
      "condition": "after_rain",
      "windMax": 8,
      "windText": "Calm, at or below ~8 km/h.",
      "timingText": "Late spring–early summer onset; daily window 9:00–15:00 (no night flights recorded); duration ~30 min.",
      "months": [
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "morning",
        "afternoon"
      ],
      "notes": "One of the best-quantified species globally due to its status as a major agricultural/urban pest; extensively used as a baseline.",
      "source": "LSU AgCenter pest profile; Animal Diversity Web; Xu, Huang, Lu, Zeng & Liang (2009) Sociobiology 54:831–840 (Guangdong field observations).",
      "isFoundInIndia": false
    },
    {
      "id": "MES-BAR",
      "name": "Iberian Harvester Ant",
      "sci": "Messor barbarus",
      "tier": "TIER_1",
      "region": "Southern Spain, Portugal, N. Africa (Mediterranean semi-arid).",
      "zone": "EU",
      "tempRange": [
        15,
        35
      ],
      "tempText": "Foraging active 15–35°C; flights favoured by warm, stable anticyclonic weather following a rain front.",
      "humidityRange": [
        50,
        95
      ],
      "humidityText": "Elevated post-rain humidity aids excavation of the moistened soil.",
      "rainfallPattern": "Flights strongly clustered around specific autumn rain fronts (peak activity 2–3 days after precipitation).",
      "condition": "after_rain",
      "windMax": 10,
      "windText": "Low wind required for synchronized regional emergence.",
      "timingText": "Main season September–October (some populations also fly spring, March–June); daily window common in mornings.",
      "months": [
        3,
        4,
        5,
        6,
        9,
        10
      ],
      "timeOfDay": [
        "morning"
      ],
      "notes": "123 nuptial-flight observations (2003–2009) across the Iberian Peninsula formed 8 distinct weather-front-linked clusters.",
      "source": "Gómez & Abril (2012) Myrmecological News 16:25–29.",
      "isFoundInIndia": false
    },
    {
      "id": "LAS-NIG",
      "name": "Black Garden Ant",
      "sci": "Lasius niger",
      "tier": "TIER_1",
      "region": "Netherlands / UK / NW Europe / introduced North America.",
      "zone": "EU_NA",
      "tempRange": [
        20,
        30
      ],
      "tempText": "Warm afternoons, generally >24°C reported in UK synthesis.",
      "humidityRange": [
        55,
        95
      ],
      "humidityText": "Significant differences in relative humidity at flight onset recorded vs. non-flight days.",
      "rainfallPattern": "Flights typically follow a rainstorm while air is still humid; not strictly rain-dependent every year.",
      "condition": "humid_still_evening",
      "windMax": 15,
      "windText": "<1.7 m/s before 20 August in the original study; UK sources cite a general ceiling around 6–7 m/s (~22 km/h).",
      "timingText": "L. niger: July–August, UK peak afternoon ~17:00, 11-hr window 10:00–20:00 in aggregated citizen records.",
      "months": [
        7,
        8
      ],
      "timeOfDay": [
        "afternoon",
        "dusk",
        "evening"
      ],
      "notes": "Multi-year meteorological-station-matched dataset; a genuinely rare case of controlled comparison across sympatric species ('Flying Ant Day').",
      "source": "Boomsma & Leusink (1981) Oecologia 48:206–213; NHM 'Flying Ant Day' explainer.",
      "isFoundInIndia": false
    },
    {
      "id": "LAS-FLA",
      "name": "Yellow Meadow Ant",
      "sci": "Lasius flavus",
      "tier": "TIER_1",
      "region": "Netherlands / UK / Central & NW Europe.",
      "zone": "EU",
      "tempRange": [
        18,
        28
      ],
      "tempText": "Warm afternoons, generally >24°C reported in UK synthesis.",
      "humidityRange": [
        55,
        95
      ],
      "humidityText": "Significant differences in relative humidity at flight onset vs. non-flight days.",
      "rainfallPattern": "Flights typically follow a rainstorm while air is humid.",
      "condition": "warm_calm_afternoon",
      "windMax": 14,
      "windText": "<1.7 m/s before 20 August; ceiling around 6–7 m/s.",
      "timingText": "Main flights late summer (August–September), afternoon windows.",
      "months": [
        8,
        9
      ],
      "timeOfDay": [
        "afternoon"
      ],
      "notes": "Part of the temperate European trio measured against weather stations.",
      "source": "Boomsma & Leusink (1981) Oecologia 48:206–213.",
      "isFoundInIndia": false
    },
    {
      "id": "MYR-RUB",
      "name": "European Fire Ant",
      "sci": "Myrmica rubra",
      "tier": "TIER_1",
      "region": "Netherlands / UK / Europe / introduced North America.",
      "zone": "EU_NA",
      "tempRange": [
        19,
        28
      ],
      "tempText": "Warm afternoons, >24°C in summer.",
      "humidityRange": [
        55,
        95
      ],
      "humidityText": "Significant differences in relative humidity at flight onset vs non-flight days.",
      "rainfallPattern": "Typically follows rain while air is still humid.",
      "condition": "warm_calm_afternoon",
      "windMax": 14,
      "windText": "<1.7 m/s early season, ceiling around 6–7 m/s.",
      "timingText": "Mid-to-late summer (July–August), afternoon emergence.",
      "months": [
        7,
        8
      ],
      "timeOfDay": [
        "afternoon"
      ],
      "notes": "Sympatric European trio member verified in Oecologia field study.",
      "source": "Boomsma & Leusink (1981) Oecologia 48:206–213.",
      "isFoundInIndia": false
    },
    {
      "id": "MYR-SCA",
      "name": "European Moss Ant",
      "sci": "Myrmica scabrinodis",
      "tier": "TIER_1",
      "region": "NW Europe (Netherlands, UK).",
      "zone": "EU",
      "tempRange": [
        16,
        28
      ],
      "tempText": "No statistically defined temperature preference found.",
      "humidityRange": [
        40,
        95
      ],
      "humidityText": "No statistically defined humidity preference found.",
      "rainfallPattern": "Not distinctly rain-linked in the dataset.",
      "condition": "warm_calm_afternoon",
      "windMax": 15,
      "windText": "Same wind ceiling as co-occurring species after 20 August.",
      "timingText": "Flies within the same general summer window as the other three species studied.",
      "months": [
        7,
        8,
        9
      ],
      "timeOfDay": [
        "afternoon",
        "evening"
      ],
      "notes": "Included specifically because it is a documented negative result: unlike its co-occurring relatives, triggers vary.",
      "source": "Boomsma & Leusink (1981) Oecologia 48:206–213.",
      "isFoundInIndia": false
    },
    {
      "id": "MAN-RUB",
      "name": "Mountain Red Ant",
      "sci": "Manica rubida",
      "tier": "TIER_1",
      "region": "Southern Poland, Central European highlands.",
      "zone": "EU",
      "tempRange": [
        15,
        26
      ],
      "tempText": "Not separately quantified in source; occurs in a cooler, moister climate than Mediterranean species.",
      "humidityRange": [
        50,
        95
      ],
      "humidityText": "Not separately quantified; ambient humidity in the region is comparatively high year-round.",
      "rainfallPattern": "No rainfall recorded in the 24 hours preceding flights studied; rain instead followed the flight (same or next day).",
      "condition": "calm_mild_morning",
      "windMax": 12,
      "windText": "Not quantified in source.",
      "timingText": "Summer, exact dates not specified in the abstract-level source.",
      "months": [
        6,
        7,
        8
      ],
      "timeOfDay": [
        "morning",
        "afternoon"
      ],
      "notes": "Directly contrasts with Messor barbarus: illustrates that 'fly after rain' is a dry/seasonal-climate pattern, not a universal rule.",
      "source": "Depa (2006) Myrmecologische Nachrichten 9:27–32, as cited in Gómez & Abril (2012).",
      "isFoundInIndia": false
    },
    {
      "id": "OEC-LON",
      "name": "African Weaver Ant",
      "sci": "Oecophylla longinoda",
      "tier": "TIER_1",
      "region": "Tanzania (cashew-growing regions), Sub-Saharan Africa.",
      "zone": "AFRICA",
      "tempRange": [
        22,
        34
      ],
      "tempText": "Not numerically isolated in source; occurs during the tropical rainy season.",
      "humidityRange": [
        70,
        98
      ],
      "humidityText": "Flight days had significantly higher relative humidity than non-flight days.",
      "rainfallPattern": "Flights occur during the rainy season.",
      "condition": "monsoon_humidity",
      "windMax": 12,
      "windText": "Not quantified.",
      "timingText": "All 56 recorded flights occurred in the evening, just before sunset.",
      "months": [
        3,
        4,
        5,
        10,
        11,
        12
      ],
      "timeOfDay": [
        "dusk",
        "evening"
      ],
      "notes": "Flight days also had significantly less sunshine than non-flight days — i.e. overcast, humid evenings are the strongest trigger.",
      "source": "Peng, Renneberg & Offenberg (2015) Insectes Sociaux 62:469–476.",
      "isFoundInIndia": false
    },
    {
      "id": "OEC-SMA",
      "name": "Asian Weaver Ant",
      "sci": "Oecophylla smaragdina",
      "tier": "TIER_2",
      "region": "India (recorded in Gujarat, Assam, Meghalaya, Tamil Nadu, Odisha), through SE Asia to northern Australia.",
      "zone": "SA",
      "tempRange": [
        25,
        36
      ],
      "tempText": "Not numerically quantified for India; Australian population studies show sexual-form production is temperature-gated.",
      "humidityRange": [
        60,
        95
      ],
      "humidityText": "Not numerically quantified; elevated during monsoon.",
      "rainfallPattern": "Indian field studies explicitly describe nuptial flights occurring during the monsoon season; a Laos/Australia-wide pattern.",
      "condition": "after_rain",
      "windMax": 15,
      "windText": "Not quantified.",
      "timingText": "Morning after sunrise through around noon; reproduction levels highest in wet season and early dry season.",
      "months": [
        5,
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "morning",
        "afternoon"
      ],
      "notes": "The most India-relevant weaver-ant data available; multiple Indian nesting-ecology papers explicitly flag weather links.",
      "source": "Multiple Indian field papers (Gujarat, Assam, Meghalaya, Tamil Nadu, Odisha); Lokkers (1990) PhD thesis, James Cook University.",
      "isFoundInIndia": true
    },
    {
      "id": "CAM-SER",
      "name": "Silky Camponotus Ant",
      "sci": "Camponotus sericeus",
      "tier": "TIER_2",
      "region": "India and broader Southeast Asian/Afrotropical ranges.",
      "zone": "SA",
      "tempRange": [
        24,
        34
      ],
      "tempText": "Not explicitly quantified for flight, though reproductive cycles are climate-adapted.",
      "humidityRange": [
        50,
        95
      ],
      "humidityText": "Not numerically quantified.",
      "rainfallPattern": "Flights are reported to follow the monsoon season cycle.",
      "condition": "after_rain",
      "windMax": 15,
      "windText": "Not quantified.",
      "timingText": "Reported to occur in September–October in India, with alates said to develop from October to July and be present year-round.",
      "months": [
        9,
        10
      ],
      "timeOfDay": [
        "afternoon",
        "dusk",
        "evening"
      ],
      "notes": "Editor's flag: demonstrates a distinct temporal-gating claim — flights allegedly wait for seasonal cues rather than occurring as soon as reproductives mature. Treat this entry as lower confidence than other Tier 2 rows pending source verification.",
      "source": "Cited in submitted text as 'Kipyatkov, V.E. (2018)'; actual 2018 chapter authored by E.B. Lopatina (general Palearctic review). Treat citation with caveat.",
      "isFoundInIndia": true
    },
    {
      "id": "POG-RUG",
      "name": "Desert Harvester Ant",
      "sci": "Pogonomyrmex rugosus",
      "tier": "TIER_2",
      "region": "Southwestern USA deserts.",
      "zone": "NA",
      "tempRange": [
        26,
        38
      ],
      "tempText": "Not quantified in the cited comparative source.",
      "humidityRange": [
        30,
        85
      ],
      "humidityText": "Not quantified.",
      "rainfallPattern": "Phenology explicitly constrained by moisture availability, cited as a parallel case to Messor barbarus — flights follow rain.",
      "condition": "monsoon_humidity",
      "windMax": 14,
      "windText": "Not quantified.",
      "timingText": "Restricted, unpredictable windows tied to rainfall events rather than a fixed calendar month.",
      "months": [
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "morning",
        "afternoon"
      ],
      "notes": "Illustrative of the general desert-ant pattern: in arid systems, rainfall (not temperature or season per se) is the binding trigger.",
      "source": "Helms & Helms Cahan (2010), as cited in Gómez & Abril (2012).",
      "isFoundInIndia": false
    },
    {
      "id": "ATT-SEX",
      "name": "Leaf-cutter Ant",
      "sci": "Atta sexdens rubropilosa",
      "tier": "TIER_2",
      "region": "Brazil / South America (tropical).",
      "zone": "SA_AMERICA",
      "tempRange": [
        22,
        32
      ],
      "tempText": "Warm tropical temperatures typical of onset-of-rains period.",
      "humidityRange": [
        65,
        95
      ],
      "humidityText": "Rises sharply with monsoon/rainy-season onset.",
      "rainfallPattern": "Nuptial flights documented to coincide with the onset of the rainy season (October–November).",
      "condition": "after_rain",
      "windMax": 12,
      "windText": "Not quantified.",
      "timingText": "Tied to rainy-season onset rather than a fixed date.",
      "months": [
        10,
        11
      ],
      "timeOfDay": [
        "afternoon",
        "evening"
      ],
      "notes": "Included as the reference case for the broader 'leaf-cutter ants fly at monsoon onset' pattern often generalized.",
      "source": "General leaf-cutter ant nuptial-flight literature; Hölldobler & Wilson (1990).",
      "isFoundInIndia": false
    },
    {
      "id": "LIN-HUM",
      "name": "Argentine Ant",
      "sci": "Linepithema humile",
      "tier": "TIER_3",
      "region": "Native: South America. Invasive: worldwide, forms the largest known ant supercolonies.",
      "zone": "GLOBAL",
      "isNonFlying": true,
      "tempRange": [
        0,
        50
      ],
      "tempText": "N/A — Does not fly.",
      "humidityRange": [
        0,
        100
      ],
      "humidityText": "N/A",
      "rainfallPattern": "N/A — No weather-triggered nuptial flight.",
      "condition": "none",
      "windMax": 99,
      "windText": "N/A",
      "timingText": "N/A (Dispersal via budding).",
      "months": [],
      "timeOfDay": [],
      "notes": "Supercolonial/unicolonial species: mating is largely intranidal (occurs inside the nest), not via aerial dispersal. Do NOT force flight predictions.",
      "source": "Eyer, Blumenfeld & Vargo (2019) Ecology and Evolution; Cini et al. (2022) Myrmecological News 32:1–22.",
      "isFoundInIndia": false
    },
    {
      "id": "MON-PHA",
      "name": "Pharaoh Ant",
      "sci": "Monomorium pharaonis",
      "tier": "TIER_3",
      "region": "Believed native to Africa/Asia; now a cosmopolitan indoor pest worldwide, including India.",
      "zone": "GLOBAL",
      "isNonFlying": true,
      "tempRange": [
        0,
        50
      ],
      "tempText": "N/A",
      "humidityRange": [
        0,
        100
      ],
      "humidityText": "N/A",
      "rainfallPattern": "N/A",
      "condition": "none",
      "windMax": 99,
      "windText": "N/A",
      "timingText": "N/A",
      "months": [],
      "timeOfDay": [],
      "notes": "Nuptial flights outdoors are rare to essentially absent. New queens mate within the nest; winged alates do not rely on weather triggers.",
      "source": "Hymenoptera reproductive-strategy literature; general pest-identification references.",
      "isFoundInIndia": true
    },
    {
      "id": "ANO-GRA",
      "name": "Yellow Crazy Ant",
      "sci": "Anoplolepis gracilipes",
      "tier": "TIER_3",
      "region": "Likely native Southeast Asia; invasive across ~90% of tropical Pacific island territories, present in India.",
      "zone": "SA",
      "isNonFlying": true,
      "tempRange": [
        0,
        50
      ],
      "tempText": "Population dynamics linked to winter temperature.",
      "humidityRange": [
        0,
        100
      ],
      "humidityText": "N/A for flight specifically.",
      "rainfallPattern": "Monthly precipitation accumulation affects population dynamics (not a flight trigger).",
      "condition": "none",
      "windMax": 99,
      "windText": "N/A",
      "timingText": "N/A",
      "months": [],
      "timeOfDay": [],
      "notes": "Forms large supercolonies with intranidal mating; true dispersal nuptial flights are rare or absent in most populations.",
      "source": "Thomas, Becker, Abbott & Feldhaar (2010); Lin, Yeh, Wu & Wu (2023) Biology 12(12):1482.",
      "isFoundInIndia": true
    },
    {
      "id": "WAS-AUR",
      "name": "Little Fire Ant / Electric Ant",
      "sci": "Wasmannia auropunctata",
      "tier": "TIER_3",
      "region": "Native Central/South America; invasive worldwide in the tropics.",
      "zone": "GLOBAL",
      "isNonFlying": true,
      "tempRange": [
        0,
        50
      ],
      "tempText": "N/A",
      "humidityRange": [
        0,
        100
      ],
      "humidityText": "N/A",
      "rainfallPattern": "N/A",
      "condition": "none",
      "windMax": 99,
      "windText": "N/A",
      "timingText": "N/A",
      "months": [],
      "timeOfDay": [],
      "notes": "Documented alongside L. humile, M. pharaonis and A. gracilipes as sharing the tramp-ant reproductive syndrome.",
      "source": "Fournier et al. (2005), as reviewed in Eyer, Blumenfeld & Vargo (2019).",
      "isFoundInIndia": false
    },
    {
      "id": "CAR-DIV",
      "name": "Asian Marauder Ant",
      "sci": "Carebara diversa",
      "tier": "TIER_4",
      "region": "India and broader Southeast Asia.",
      "zone": "SA",
      "tempRange": [
        24,
        34
      ],
      "tempText": "Warm days.",
      "humidityRange": [
        65,
        95
      ],
      "humidityText": "High humidity required.",
      "rainfallPattern": "Most frequently sighted actively flying immediately after rainfall when soil is moist.",
      "condition": "after_rain",
      "windMax": 12,
      "windText": "Not quantified.",
      "timingText": "Primarily monsoon season; daylight/afternoon windows commonly reported by antkeepers.",
      "months": [
        5,
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "afternoon",
        "dusk",
        "evening"
      ],
      "notes": "Extremely popular in the pet trade; highly dependent on post-rain humidity for the survival of the large queens before founding.",
      "source": "Aggregated hobbyist care literature and regional sighting reports (e.g., BestAntsUK community data).",
      "isFoundInIndia": true
    },
    {
      "id": "TET-RUF",
      "name": "Arboreal Bicolored Ant",
      "sci": "Tetraponera rufonigra",
      "tier": "TIER_4",
      "region": "India, Southeast Asia (including Malaysia).",
      "zone": "SA",
      "tempRange": [
        24,
        35
      ],
      "tempText": "Warm, daytime temperatures.",
      "humidityRange": [
        35,
        80
      ],
      "humidityText": "Capable of flying outside of peak humidity/rain events.",
      "rainfallPattern": "Not strictly rain-dependent; uniquely reported to fly on dry days unlike many ground-nesting species.",
      "condition": "warm_calm_afternoon",
      "windMax": 15,
      "windText": "Not quantified.",
      "timingText": "Daytime flights commonly reported.",
      "months": [
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "timeOfDay": [
        "morning",
        "afternoon"
      ],
      "notes": "A frequently encountered arboreal pseudomyrmecine; citizen data notes it often flies during the day without the strict rain triggers required by ground-nesting local species.",
      "source": "AntFlights.com registry data; regional ant-keeping community observations (e.g., AntsDIY).",
      "isFoundInIndia": true
    },
    {
      "id": "CAM-LIG",
      "name": "Giant European Carpenter Ant",
      "sci": "Camponotus ligniperda",
      "tier": "TIER_4",
      "region": "Central / Western Europe.",
      "zone": "EU",
      "tempRange": [
        18,
        28
      ],
      "tempText": "Not quantified; earlier flights recorded following unusually warm spring.",
      "humidityRange": [
        40,
        85
      ],
      "humidityText": "Not quantified.",
      "rainfallPattern": "Not specifically isolated.",
      "condition": "warm_calm_afternoon",
      "windMax": 14,
      "windText": "Not quantified.",
      "timingText": "Normally late May–June; citizen data recorded flights as early as 21 May after a warm spring.",
      "months": [
        5,
        6
      ],
      "timeOfDay": [
        "afternoon",
        "evening"
      ],
      "notes": "Included to show how much year-to-year variance exists even within a documented 'normal' window.",
      "source": "AntonTop 2026 European Nuptial Flight Calendar.",
      "isFoundInIndia": false
    },
    {
      "id": "FOR-RUF",
      "name": "Red Wood Ant",
      "sci": "Formica rufa",
      "tier": "TIER_4",
      "region": "Europe.",
      "zone": "EU",
      "tempRange": [
        16,
        26
      ],
      "tempText": "Not quantified.",
      "humidityRange": [
        45,
        85
      ],
      "humidityText": "Not quantified.",
      "rainfallPattern": "Not quantified.",
      "condition": "warm_calm_afternoon",
      "windMax": 14,
      "windText": "Not quantified.",
      "timingText": "Late May–June, overlapping with C. ligniperda.",
      "months": [
        5,
        6
      ],
      "timeOfDay": [
        "afternoon"
      ],
      "notes": "Multiple species frequently fly on the same evenings once regional weather triggers align, per aggregated observations.",
      "source": "AntonTop 2026 European Nuptial Flight Calendar.",
      "isFoundInIndia": false
    },
    {
      "id": "MES-STR",
      "name": "European Harvester Ant",
      "sci": "Messor structor / Tetramorium spp.",
      "tier": "TIER_4",
      "region": "Central and Eastern Europe.",
      "zone": "EU",
      "tempRange": [
        22,
        32
      ],
      "tempText": "Not quantified.",
      "humidityRange": [
        40,
        80
      ],
      "humidityText": "Not quantified.",
      "rainfallPattern": "Not quantified.",
      "condition": "hot_dry_afternoon",
      "windMax": 12,
      "windText": "Not quantified.",
      "timingText": "June–July (M. structor slightly later than M. barbarus further south).",
      "months": [
        6,
        7
      ],
      "timeOfDay": [
        "afternoon"
      ],
      "notes": "Congeneric comparison with the Tier-1 M. barbarus entry shows a clear latitudinal shift in flight timing.",
      "source": "AntonTop 2026 European Nuptial Flight Calendar.",
      "isFoundInIndia": false
    },
    {
      "id": "HAR-SAL",
      "name": "Indian Jumping Ant (Jerdon's)",
      "sci": "Harpegnathos saltator",
      "tier": "TIER_5",
      "region": "India (type locality) and Sri Lanka; well studied in Karnataka, Kerala, Tamil Nadu.",
      "zone": "SA",
      "tempRange": [
        22,
        32
      ],
      "tempText": "Not documented for flight specifically.",
      "humidityRange": [
        60,
        95
      ],
      "humidityText": "Not documented for flight specifically.",
      "rainfallPattern": "Not documented as a flight trigger. What IS documented: nest architecture to withstand monsoon rains.",
      "condition": "after_rain",
      "windMax": 12,
      "windText": "Not quantified.",
      "timingText": "Not documented for flight timing specifically.",
      "months": [
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "evening"
      ],
      "notes": "One of the most-studied Indian ant species overall, yet its nuptial flight triggers remain largely unquantified in peer-reviewed literature.",
      "source": "Peeters, Bourgoin & Hölldobler (1994); AntWiki.",
      "isFoundInIndia": true
    },
    {
      "id": "DIA-IND",
      "name": "Indian Diacamma Ant",
      "sci": "Diacamma indicum",
      "tier": "TIER_5",
      "region": "India (studied in West Bengal / Kolkata region).",
      "zone": "SA",
      "tempRange": [
        24,
        32
      ],
      "tempText": "Not documented for flight specifically.",
      "humidityRange": [
        65,
        95
      ],
      "humidityText": "Not documented for flight specifically.",
      "rainfallPattern": "Not documented as a flight trigger. What IS documented: a 'dual response' to monsoon nest flooding.",
      "condition": "calm_mild_morning",
      "windMax": 12,
      "windText": "Not quantified.",
      "timingText": "Queenless ponerine (gamergates); males fly but timing unquantified.",
      "months": [
        6,
        7,
        8
      ],
      "timeOfDay": [
        "morning"
      ],
      "notes": "Directly relevant to monsoon biology and nest-site selection in the Indian context, but the published study focuses on survival, not flight.",
      "source": "Kolay & Annagiri (2015) Scientific Reports 5:13716.",
      "isFoundInIndia": true
    },
    {
      "id": "CAM-COM",
      "name": "Golden-tailed Black Ant",
      "sci": "Camponotus compressus",
      "tier": "TIER_6",
      "predictionBasis": "Congeneric with Camponotus ligniperda (Tier 4)",
      "confidence": "LOW",
      "region": "Indian cities and rural habitats nationwide.",
      "zone": "SA",
      "tempRange": [
        25,
        35
      ],
      "tempText": "Predicted ~25–35°C based on urban active periods.",
      "humidityRange": [
        55,
        95
      ],
      "humidityText": "Predicted elevated post-monsoon humidity.",
      "rainfallPattern": "Predicted to follow monsoon rainfall pulses.",
      "condition": "after_rain",
      "windMax": 14,
      "windText": "Predicted low to moderate wind.",
      "timingText": "Commonly observed at dusk/evening during monsoon months (June–August).",
      "months": [
        6,
        7,
        8
      ],
      "timeOfDay": [
        "dusk",
        "evening"
      ],
      "notes": "Faunally confirmed across India; flight timing inferred from congenerics and regional surveys.",
      "source": "Faunal checklists (Bharti et al. 2016); inferred from Tier 4 C. ligniperda.",
      "isFoundInIndia": true
    },
    {
      "id": "SOL-GEM",
      "name": "Tropical Fire Ant",
      "sci": "Solenopsis geminata",
      "tier": "TIER_6",
      "predictionBasis": "Congeneric with Solenopsis invicta (Tier 1)",
      "confidence": "MODERATE",
      "region": "Widespread across peninsular India and urban areas.",
      "zone": "SA",
      "tempRange": [
        25,
        35
      ],
      "tempText": "Predicted 25–35°C based on S. invicta Tier 1 data.",
      "humidityRange": [
        60,
        85
      ],
      "humidityText": "Predicted 60–80% RH.",
      "rainfallPattern": "Predicted within 24–48 hours after rain events.",
      "condition": "after_rain",
      "windMax": 10,
      "windText": "Calm, <10 km/h.",
      "timingText": "Afternoon to dusk during monsoon season (May–September).",
      "months": [
        5,
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "afternoon",
        "evening"
      ],
      "notes": "Invasive/pantropical tramp congener of S. invicta with similar physiological thresholds.",
      "source": "Inferred from Tier 1 S. invicta data (Xu et al. 2009; LSU AgCenter).",
      "isFoundInIndia": true
    },
    {
      "id": "DIA-RUG",
      "name": "Rugose Ponerine Ant",
      "sci": "Diacamma rugosum",
      "tier": "TIER_6",
      "predictionBasis": "Congeneric with Diacamma indicum (Tier 5)",
      "confidence": "LOW-MODERATE",
      "region": "Indian urban surveys and forest leaf litter.",
      "zone": "SA",
      "tempRange": [
        24,
        32
      ],
      "tempText": "Predicted warm monsoon temperatures.",
      "humidityRange": [
        60,
        95
      ],
      "humidityText": "High humidity.",
      "rainfallPattern": "Post-monsoon ground moisture.",
      "condition": "calm_mild_morning",
      "windMax": 12,
      "windText": "Calm.",
      "timingText": "Morning / dusk flights by males.",
      "months": [
        6,
        7,
        8
      ],
      "timeOfDay": [
        "morning",
        "dusk"
      ],
      "notes": "Queenless ponerine reproductive biology inferred from D. indicum.",
      "source": "Inferred from Diacamma indicum (Tier 5).",
      "isFoundInIndia": true
    },
    {
      "id": "ODO-TRA",
      "name": "Asian Ponerine Ant",
      "sci": "Odontoponera transversa / Odontomachus simillimus",
      "tier": "TIER_6",
      "predictionBasis": "Subfamily analog: Harpegnathos saltator (Tier 5)",
      "confidence": "LOW",
      "region": "South and Southeast Asia.",
      "zone": "SA",
      "tempRange": [
        24,
        32
      ],
      "tempText": "Warm tropical.",
      "humidityRange": [
        65,
        95
      ],
      "humidityText": "Humid post-rain evenings.",
      "rainfallPattern": "Monsoon rainy season.",
      "condition": "after_rain",
      "windMax": 12,
      "windText": "Calm.",
      "timingText": "Evening / dusk.",
      "months": [
        6,
        7,
        8
      ],
      "timeOfDay": [
        "evening"
      ],
      "notes": "Subfamily Ponerinae analog; ground nest exit following monsoon showers.",
      "source": "Faunal checklists; inferred from Tier 5 ponerine biology.",
      "isFoundInIndia": true
    },
    {
      "id": "PAR-LON",
      "name": "Longhorn Crazy Ant",
      "sci": "Paratrechina longicornis",
      "tier": "TIER_6",
      "predictionBasis": "Partial analog: tramp-ant syndrome (Tier 3, partial)",
      "confidence": "LOW",
      "region": "Cosmopolitan tramp ant in Indian cities.",
      "zone": "SA_GLOBAL",
      "tempRange": [
        24,
        34
      ],
      "tempText": "Warm temperatures.",
      "humidityRange": [
        40,
        90
      ],
      "humidityText": "Wide tolerance.",
      "rainfallPattern": "Not strictly rain-bound; partial budding dispersal.",
      "condition": "warm_calm_afternoon",
      "windMax": 14,
      "windText": "Low wind.",
      "timingText": "Warm season afternoons/evenings.",
      "months": [
        5,
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "afternoon",
        "evening"
      ],
      "notes": "Tramp species with mixed dispersal — some male flight, queen dispersal mostly budding.",
      "source": "Tramp-ant reproductive syndrome literature.",
      "isFoundInIndia": true
    },
    {
      "id": "TAP-MEL",
      "name": "Ghost Ant",
      "sci": "Tapinoma melanocephalum",
      "tier": "TIER_6",
      "predictionBasis": "Tramp-ant reproductive syndrome (Tier 3)",
      "confidence": "MODERATE (Exception)",
      "region": "Ubiquitous indoor/urban tramp ant in India.",
      "zone": "SA_GLOBAL",
      "isNonFlying": true,
      "tempRange": [
        0,
        50
      ],
      "tempText": "N/A",
      "humidityRange": [
        0,
        100
      ],
      "humidityText": "N/A",
      "rainfallPattern": "N/A",
      "condition": "none",
      "windMax": 99,
      "windText": "N/A",
      "timingText": "N/A (Budding)",
      "months": [],
      "timeOfDay": [],
      "notes": "Tramp species: highly polygynous supercolonies that reproduce via budding rather than aerial nuptial flights.",
      "source": "Inferred from tramp ant syndrome (Tier 3).",
      "isFoundInIndia": true
    },
    {
      "id": "CRE-SUB",
      "name": "Indian Acrobat Ant",
      "sci": "Crematogaster subnuda / C. ransonneti",
      "tier": "TIER_6",
      "predictionBasis": "Ecological analog: Oecophylla smaragdina (Tier 2)",
      "confidence": "LOW",
      "region": "Arboreal and carton-nesting across India.",
      "zone": "SA",
      "tempRange": [
        25,
        34
      ],
      "tempText": "Warm canopy temperatures.",
      "humidityRange": [
        55,
        95
      ],
      "humidityText": "Monsoon humidity.",
      "rainfallPattern": "Monsoon rainy period.",
      "condition": "after_rain",
      "windMax": 12,
      "windText": "Low wind.",
      "timingText": "Late afternoon to dusk.",
      "months": [
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "afternoon",
        "dusk"
      ],
      "notes": "Arboreal ecological analog of Oecophylla; flights correlate with monsoon wet spells.",
      "source": "Inferred from Tier 2 arboreal Weaver ant pattern.",
      "isFoundInIndia": true
    },
    {
      "id": "PHE-SPP",
      "name": "Indian Big-headed Ants",
      "sci": "Pheidole spp.",
      "tier": "TIER_6",
      "predictionBasis": "Genus study: Pheidole sitarches (direct genus citation)",
      "confidence": "MODERATE (genus)",
      "region": "Common soil and pavement nesting ants in India.",
      "zone": "SA",
      "tempRange": [
        24,
        33
      ],
      "tempText": "24–33°C.",
      "humidityRange": [
        60,
        90
      ],
      "humidityText": "Elevated post-rain humidity.",
      "rainfallPattern": "After warm summer/monsoon rain events.",
      "condition": "after_rain",
      "windMax": 10,
      "windText": "Calm.",
      "timingText": "Evening / night.",
      "months": [
        5,
        6,
        7,
        8
      ],
      "timeOfDay": [
        "evening"
      ],
      "notes": "Pheidole genus is well-documented for synchronized post-rain evening nuptial flights.",
      "source": "Pheidole sitarches genus-level citations in Gómez & Abril (2012).",
      "isFoundInIndia": true
    },
    {
      "id": "POL-LAC",
      "name": "Spiny Ant",
      "sci": "Polyrhachis lacteipennis and other spp.",
      "tier": "TIER_6",
      "predictionBasis": "Ecological analog: O. smaragdina / C. compressus",
      "confidence": "LOW",
      "region": "Open scrub, trees and urban foliage across India.",
      "zone": "SA",
      "tempRange": [
        25,
        35
      ],
      "tempText": "Warm daytime/evening.",
      "humidityRange": [
        50,
        90
      ],
      "humidityText": "Monsoon humidity.",
      "rainfallPattern": "Post-monsoon showers.",
      "condition": "after_rain",
      "windMax": 12,
      "windText": "Calm.",
      "timingText": "Dusk / evening.",
      "months": [
        6,
        7,
        8
      ],
      "timeOfDay": [
        "dusk",
        "evening"
      ],
      "notes": "Arboreal/epigeic spiny ants; inferred from co-occurring Camponotini relatives.",
      "source": "Urban checklists; inferred from Camponotus / Oecophylla analogs.",
      "isFoundInIndia": true
    },
    {
      "id": "TRI-DES",
      "name": "Singapore Ant (Destructive Trailing Ant)",
      "sci": "Trichomyrmex destructor",
      "tier": "TIER_6",
      "isInvasive": true,
      "predictionBasis": "Invasive urban tramp ant with documented nocturnal swarms",
      "confidence": "MODERATE",
      "region": "Invasive across India (Bangalore, Chennai, Mumbai, Delhi, urban centers).",
      "zone": "SA_GLOBAL",
      "tempRange": [
        25,
        36
      ],
      "tempText": "25–36°C warm evenings / nights.",
      "humidityRange": [
        60,
        95
      ],
      "humidityText": "Elevated humidity (>60% RH).",
      "rainfallPattern": "Pre-monsoon and monsoon humidity pulses; alates fly to outdoor and porch lights.",
      "condition": "humid_still_evening",
      "windMax": 10,
      "windText": "Calm nocturnal air, <10 km/h.",
      "timingText": "May to September; nocturnal and crepuscular flights (19:00–23:00).",
      "months": [
        5,
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "dusk",
        "evening"
      ],
      "notes": "Invasive urban pest in India. Unlike Pharaoh ants, T. destructor alate queens and males perform nighttime aerial flights towards artificial lights before mating.",
      "source": "Wetterer (2009) Myrmecological News 12:157–177; Indian urban pest surveys.",
      "isFoundInIndia": true
    },
    {
      "id": "TET-BIC",
      "name": "Bicolored Penny Ant (Guinea Ant)",
      "sci": "Tetramorium bicarinatum",
      "tier": "TIER_6",
      "isInvasive": true,
      "predictionBasis": "Invasive tramp ant with short dispersal flights",
      "confidence": "MODERATE",
      "region": "Invasive pantropical tramp ant established in urban gardens, greenhouses, and coastal disturbed areas across India.",
      "zone": "SA_GLOBAL",
      "tempRange": [
        24,
        34
      ],
      "tempText": "24–34°C.",
      "humidityRange": [
        65,
        95
      ],
      "humidityText": "High humidity (>65% RH).",
      "rainfallPattern": "Flights cluster in warm periods after monsoon rains.",
      "condition": "after_rain",
      "windMax": 12,
      "windText": "Low wind, <12 km/h.",
      "timingText": "June to October; late afternoon to dusk windows.",
      "months": [
        6,
        7,
        8,
        9,
        10
      ],
      "timeOfDay": [
        "afternoon",
        "dusk",
        "evening"
      ],
      "notes": "Invasive tramp ant; alate queens engage in localized dispersal flights and swarm near nest entrances under warm humid conditions.",
      "source": "Wetterer (2009) Sociobiology 54:797–810; Bharti, Guénard, Bharti & Economo (2016).",
      "isFoundInIndia": true
    },
    {
      "id": "NYL-BOU",
      "name": "Bourbon Crazy Ant (Rover Ant)",
      "sci": "Nylanderia bourbonica",
      "tier": "TIER_6",
      "isInvasive": true,
      "predictionBasis": "Invasive tramp ant with prolific light-attracted swarms",
      "confidence": "MODERATE",
      "region": "Invasive pantropical tramp ant established in Indian urban landscapes and coastal zones.",
      "zone": "SA_GLOBAL",
      "tempRange": [
        24,
        34
      ],
      "tempText": "24–34°C.",
      "humidityRange": [
        55,
        90
      ],
      "humidityText": "Warm, muggy evenings.",
      "rainfallPattern": "Summer and monsoon post-rain periods.",
      "condition": "humid_still_evening",
      "windMax": 12,
      "windText": "Calm airflow, <12 km/h.",
      "timingText": "May to September; crepuscular and evening swarms around streetlights.",
      "months": [
        5,
        6,
        7,
        8,
        9
      ],
      "timeOfDay": [
        "dusk",
        "evening"
      ],
      "notes": "Invasive urban ant; prolific alate producer. Males and queens frequently swarm near lights on muggy evenings.",
      "source": "Kallal & Lapolla (2012) Zootaxa; Bharti et al. (2016).",
      "isFoundInIndia": true
    },
    {
      "id": "PHE-MEG",
      "name": "African Big-Headed Ant",
      "sci": "Pheidole megacephala",
      "tier": "TIER_6",
      "isInvasive": true,
      "predictionBasis": "Invasive tramp ant with post-rain flight swarms",
      "confidence": "MODERATE",
      "region": "Invasive tramp ant documented in southern and western India (e.g. Maharashtra, Karnataka).",
      "zone": "SA_GLOBAL",
      "tempRange": [
        22,
        32
      ],
      "tempText": "22–32°C.",
      "humidityRange": [
        70,
        95
      ],
      "humidityText": "High humidity following rain.",
      "rainfallPattern": "Strongly triggered 1–2 days after monsoon rain events.",
      "condition": "after_rain",
      "windMax": 10,
      "windText": "Calm, <10 km/h.",
      "timingText": "May to August; early mornings or dusk.",
      "months": [
        5,
        6,
        7,
        8
      ],
      "timeOfDay": [
        "morning",
        "dusk"
      ],
      "notes": "One of the world's worst 100 invasive species. Winged alates perform localized nuptial flights when humidity is elevated after rainfall.",
      "source": "Hoffmann (1998); Global Invasive Species Database (GISD); Bharti et al. (2016).",
      "isFoundInIndia": true
    }
  ],
  "chunks": [
    {
      "id": "CHUNK-META-01",
      "title": "Dataset Purpose & Anti-Hallucination Methodology",
      "tier": "METADATA",
      "content": "Why this dataset looks the way it does: Ant nuptial-flight triggers are one of the most under-documented areas of myrmecology. Even for well-studied invasive pests, most 'data' in circulation online is anecdotal rather than peer-reviewed field measurement. Rather than inventing precise numbers for species with no real record — which would poison a RAG index with confident-sounding fabrications — this document only includes species for which some form of documented evidence exists, graded into confidence tiers (Tiers 1 to 6). Every entry carries its source.",
      "keywords": [
        "purpose",
        "methodology",
        "hallucination",
        "tiers",
        "confidence",
        "anecdotal",
        "myrmecology",
        "dataset"
      ],
      "source": "Ant Nuptial Flight Trigger Factors PDF, Page 1"
    },
    {
      "id": "CHUNK-META-02",
      "title": "Confidence Tier Definitions (Tiers 1–6)",
      "tier": "METADATA",
      "content": "TIER 1 — Quantified experimental/field data: peer-reviewed studies that measured actual temperature, humidity, wind, or timing thresholds against observed flights.\nTIER 2 — Documented qualitative pattern: peer-reviewed or authoritative sources describing seasonal timing and general trigger conditions without precise numeric thresholds.\nTIER 3 — Reproductive-strategy exceptions: species documented to NOT perform classic aerial nuptial flights at all (supercolonial/tramp species) — an important negative data point for a RAG system, so it doesn't force-fit 'flight factors' onto species that disperse by budding instead.\nTIER 4 — Citizen-science / antkeeping community data: aggregated hobbyist observation calendars. Directionally useful but treat as lower confidence.\nTIER 5 — India-Specific Context: literature documents monsoon-adaptive biology in detail, but does NOT report specific nuptial-flight weather triggers.\nTIER 6 — Additional India-Occurring Species (Predicted): inferred from closest relatives in Tiers 1–5; explicitly NOT verified species-specific data.",
      "keywords": [
        "tier 1",
        "tier 2",
        "tier 3",
        "tier 4",
        "tier 5",
        "tier 6",
        "definitions",
        "confidence",
        "monsoon",
        "exceptions"
      ],
      "source": "Ant Nuptial Flight Trigger Factors PDF, Pages 1, 9, 10"
    },
    {
      "id": "CHUNK-EDITOR-NOTE",
      "title": "Editor's Note: Revision History & Citation Audit (Camponotus sericeus Caveat)",
      "tier": "METADATA",
      "content": "This update adds Carebara diversa and Tetraponera rufonigra (Tier 4, citizen-science) and Camponotus sericeus (Tier 2, documented qualitative pattern). One issue was flagged rather than silently corrected: the Camponotus sericeus entry cites 'Kipyatkov, V.E. (2018)' for a specific claim that Indian flights occur strictly in September–October. The actual 2018 IntechOpen chapter is authored by E.B. Lopatina, not Kipyatkov, and is a general review of seasonal-cycle biology in Russian/Palearctic ants — it does not appear to contain India-specific Camponotus sericeus flight-timing data. The underlying claim could not be independently verified against that source and should be treated as lower-confidence than the rest of Tier 2 until a better citation is located.",
      "keywords": [
        "editor",
        "revision",
        "camponotus sericeus",
        "kipyatkov",
        "lopatina",
        "carebara diversa",
        "tetraponera rufonigra",
        "caveat",
        "citation"
      ],
      "source": "Ant Nuptial Flight Trigger Factors PDF, Page 11"
    },
    {
      "id": "CHUNK-INDIA-SUMMARY",
      "title": "India Myrmecology Overview & 828+ Species Context",
      "tier": "METADATA",
      "content": "India hosts 828+ recognized ant species/subspecies across 100 genera nationally (Bharti, Guénard, Bharti & Economo 2016); the overwhelming majority have no published nuptial-flight data of any kind, documented or predicted. Field predictions for most Indian species must rely on congeneric ecological analogs or citizen science records until further field measurements are published.",
      "keywords": [
        "india",
        "828 species",
        "bharti",
        "genera",
        "faunal checklist",
        "under-documented"
      ],
      "source": "Ant Nuptial Flight Trigger Factors PDF, Page 10"
    },
    {
      "id": "CHUNK-SP-SOL-INV",
      "title": "Dossier: Red Imported Fire Ant (Solenopsis invicta) — Tier 1 · Quantified Field Data",
      "tier": "TIER_1",
      "speciesId": "SOL-INV",
      "content": "Species: Red Imported Fire Ant (Solenopsis invicta)\nTier: TIER_1 (Tier 1 — Quantified Experimental / Field Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Native: South America. Invasive: southern USA, China, Australia, global.\nTemperature: 25–35°C ambient (70–90°F range also cited); larval development optimal 24–36°C.\nHumidity: 60–80% relative humidity.\nRainfall Pattern: Within ~24 hours after rainfall while humidity is still elevated; in Guangdong field data, flights were most frequent after rain.\nWind: Calm, at or below ~8 km/h.\nTiming (Season / Time-of-day): Late spring–early summer onset; daily window 9:00–15:00 (no night flights recorded); duration ~30 min.\nNotes: One of the best-quantified species globally due to its status as a major agricultural/urban pest; extensively used as a baseline.\nSource: LSU AgCenter pest profile; Animal Diversity Web; Xu, Huang, Lu, Zeng & Liang (2009) Sociobiology 54:831–840 (Guangdong field observations).",
      "keywords": [
        "red imported fire ant",
        "solenopsis invicta",
        "tier_1",
        "after_rain",
        "na_global",
        "species dossier"
      ],
      "source": "LSU AgCenter pest profile; Animal Diversity Web; Xu, Huang, Lu, Zeng & Liang (2009) Sociobiology 54:831–840 (Guangdong field observations)."
    },
    {
      "id": "CHUNK-SP-MES-BAR",
      "title": "Dossier: Iberian Harvester Ant (Messor barbarus) — Tier 1 · Quantified Field Data",
      "tier": "TIER_1",
      "speciesId": "MES-BAR",
      "content": "Species: Iberian Harvester Ant (Messor barbarus)\nTier: TIER_1 (Tier 1 — Quantified Experimental / Field Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Southern Spain, Portugal, N. Africa (Mediterranean semi-arid).\nTemperature: Foraging active 15–35°C; flights favoured by warm, stable anticyclonic weather following a rain front.\nHumidity: Elevated post-rain humidity aids excavation of the moistened soil.\nRainfall Pattern: Flights strongly clustered around specific autumn rain fronts (peak activity 2–3 days after precipitation).\nWind: Low wind required for synchronized regional emergence.\nTiming (Season / Time-of-day): Main season September–October (some populations also fly spring, March–June); daily window common in mornings.\nNotes: 123 nuptial-flight observations (2003–2009) across the Iberian Peninsula formed 8 distinct weather-front-linked clusters.\nSource: Gómez & Abril (2012) Myrmecological News 16:25–29.",
      "keywords": [
        "iberian harvester ant",
        "messor barbarus",
        "tier_1",
        "after_rain",
        "eu",
        "species dossier"
      ],
      "source": "Gómez & Abril (2012) Myrmecological News 16:25–29."
    },
    {
      "id": "CHUNK-SP-LAS-NIG",
      "title": "Dossier: Black Garden Ant (Lasius niger) — Tier 1 · Quantified Field Data",
      "tier": "TIER_1",
      "speciesId": "LAS-NIG",
      "content": "Species: Black Garden Ant (Lasius niger)\nTier: TIER_1 (Tier 1 — Quantified Experimental / Field Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Netherlands / UK / NW Europe / introduced North America.\nTemperature: Warm afternoons, generally >24°C reported in UK synthesis.\nHumidity: Significant differences in relative humidity at flight onset recorded vs. non-flight days.\nRainfall Pattern: Flights typically follow a rainstorm while air is still humid; not strictly rain-dependent every year.\nWind: <1.7 m/s before 20 August in the original study; UK sources cite a general ceiling around 6–7 m/s (~22 km/h).\nTiming (Season / Time-of-day): L. niger: July–August, UK peak afternoon ~17:00, 11-hr window 10:00–20:00 in aggregated citizen records.\nNotes: Multi-year meteorological-station-matched dataset; a genuinely rare case of controlled comparison across sympatric species ('Flying Ant Day').\nSource: Boomsma & Leusink (1981) Oecologia 48:206–213; NHM 'Flying Ant Day' explainer.",
      "keywords": [
        "black garden ant",
        "lasius niger",
        "tier_1",
        "humid_still_evening",
        "eu_na",
        "species dossier"
      ],
      "source": "Boomsma & Leusink (1981) Oecologia 48:206–213; NHM 'Flying Ant Day' explainer."
    },
    {
      "id": "CHUNK-SP-LAS-FLA",
      "title": "Dossier: Yellow Meadow Ant (Lasius flavus) — Tier 1 · Quantified Field Data",
      "tier": "TIER_1",
      "speciesId": "LAS-FLA",
      "content": "Species: Yellow Meadow Ant (Lasius flavus)\nTier: TIER_1 (Tier 1 — Quantified Experimental / Field Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Netherlands / UK / Central & NW Europe.\nTemperature: Warm afternoons, generally >24°C reported in UK synthesis.\nHumidity: Significant differences in relative humidity at flight onset vs. non-flight days.\nRainfall Pattern: Flights typically follow a rainstorm while air is humid.\nWind: <1.7 m/s before 20 August; ceiling around 6–7 m/s.\nTiming (Season / Time-of-day): Main flights late summer (August–September), afternoon windows.\nNotes: Part of the temperate European trio measured against weather stations.\nSource: Boomsma & Leusink (1981) Oecologia 48:206–213.",
      "keywords": [
        "yellow meadow ant",
        "lasius flavus",
        "tier_1",
        "warm_calm_afternoon",
        "eu",
        "species dossier"
      ],
      "source": "Boomsma & Leusink (1981) Oecologia 48:206–213."
    },
    {
      "id": "CHUNK-SP-MYR-RUB",
      "title": "Dossier: European Fire Ant (Myrmica rubra) — Tier 1 · Quantified Field Data",
      "tier": "TIER_1",
      "speciesId": "MYR-RUB",
      "content": "Species: European Fire Ant (Myrmica rubra)\nTier: TIER_1 (Tier 1 — Quantified Experimental / Field Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Netherlands / UK / Europe / introduced North America.\nTemperature: Warm afternoons, >24°C in summer.\nHumidity: Significant differences in relative humidity at flight onset vs non-flight days.\nRainfall Pattern: Typically follows rain while air is still humid.\nWind: <1.7 m/s early season, ceiling around 6–7 m/s.\nTiming (Season / Time-of-day): Mid-to-late summer (July–August), afternoon emergence.\nNotes: Sympatric European trio member verified in Oecologia field study.\nSource: Boomsma & Leusink (1981) Oecologia 48:206–213.",
      "keywords": [
        "european fire ant",
        "myrmica rubra",
        "tier_1",
        "warm_calm_afternoon",
        "eu_na",
        "species dossier"
      ],
      "source": "Boomsma & Leusink (1981) Oecologia 48:206–213."
    },
    {
      "id": "CHUNK-SP-MYR-SCA",
      "title": "Dossier: European Moss Ant (Myrmica scabrinodis) — Tier 1 · Quantified Field Data",
      "tier": "TIER_1",
      "speciesId": "MYR-SCA",
      "content": "Species: European Moss Ant (Myrmica scabrinodis)\nTier: TIER_1 (Tier 1 — Quantified Experimental / Field Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: NW Europe (Netherlands, UK).\nTemperature: No statistically defined temperature preference found.\nHumidity: No statistically defined humidity preference found.\nRainfall Pattern: Not distinctly rain-linked in the dataset.\nWind: Same wind ceiling as co-occurring species after 20 August.\nTiming (Season / Time-of-day): Flies within the same general summer window as the other three species studied.\nNotes: Included specifically because it is a documented negative result: unlike its co-occurring relatives, triggers vary.\nSource: Boomsma & Leusink (1981) Oecologia 48:206–213.",
      "keywords": [
        "european moss ant",
        "myrmica scabrinodis",
        "tier_1",
        "warm_calm_afternoon",
        "eu",
        "species dossier"
      ],
      "source": "Boomsma & Leusink (1981) Oecologia 48:206–213."
    },
    {
      "id": "CHUNK-SP-MAN-RUB",
      "title": "Dossier: Mountain Red Ant (Manica rubida) — Tier 1 · Quantified Field Data",
      "tier": "TIER_1",
      "speciesId": "MAN-RUB",
      "content": "Species: Mountain Red Ant (Manica rubida)\nTier: TIER_1 (Tier 1 — Quantified Experimental / Field Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Southern Poland, Central European highlands.\nTemperature: Not separately quantified in source; occurs in a cooler, moister climate than Mediterranean species.\nHumidity: Not separately quantified; ambient humidity in the region is comparatively high year-round.\nRainfall Pattern: No rainfall recorded in the 24 hours preceding flights studied; rain instead followed the flight (same or next day).\nWind: Not quantified in source.\nTiming (Season / Time-of-day): Summer, exact dates not specified in the abstract-level source.\nNotes: Directly contrasts with Messor barbarus: illustrates that 'fly after rain' is a dry/seasonal-climate pattern, not a universal rule.\nSource: Depa (2006) Myrmecologische Nachrichten 9:27–32, as cited in Gómez & Abril (2012).",
      "keywords": [
        "mountain red ant",
        "manica rubida",
        "tier_1",
        "calm_mild_morning",
        "eu",
        "species dossier"
      ],
      "source": "Depa (2006) Myrmecologische Nachrichten 9:27–32, as cited in Gómez & Abril (2012)."
    },
    {
      "id": "CHUNK-SP-OEC-LON",
      "title": "Dossier: African Weaver Ant (Oecophylla longinoda) — Tier 1 · Quantified Field Data",
      "tier": "TIER_1",
      "speciesId": "OEC-LON",
      "content": "Species: African Weaver Ant (Oecophylla longinoda)\nTier: TIER_1 (Tier 1 — Quantified Experimental / Field Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Tanzania (cashew-growing regions), Sub-Saharan Africa.\nTemperature: Not numerically isolated in source; occurs during the tropical rainy season.\nHumidity: Flight days had significantly higher relative humidity than non-flight days.\nRainfall Pattern: Flights occur during the rainy season.\nWind: Not quantified.\nTiming (Season / Time-of-day): All 56 recorded flights occurred in the evening, just before sunset.\nNotes: Flight days also had significantly less sunshine than non-flight days — i.e. overcast, humid evenings are the strongest trigger.\nSource: Peng, Renneberg & Offenberg (2015) Insectes Sociaux 62:469–476.",
      "keywords": [
        "african weaver ant",
        "oecophylla longinoda",
        "tier_1",
        "monsoon_humidity",
        "africa",
        "species dossier"
      ],
      "source": "Peng, Renneberg & Offenberg (2015) Insectes Sociaux 62:469–476."
    },
    {
      "id": "CHUNK-SP-OEC-SMA",
      "title": "Dossier: Asian Weaver Ant (Oecophylla smaragdina) — Tier 2 · Documented Pattern",
      "tier": "TIER_2",
      "speciesId": "OEC-SMA",
      "content": "Species: Asian Weaver Ant (Oecophylla smaragdina)\nTier: TIER_2 (Tier 2 — Documented Qualitative Pattern (incl. Indian species))\nFound in India: Yes (Native or Established)\nRegion/Origin: India (recorded in Gujarat, Assam, Meghalaya, Tamil Nadu, Odisha), through SE Asia to northern Australia.\nTemperature: Not numerically quantified for India; Australian population studies show sexual-form production is temperature-gated.\nHumidity: Not numerically quantified; elevated during monsoon.\nRainfall Pattern: Indian field studies explicitly describe nuptial flights occurring during the monsoon season; a Laos/Australia-wide pattern.\nWind: Not quantified.\nTiming (Season / Time-of-day): Morning after sunrise through around noon; reproduction levels highest in wet season and early dry season.\nNotes: The most India-relevant weaver-ant data available; multiple Indian nesting-ecology papers explicitly flag weather links.\nSource: Multiple Indian field papers (Gujarat, Assam, Meghalaya, Tamil Nadu, Odisha); Lokkers (1990) PhD thesis, James Cook University.",
      "keywords": [
        "asian weaver ant",
        "oecophylla smaragdina",
        "tier_2",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Multiple Indian field papers (Gujarat, Assam, Meghalaya, Tamil Nadu, Odisha); Lokkers (1990) PhD thesis, James Cook University."
    },
    {
      "id": "CHUNK-SP-CAM-SER",
      "title": "Dossier: Silky Camponotus Ant (Camponotus sericeus) — Tier 2 · Documented Pattern",
      "tier": "TIER_2",
      "speciesId": "CAM-SER",
      "content": "Species: Silky Camponotus Ant (Camponotus sericeus)\nTier: TIER_2 (Tier 2 — Documented Qualitative Pattern (incl. Indian species))\nFound in India: Yes (Native or Established)\nRegion/Origin: India and broader Southeast Asian/Afrotropical ranges.\nTemperature: Not explicitly quantified for flight, though reproductive cycles are climate-adapted.\nHumidity: Not numerically quantified.\nRainfall Pattern: Flights are reported to follow the monsoon season cycle.\nWind: Not quantified.\nTiming (Season / Time-of-day): Reported to occur in September–October in India, with alates said to develop from October to July and be present year-round.\nNotes: Editor's flag: demonstrates a distinct temporal-gating claim — flights allegedly wait for seasonal cues rather than occurring as soon as reproductives mature. Treat this entry as lower confidence than other Tier 2 rows pending source verification.\nSource: Cited in submitted text as 'Kipyatkov, V.E. (2018)'; actual 2018 chapter authored by E.B. Lopatina (general Palearctic review). Treat citation with caveat.",
      "keywords": [
        "silky camponotus ant",
        "camponotus sericeus",
        "tier_2",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Cited in submitted text as 'Kipyatkov, V.E. (2018)'; actual 2018 chapter authored by E.B. Lopatina (general Palearctic review). Treat citation with caveat."
    },
    {
      "id": "CHUNK-SP-POG-RUG",
      "title": "Dossier: Desert Harvester Ant (Pogonomyrmex rugosus) — Tier 2 · Documented Pattern",
      "tier": "TIER_2",
      "speciesId": "POG-RUG",
      "content": "Species: Desert Harvester Ant (Pogonomyrmex rugosus)\nTier: TIER_2 (Tier 2 — Documented Qualitative Pattern (incl. Indian species))\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Southwestern USA deserts.\nTemperature: Not quantified in the cited comparative source.\nHumidity: Not quantified.\nRainfall Pattern: Phenology explicitly constrained by moisture availability, cited as a parallel case to Messor barbarus — flights follow rain.\nWind: Not quantified.\nTiming (Season / Time-of-day): Restricted, unpredictable windows tied to rainfall events rather than a fixed calendar month.\nNotes: Illustrative of the general desert-ant pattern: in arid systems, rainfall (not temperature or season per se) is the binding trigger.\nSource: Helms & Helms Cahan (2010), as cited in Gómez & Abril (2012).",
      "keywords": [
        "desert harvester ant",
        "pogonomyrmex rugosus",
        "tier_2",
        "monsoon_humidity",
        "na",
        "species dossier"
      ],
      "source": "Helms & Helms Cahan (2010), as cited in Gómez & Abril (2012)."
    },
    {
      "id": "CHUNK-SP-ATT-SEX",
      "title": "Dossier: Leaf-cutter Ant (Atta sexdens rubropilosa) — Tier 2 · Documented Pattern",
      "tier": "TIER_2",
      "speciesId": "ATT-SEX",
      "content": "Species: Leaf-cutter Ant (Atta sexdens rubropilosa)\nTier: TIER_2 (Tier 2 — Documented Qualitative Pattern (incl. Indian species))\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Brazil / South America (tropical).\nTemperature: Warm tropical temperatures typical of onset-of-rains period.\nHumidity: Rises sharply with monsoon/rainy-season onset.\nRainfall Pattern: Nuptial flights documented to coincide with the onset of the rainy season (October–November).\nWind: Not quantified.\nTiming (Season / Time-of-day): Tied to rainy-season onset rather than a fixed date.\nNotes: Included as the reference case for the broader 'leaf-cutter ants fly at monsoon onset' pattern often generalized.\nSource: General leaf-cutter ant nuptial-flight literature; Hölldobler & Wilson (1990).",
      "keywords": [
        "leaf-cutter ant",
        "atta sexdens rubropilosa",
        "tier_2",
        "after_rain",
        "sa_america",
        "species dossier"
      ],
      "source": "General leaf-cutter ant nuptial-flight literature; Hölldobler & Wilson (1990)."
    },
    {
      "id": "CHUNK-SP-LIN-HUM",
      "title": "Dossier: Argentine Ant (Linepithema humile) — Tier 3 · Non-Flying / Intranidal",
      "tier": "TIER_3",
      "speciesId": "LIN-HUM",
      "content": "Species: Argentine Ant (Linepithema humile) [CRITICAL EXCEPTION: This species does not fly; it mates intranidally / disperses by budding]\nTier: TIER_3 (Tier 3 — Reproductive-Strategy Exceptions (No Classic Flight))\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Native: South America. Invasive: worldwide, forms the largest known ant supercolonies.\nTemperature: N/A — Does not fly.\nHumidity: N/A\nRainfall Pattern: N/A — No weather-triggered nuptial flight.\nWind: N/A\nTiming (Season / Time-of-day): N/A (Dispersal via budding).\nNotes: Supercolonial/unicolonial species: mating is largely intranidal (occurs inside the nest), not via aerial dispersal. Do NOT force flight predictions.\nSource: Eyer, Blumenfeld & Vargo (2019) Ecology and Evolution; Cini et al. (2022) Myrmecological News 32:1–22.",
      "keywords": [
        "argentine ant",
        "linepithema humile",
        "tier_3",
        "none",
        "global",
        "species dossier",
        "non-flying",
        "tramp",
        "budding",
        "intranidal",
        "exception"
      ],
      "source": "Eyer, Blumenfeld & Vargo (2019) Ecology and Evolution; Cini et al. (2022) Myrmecological News 32:1–22."
    },
    {
      "id": "CHUNK-SP-MON-PHA",
      "title": "Dossier: Pharaoh Ant (Monomorium pharaonis) — Tier 3 · Non-Flying / Intranidal",
      "tier": "TIER_3",
      "speciesId": "MON-PHA",
      "content": "Species: Pharaoh Ant (Monomorium pharaonis) [CRITICAL EXCEPTION: This species does not fly; it mates intranidally / disperses by budding]\nTier: TIER_3 (Tier 3 — Reproductive-Strategy Exceptions (No Classic Flight))\nFound in India: Yes (Native or Established)\nRegion/Origin: Believed native to Africa/Asia; now a cosmopolitan indoor pest worldwide, including India.\nTemperature: N/A\nHumidity: N/A\nRainfall Pattern: N/A\nWind: N/A\nTiming (Season / Time-of-day): N/A\nNotes: Nuptial flights outdoors are rare to essentially absent. New queens mate within the nest; winged alates do not rely on weather triggers.\nSource: Hymenoptera reproductive-strategy literature; general pest-identification references.",
      "keywords": [
        "pharaoh ant",
        "monomorium pharaonis",
        "tier_3",
        "none",
        "global",
        "species dossier",
        "india",
        "indian species",
        "south asia",
        "non-flying",
        "tramp",
        "budding",
        "intranidal",
        "exception"
      ],
      "source": "Hymenoptera reproductive-strategy literature; general pest-identification references."
    },
    {
      "id": "CHUNK-SP-ANO-GRA",
      "title": "Dossier: Yellow Crazy Ant (Anoplolepis gracilipes) — Tier 3 · Non-Flying / Intranidal",
      "tier": "TIER_3",
      "speciesId": "ANO-GRA",
      "content": "Species: Yellow Crazy Ant (Anoplolepis gracilipes) [CRITICAL EXCEPTION: This species does not fly; it mates intranidally / disperses by budding]\nTier: TIER_3 (Tier 3 — Reproductive-Strategy Exceptions (No Classic Flight))\nFound in India: Yes (Native or Established)\nRegion/Origin: Likely native Southeast Asia; invasive across ~90% of tropical Pacific island territories, present in India.\nTemperature: Population dynamics linked to winter temperature.\nHumidity: N/A for flight specifically.\nRainfall Pattern: Monthly precipitation accumulation affects population dynamics (not a flight trigger).\nWind: N/A\nTiming (Season / Time-of-day): N/A\nNotes: Forms large supercolonies with intranidal mating; true dispersal nuptial flights are rare or absent in most populations.\nSource: Thomas, Becker, Abbott & Feldhaar (2010); Lin, Yeh, Wu & Wu (2023) Biology 12(12):1482.",
      "keywords": [
        "yellow crazy ant",
        "anoplolepis gracilipes",
        "tier_3",
        "none",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia",
        "non-flying",
        "tramp",
        "budding",
        "intranidal",
        "exception"
      ],
      "source": "Thomas, Becker, Abbott & Feldhaar (2010); Lin, Yeh, Wu & Wu (2023) Biology 12(12):1482."
    },
    {
      "id": "CHUNK-SP-WAS-AUR",
      "title": "Dossier: Little Fire Ant / Electric Ant (Wasmannia auropunctata) — Tier 3 · Non-Flying / Intranidal",
      "tier": "TIER_3",
      "speciesId": "WAS-AUR",
      "content": "Species: Little Fire Ant / Electric Ant (Wasmannia auropunctata) [CRITICAL EXCEPTION: This species does not fly; it mates intranidally / disperses by budding]\nTier: TIER_3 (Tier 3 — Reproductive-Strategy Exceptions (No Classic Flight))\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Native Central/South America; invasive worldwide in the tropics.\nTemperature: N/A\nHumidity: N/A\nRainfall Pattern: N/A\nWind: N/A\nTiming (Season / Time-of-day): N/A\nNotes: Documented alongside L. humile, M. pharaonis and A. gracilipes as sharing the tramp-ant reproductive syndrome.\nSource: Fournier et al. (2005), as reviewed in Eyer, Blumenfeld & Vargo (2019).",
      "keywords": [
        "little fire ant / electric ant",
        "wasmannia auropunctata",
        "tier_3",
        "none",
        "global",
        "species dossier",
        "non-flying",
        "tramp",
        "budding",
        "intranidal",
        "exception"
      ],
      "source": "Fournier et al. (2005), as reviewed in Eyer, Blumenfeld & Vargo (2019)."
    },
    {
      "id": "CHUNK-SP-CAR-DIV",
      "title": "Dossier: Asian Marauder Ant (Carebara diversa) — Tier 4 · Citizen Science",
      "tier": "TIER_4",
      "speciesId": "CAR-DIV",
      "content": "Species: Asian Marauder Ant (Carebara diversa)\nTier: TIER_4 (Tier 4 — Citizen-Science / Antkeeping Community Data)\nFound in India: Yes (Native or Established)\nRegion/Origin: India and broader Southeast Asia.\nTemperature: Warm days.\nHumidity: High humidity required.\nRainfall Pattern: Most frequently sighted actively flying immediately after rainfall when soil is moist.\nWind: Not quantified.\nTiming (Season / Time-of-day): Primarily monsoon season; daylight/afternoon windows commonly reported by antkeepers.\nNotes: Extremely popular in the pet trade; highly dependent on post-rain humidity for the survival of the large queens before founding.\nSource: Aggregated hobbyist care literature and regional sighting reports (e.g., BestAntsUK community data).",
      "keywords": [
        "asian marauder ant",
        "carebara diversa",
        "tier_4",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Aggregated hobbyist care literature and regional sighting reports (e.g., BestAntsUK community data)."
    },
    {
      "id": "CHUNK-SP-TET-RUF",
      "title": "Dossier: Arboreal Bicolored Ant (Tetraponera rufonigra) — Tier 4 · Citizen Science",
      "tier": "TIER_4",
      "speciesId": "TET-RUF",
      "content": "Species: Arboreal Bicolored Ant (Tetraponera rufonigra)\nTier: TIER_4 (Tier 4 — Citizen-Science / Antkeeping Community Data)\nFound in India: Yes (Native or Established)\nRegion/Origin: India, Southeast Asia (including Malaysia).\nTemperature: Warm, daytime temperatures.\nHumidity: Capable of flying outside of peak humidity/rain events.\nRainfall Pattern: Not strictly rain-dependent; uniquely reported to fly on dry days unlike many ground-nesting species.\nWind: Not quantified.\nTiming (Season / Time-of-day): Daytime flights commonly reported.\nNotes: A frequently encountered arboreal pseudomyrmecine; citizen data notes it often flies during the day without the strict rain triggers required by ground-nesting local species.\nSource: AntFlights.com registry data; regional ant-keeping community observations (e.g., AntsDIY).",
      "keywords": [
        "arboreal bicolored ant",
        "tetraponera rufonigra",
        "tier_4",
        "warm_calm_afternoon",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "AntFlights.com registry data; regional ant-keeping community observations (e.g., AntsDIY)."
    },
    {
      "id": "CHUNK-SP-CAM-LIG",
      "title": "Dossier: Giant European Carpenter Ant (Camponotus ligniperda) — Tier 4 · Citizen Science",
      "tier": "TIER_4",
      "speciesId": "CAM-LIG",
      "content": "Species: Giant European Carpenter Ant (Camponotus ligniperda)\nTier: TIER_4 (Tier 4 — Citizen-Science / Antkeeping Community Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Central / Western Europe.\nTemperature: Not quantified; earlier flights recorded following unusually warm spring.\nHumidity: Not quantified.\nRainfall Pattern: Not specifically isolated.\nWind: Not quantified.\nTiming (Season / Time-of-day): Normally late May–June; citizen data recorded flights as early as 21 May after a warm spring.\nNotes: Included to show how much year-to-year variance exists even within a documented 'normal' window.\nSource: AntonTop 2026 European Nuptial Flight Calendar.",
      "keywords": [
        "giant european carpenter ant",
        "camponotus ligniperda",
        "tier_4",
        "warm_calm_afternoon",
        "eu",
        "species dossier"
      ],
      "source": "AntonTop 2026 European Nuptial Flight Calendar."
    },
    {
      "id": "CHUNK-SP-FOR-RUF",
      "title": "Dossier: Red Wood Ant (Formica rufa) — Tier 4 · Citizen Science",
      "tier": "TIER_4",
      "speciesId": "FOR-RUF",
      "content": "Species: Red Wood Ant (Formica rufa)\nTier: TIER_4 (Tier 4 — Citizen-Science / Antkeeping Community Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Europe.\nTemperature: Not quantified.\nHumidity: Not quantified.\nRainfall Pattern: Not quantified.\nWind: Not quantified.\nTiming (Season / Time-of-day): Late May–June, overlapping with C. ligniperda.\nNotes: Multiple species frequently fly on the same evenings once regional weather triggers align, per aggregated observations.\nSource: AntonTop 2026 European Nuptial Flight Calendar.",
      "keywords": [
        "red wood ant",
        "formica rufa",
        "tier_4",
        "warm_calm_afternoon",
        "eu",
        "species dossier"
      ],
      "source": "AntonTop 2026 European Nuptial Flight Calendar."
    },
    {
      "id": "CHUNK-SP-MES-STR",
      "title": "Dossier: European Harvester Ant (Messor structor / Tetramorium spp.) — Tier 4 · Citizen Science",
      "tier": "TIER_4",
      "speciesId": "MES-STR",
      "content": "Species: European Harvester Ant (Messor structor / Tetramorium spp.)\nTier: TIER_4 (Tier 4 — Citizen-Science / Antkeeping Community Data)\nFound in India: No (Exotic / Non-Indian Range)\nRegion/Origin: Central and Eastern Europe.\nTemperature: Not quantified.\nHumidity: Not quantified.\nRainfall Pattern: Not quantified.\nWind: Not quantified.\nTiming (Season / Time-of-day): June–July (M. structor slightly later than M. barbarus further south).\nNotes: Congeneric comparison with the Tier-1 M. barbarus entry shows a clear latitudinal shift in flight timing.\nSource: AntonTop 2026 European Nuptial Flight Calendar.",
      "keywords": [
        "european harvester ant",
        "messor structor / tetramorium spp.",
        "tier_4",
        "hot_dry_afternoon",
        "eu",
        "species dossier"
      ],
      "source": "AntonTop 2026 European Nuptial Flight Calendar."
    },
    {
      "id": "CHUNK-SP-HAR-SAL",
      "title": "Dossier: Indian Jumping Ant (Jerdon's) (Harpegnathos saltator) — Tier 5 · Monsoon Biology",
      "tier": "TIER_5",
      "speciesId": "HAR-SAL",
      "content": "Species: Indian Jumping Ant (Jerdon's) (Harpegnathos saltator)\nTier: TIER_5 (Tier 5 — India-Specific Context (Monsoon Biology, Not Direct Flight-Trigger Data))\nFound in India: Yes (Native or Established)\nRegion/Origin: India (type locality) and Sri Lanka; well studied in Karnataka, Kerala, Tamil Nadu.\nTemperature: Not documented for flight specifically.\nHumidity: Not documented for flight specifically.\nRainfall Pattern: Not documented as a flight trigger. What IS documented: nest architecture to withstand monsoon rains.\nWind: Not quantified.\nTiming (Season / Time-of-day): Not documented for flight timing specifically.\nNotes: One of the most-studied Indian ant species overall, yet its nuptial flight triggers remain largely unquantified in peer-reviewed literature.\nSource: Peeters, Bourgoin & Hölldobler (1994); AntWiki.",
      "keywords": [
        "indian jumping ant (jerdon's)",
        "harpegnathos saltator",
        "tier_5",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Peeters, Bourgoin & Hölldobler (1994); AntWiki."
    },
    {
      "id": "CHUNK-SP-DIA-IND",
      "title": "Dossier: Indian Diacamma Ant (Diacamma indicum) — Tier 5 · Monsoon Biology",
      "tier": "TIER_5",
      "speciesId": "DIA-IND",
      "content": "Species: Indian Diacamma Ant (Diacamma indicum)\nTier: TIER_5 (Tier 5 — India-Specific Context (Monsoon Biology, Not Direct Flight-Trigger Data))\nFound in India: Yes (Native or Established)\nRegion/Origin: India (studied in West Bengal / Kolkata region).\nTemperature: Not documented for flight specifically.\nHumidity: Not documented for flight specifically.\nRainfall Pattern: Not documented as a flight trigger. What IS documented: a 'dual response' to monsoon nest flooding.\nWind: Not quantified.\nTiming (Season / Time-of-day): Queenless ponerine (gamergates); males fly but timing unquantified.\nNotes: Directly relevant to monsoon biology and nest-site selection in the Indian context, but the published study focuses on survival, not flight.\nSource: Kolay & Annagiri (2015) Scientific Reports 5:13716.",
      "keywords": [
        "indian diacamma ant",
        "diacamma indicum",
        "tier_5",
        "calm_mild_morning",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Kolay & Annagiri (2015) Scientific Reports 5:13716."
    },
    {
      "id": "CHUNK-SP-CAM-COM",
      "title": "Dossier: Golden-tailed Black Ant (Camponotus compressus) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "CAM-COM",
      "content": "Species: Golden-tailed Black Ant (Camponotus compressus)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Indian cities and rural habitats nationwide.\nTemperature: Predicted ~25–35°C based on urban active periods.\nHumidity: Predicted elevated post-monsoon humidity.\nRainfall Pattern: Predicted to follow monsoon rainfall pulses.\nWind: Predicted low to moderate wind.\nTiming (Season / Time-of-day): Commonly observed at dusk/evening during monsoon months (June–August).\nNotes: Faunally confirmed across India; flight timing inferred from congenerics and regional surveys. [Prediction basis: Congeneric with Camponotus ligniperda (Tier 4) | Confidence: LOW]\nSource: Faunal checklists (Bharti et al. 2016); inferred from Tier 4 C. ligniperda.",
      "keywords": [
        "golden-tailed black ant",
        "camponotus compressus",
        "tier_6",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Faunal checklists (Bharti et al. 2016); inferred from Tier 4 C. ligniperda."
    },
    {
      "id": "CHUNK-SP-SOL-GEM",
      "title": "Dossier: Tropical Fire Ant (Solenopsis geminata) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "SOL-GEM",
      "content": "Species: Tropical Fire Ant (Solenopsis geminata)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Widespread across peninsular India and urban areas.\nTemperature: Predicted 25–35°C based on S. invicta Tier 1 data.\nHumidity: Predicted 60–80% RH.\nRainfall Pattern: Predicted within 24–48 hours after rain events.\nWind: Calm, <10 km/h.\nTiming (Season / Time-of-day): Afternoon to dusk during monsoon season (May–September).\nNotes: Invasive/pantropical tramp congener of S. invicta with similar physiological thresholds. [Prediction basis: Congeneric with Solenopsis invicta (Tier 1) | Confidence: MODERATE]\nSource: Inferred from Tier 1 S. invicta data (Xu et al. 2009; LSU AgCenter).",
      "keywords": [
        "tropical fire ant",
        "solenopsis geminata",
        "tier_6",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Inferred from Tier 1 S. invicta data (Xu et al. 2009; LSU AgCenter)."
    },
    {
      "id": "CHUNK-SP-DIA-RUG",
      "title": "Dossier: Rugose Ponerine Ant (Diacamma rugosum) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "DIA-RUG",
      "content": "Species: Rugose Ponerine Ant (Diacamma rugosum)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Indian urban surveys and forest leaf litter.\nTemperature: Predicted warm monsoon temperatures.\nHumidity: High humidity.\nRainfall Pattern: Post-monsoon ground moisture.\nWind: Calm.\nTiming (Season / Time-of-day): Morning / dusk flights by males.\nNotes: Queenless ponerine reproductive biology inferred from D. indicum. [Prediction basis: Congeneric with Diacamma indicum (Tier 5) | Confidence: LOW-MODERATE]\nSource: Inferred from Diacamma indicum (Tier 5).",
      "keywords": [
        "rugose ponerine ant",
        "diacamma rugosum",
        "tier_6",
        "calm_mild_morning",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Inferred from Diacamma indicum (Tier 5)."
    },
    {
      "id": "CHUNK-SP-ODO-TRA",
      "title": "Dossier: Asian Ponerine Ant (Odontoponera transversa / Odontomachus simillimus) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "ODO-TRA",
      "content": "Species: Asian Ponerine Ant (Odontoponera transversa / Odontomachus simillimus)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: South and Southeast Asia.\nTemperature: Warm tropical.\nHumidity: Humid post-rain evenings.\nRainfall Pattern: Monsoon rainy season.\nWind: Calm.\nTiming (Season / Time-of-day): Evening / dusk.\nNotes: Subfamily Ponerinae analog; ground nest exit following monsoon showers. [Prediction basis: Subfamily analog: Harpegnathos saltator (Tier 5) | Confidence: LOW]\nSource: Faunal checklists; inferred from Tier 5 ponerine biology.",
      "keywords": [
        "asian ponerine ant",
        "odontoponera transversa / odontomachus simillimus",
        "tier_6",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Faunal checklists; inferred from Tier 5 ponerine biology."
    },
    {
      "id": "CHUNK-SP-PAR-LON",
      "title": "Dossier: Longhorn Crazy Ant (Paratrechina longicornis) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "PAR-LON",
      "content": "Species: Longhorn Crazy Ant (Paratrechina longicornis)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Cosmopolitan tramp ant in Indian cities.\nTemperature: Warm temperatures.\nHumidity: Wide tolerance.\nRainfall Pattern: Not strictly rain-bound; partial budding dispersal.\nWind: Low wind.\nTiming (Season / Time-of-day): Warm season afternoons/evenings.\nNotes: Tramp species with mixed dispersal — some male flight, queen dispersal mostly budding. [Prediction basis: Partial analog: tramp-ant syndrome (Tier 3, partial) | Confidence: LOW]\nSource: Tramp-ant reproductive syndrome literature.",
      "keywords": [
        "longhorn crazy ant",
        "paratrechina longicornis",
        "tier_6",
        "warm_calm_afternoon",
        "sa_global",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Tramp-ant reproductive syndrome literature."
    },
    {
      "id": "CHUNK-SP-TAP-MEL",
      "title": "Dossier: Ghost Ant (Tapinoma melanocephalum) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "TAP-MEL",
      "content": "Species: Ghost Ant (Tapinoma melanocephalum) [CRITICAL EXCEPTION: This species does not fly; it mates intranidally / disperses by budding]\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Ubiquitous indoor/urban tramp ant in India.\nTemperature: N/A\nHumidity: N/A\nRainfall Pattern: N/A\nWind: N/A\nTiming (Season / Time-of-day): N/A (Budding)\nNotes: Tramp species: highly polygynous supercolonies that reproduce via budding rather than aerial nuptial flights. [Prediction basis: Tramp-ant reproductive syndrome (Tier 3) | Confidence: MODERATE (Exception)]\nSource: Inferred from tramp ant syndrome (Tier 3).",
      "keywords": [
        "ghost ant",
        "tapinoma melanocephalum",
        "tier_6",
        "none",
        "sa_global",
        "species dossier",
        "india",
        "indian species",
        "south asia",
        "non-flying",
        "tramp",
        "budding",
        "intranidal",
        "exception"
      ],
      "source": "Inferred from tramp ant syndrome (Tier 3)."
    },
    {
      "id": "CHUNK-SP-CRE-SUB",
      "title": "Dossier: Indian Acrobat Ant (Crematogaster subnuda / C. ransonneti) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "CRE-SUB",
      "content": "Species: Indian Acrobat Ant (Crematogaster subnuda / C. ransonneti)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Arboreal and carton-nesting across India.\nTemperature: Warm canopy temperatures.\nHumidity: Monsoon humidity.\nRainfall Pattern: Monsoon rainy period.\nWind: Low wind.\nTiming (Season / Time-of-day): Late afternoon to dusk.\nNotes: Arboreal ecological analog of Oecophylla; flights correlate with monsoon wet spells. [Prediction basis: Ecological analog: Oecophylla smaragdina (Tier 2) | Confidence: LOW]\nSource: Inferred from Tier 2 arboreal Weaver ant pattern.",
      "keywords": [
        "indian acrobat ant",
        "crematogaster subnuda / c. ransonneti",
        "tier_6",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Inferred from Tier 2 arboreal Weaver ant pattern."
    },
    {
      "id": "CHUNK-SP-PHE-SPP",
      "title": "Dossier: Indian Big-headed Ants (Pheidole spp.) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "PHE-SPP",
      "content": "Species: Indian Big-headed Ants (Pheidole spp.)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Common soil and pavement nesting ants in India.\nTemperature: 24–33°C.\nHumidity: Elevated post-rain humidity.\nRainfall Pattern: After warm summer/monsoon rain events.\nWind: Calm.\nTiming (Season / Time-of-day): Evening / night.\nNotes: Pheidole genus is well-documented for synchronized post-rain evening nuptial flights. [Prediction basis: Genus study: Pheidole sitarches (direct genus citation) | Confidence: MODERATE (genus)]\nSource: Pheidole sitarches genus-level citations in Gómez & Abril (2012).",
      "keywords": [
        "indian big-headed ants",
        "pheidole spp.",
        "tier_6",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Pheidole sitarches genus-level citations in Gómez & Abril (2012)."
    },
    {
      "id": "CHUNK-SP-POL-LAC",
      "title": "Dossier: Spiny Ant (Polyrhachis lacteipennis and other spp.) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "POL-LAC",
      "content": "Species: Spiny Ant (Polyrhachis lacteipennis and other spp.)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Open scrub, trees and urban foliage across India.\nTemperature: Warm daytime/evening.\nHumidity: Monsoon humidity.\nRainfall Pattern: Post-monsoon showers.\nWind: Calm.\nTiming (Season / Time-of-day): Dusk / evening.\nNotes: Arboreal/epigeic spiny ants; inferred from co-occurring Camponotini relatives. [Prediction basis: Ecological analog: O. smaragdina / C. compressus | Confidence: LOW]\nSource: Urban checklists; inferred from Camponotus / Oecophylla analogs.",
      "keywords": [
        "spiny ant",
        "polyrhachis lacteipennis and other spp.",
        "tier_6",
        "after_rain",
        "sa",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Urban checklists; inferred from Camponotus / Oecophylla analogs."
    },
    {
      "id": "CHUNK-SP-TRI-DES",
      "title": "Dossier: Singapore Ant (Destructive Trailing Ant) (Trichomyrmex destructor) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "TRI-DES",
      "content": "Species: Singapore Ant (Destructive Trailing Ant) (Trichomyrmex destructor)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Invasive across India (Bangalore, Chennai, Mumbai, Delhi, urban centers).\nTemperature: 25–36°C warm evenings / nights.\nHumidity: Elevated humidity (>60% RH).\nRainfall Pattern: Pre-monsoon and monsoon humidity pulses; alates fly to outdoor and porch lights.\nWind: Calm nocturnal air, <10 km/h.\nTiming (Season / Time-of-day): May to September; nocturnal and crepuscular flights (19:00–23:00).\nNotes: Invasive urban pest in India. Unlike Pharaoh ants, T. destructor alate queens and males perform nighttime aerial flights towards artificial lights before mating. [Prediction basis: Invasive urban tramp ant with documented nocturnal swarms | Confidence: MODERATE]\nSource: Wetterer (2009) Myrmecological News 12:157–177; Indian urban pest surveys.",
      "keywords": [
        "singapore ant (destructive trailing ant)",
        "trichomyrmex destructor",
        "tier_6",
        "humid_still_evening",
        "sa_global",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Wetterer (2009) Myrmecological News 12:157–177; Indian urban pest surveys."
    },
    {
      "id": "CHUNK-SP-TET-BIC",
      "title": "Dossier: Bicolored Penny Ant (Guinea Ant) (Tetramorium bicarinatum) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "TET-BIC",
      "content": "Species: Bicolored Penny Ant (Guinea Ant) (Tetramorium bicarinatum)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Invasive pantropical tramp ant established in urban gardens, greenhouses, and coastal disturbed areas across India.\nTemperature: 24–34°C.\nHumidity: High humidity (>65% RH).\nRainfall Pattern: Flights cluster in warm periods after monsoon rains.\nWind: Low wind, <12 km/h.\nTiming (Season / Time-of-day): June to October; late afternoon to dusk windows.\nNotes: Invasive tramp ant; alate queens engage in localized dispersal flights and swarm near nest entrances under warm humid conditions. [Prediction basis: Invasive tramp ant with short dispersal flights | Confidence: MODERATE]\nSource: Wetterer (2009) Sociobiology 54:797–810; Bharti, Guénard, Bharti & Economo (2016).",
      "keywords": [
        "bicolored penny ant (guinea ant)",
        "tetramorium bicarinatum",
        "tier_6",
        "after_rain",
        "sa_global",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Wetterer (2009) Sociobiology 54:797–810; Bharti, Guénard, Bharti & Economo (2016)."
    },
    {
      "id": "CHUNK-SP-NYL-BOU",
      "title": "Dossier: Bourbon Crazy Ant (Rover Ant) (Nylanderia bourbonica) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "NYL-BOU",
      "content": "Species: Bourbon Crazy Ant (Rover Ant) (Nylanderia bourbonica)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Invasive pantropical tramp ant established in Indian urban landscapes and coastal zones.\nTemperature: 24–34°C.\nHumidity: Warm, muggy evenings.\nRainfall Pattern: Summer and monsoon post-rain periods.\nWind: Calm airflow, <12 km/h.\nTiming (Season / Time-of-day): May to September; crepuscular and evening swarms around streetlights.\nNotes: Invasive urban ant; prolific alate producer. Males and queens frequently swarm near lights on muggy evenings. [Prediction basis: Invasive tramp ant with prolific light-attracted swarms | Confidence: MODERATE]\nSource: Kallal & Lapolla (2012) Zootaxa; Bharti et al. (2016).",
      "keywords": [
        "bourbon crazy ant (rover ant)",
        "nylanderia bourbonica",
        "tier_6",
        "humid_still_evening",
        "sa_global",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Kallal & Lapolla (2012) Zootaxa; Bharti et al. (2016)."
    },
    {
      "id": "CHUNK-SP-PHE-MEG",
      "title": "Dossier: African Big-Headed Ant (Pheidole megacephala) — Tier 6 · Inferred / Predicted",
      "tier": "TIER_6",
      "speciesId": "PHE-MEG",
      "content": "Species: African Big-Headed Ant (Pheidole megacephala)\nTier: TIER_6 (Tier 6 — Additional India-Occurring Species (Predicted, by City))\nFound in India: Yes (Native or Established)\nRegion/Origin: Invasive tramp ant documented in southern and western India (e.g. Maharashtra, Karnataka).\nTemperature: 22–32°C.\nHumidity: High humidity following rain.\nRainfall Pattern: Strongly triggered 1–2 days after monsoon rain events.\nWind: Calm, <10 km/h.\nTiming (Season / Time-of-day): May to August; early mornings or dusk.\nNotes: One of the world's worst 100 invasive species. Winged alates perform localized nuptial flights when humidity is elevated after rainfall. [Prediction basis: Invasive tramp ant with post-rain flight swarms | Confidence: MODERATE]\nSource: Hoffmann (1998); Global Invasive Species Database (GISD); Bharti et al. (2016).",
      "keywords": [
        "african big-headed ant",
        "pheidole megacephala",
        "tier_6",
        "after_rain",
        "sa_global",
        "species dossier",
        "india",
        "indian species",
        "south asia"
      ],
      "source": "Hoffmann (1998); Global Invasive Species Database (GISD); Bharti et al. (2016)."
    }
  ]
};
