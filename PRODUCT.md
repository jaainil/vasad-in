# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (existing scaffold, static output). No UI framework installed; plain Astro components with scoped styles / vanilla JS. User-managed dev server via `astro dev --background`.

## Users

Two audiences of equal weight:

1. **Tourists & explorers** — people discovering Vasad (near Anand, Gujarat): the Mahi river riverside, Art of Living ashram, Krishna Riverside Resort, SVIT campus, the toor-dal heartland. Their job: decide to visit, and find what to see/do/stay.
2. **Village community & diaspora** — residents, NRIs, and former residents of Vasad. Their job: connect with home, see the town represented with pride, and use the site as the town's authoritative reference (facts, institutions, connectivity).

## Product Purpose

The official town website for Vasad (Vasudhanagari), Anand district, Gujarat — a gateway town to the Charotar region on the northern bank of the Mahi River. It showcases the town (geography, people, economy, transport, education, landmarks) to attract visitors while serving as a reference point for the community. Success: a visitor books/decides to visit or a Vasadkar feels genuine pride sending the link to someone.

## Positioning

The only comprehensive digital home for Vasad itself. Not a resort site, not a college site, not a district-tourism boilerplate — it is the town's own voice: the Mahi-river gateway to Charotar, home of 45+ toor-dal mills, SVIT, and a documented 80%+ literacy rate. A neighboring product (district tourism, a resort, SVIT) could not truthfully claim to be Vasad.

## Operating Context

- Facts sourced from the town's Wikipedia record (2011 Census data, unless newer given): population 14,384; literacy 80.12%; elevation ~19 m; PIN 388306; STD code 02692; coordinates 22.45°N 73.0667°E.
- Key named entities: Mahi River; National Highway 48; Vasad Junction railway station (Western Railway); SVIT (est. 1997, affiliated to GTU); Soil Conservation and Water Research Institute; Art of Living Vasad Ashram; Krishna Riverside Resort; Gram panchayat; Sarpanch Dharmistha Alpeshbhai Patel (Delawala).
- Distances: ~15 km south of Anand; between Ahmedabad and Vadodara on NH48.

## Capabilities and Constraints

- Static Astro site; multi-page: Home + dedicated pages (About, Tourism, Education, Economy/Directory, Contact).
- Town directory (user-confirmed): listings for local shops, toor dal mills, and PG/rental accommodations; presented as trustworthy civic records (verified feel, no fake reviews or ratings).
- Language: English copy with Gujarati accents (Gujarati headings/labels alongside English for local authenticity). Not fully bilingual — no i18n routes.
- No backend, CMS, or forms-with-server assumed; contact page can use mailto/phone links and static info unless the user later provides endpoints.
- Factual content must not be fabricated: no invented testimonials, statistics, or attractions beyond the provided record. Undecided: whether to add photo galleries (no licensed photography assets currently on hand).

## Brand Commitments

- Name: Vasad (Gujarati: વાસદ), historically Vasudhanagari.
- Voice: proud, warm, grounded — civic dignity, not corporate; Gujarati warmth in the copy accents.

## Evidence on Hand

- Wikipedia town record (provided in session brief) — demographics, economy, transport, education, landmarks, references. No photography, logo, or official assets yet; do not fabricate images of real people or claim official government status.
- User-supplied full content record (the operator's existing vasad.in portal, provided in session) — the authoritative content source for this build: Laxmi Toor Dal and the mill registry (estd years, MT/day capacities); the Vasad processing method; ICAR–IISWC soil & water research station and ravine (kotar) reclamation; SVIT's three colleges, intakes and campus stats; the 200-year banyan and six-mandir circuit; Art of Living ashram; Krishna Riverside Resort; Vasad Jn (code VDA); day-trip distances (Vadodara 20, Dakor 35, Champaner-Pavagadh 65, Statue of Unity 105 km); census detail (3,047 households, sex ratio 910); panchayat council (Sarpanch Poonambhai D. Parmar, Deputy Deepbhai P. Patel), service schedules and emergency phone lines; twelve directory listings (dal retail, boys/girls PGs, mess/tiffin).
- Site status: independent, unofficial community portal under active development — not the municipal government website. Developer credit: Jainil Prajapati (jaainil.com); repo github.com/jaainil/vasad.in; feedback jainilprajapati9@gmail.com.

## Product Principles

1. **The town leads** — Vasad's real facts, names, and places before generic filler.
2. **Two doors, one home** — a tourist planning a visit and a Vasadkar showing pride must both feel served from the first viewport.
3. **Evidence over invention** — every claim traces to the provided record; mark placeholders as placeholders.
4. **River-and-soil rooted** — the Mahi River and Charotar farmland are the town's identity anchors, not decoration.

## Accessibility & Inclusion

Standard web accessibility (semantic HTML, keyboard navigable, readable contrast). Gujarati text must render correctly (proper Unicode + font support).
