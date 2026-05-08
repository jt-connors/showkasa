# Showkasa Context

Durable project context for the Showkasa website build.

## Project Goal
- Build a premium startup website for Showkasa
- The site should feel modern, cinematic, polished, and expensive without becoming busy or gimmicky
- Refinement matters more than adding more sections, effects, or decorative UI

## Core Design Direction
- Premium, dark, cinematic, modern, minimal
- Avoid generic template energy
- Avoid clutter
- Prefer restraint, spacing, typography, and image quality over flashy effects

## Locked Creative Decisions
### Hero direction
- Keep the clean hero structure with a single strong main image on the right
- Let the image carry the premium feel rather than stacking extra cards, boxes, or UI ornaments on top of it
- Preserve a clear, high-end first impression over complexity

### Motion direction
- Use subtle scroll-tied parallax on the hero image only
- Motion should be slow, smooth, understated, and stable
- Across the site, favor subtle translate-plus-fade reveals and refined micro-interactions
- Motion should feel cinematic, not flashy

### Rejected directions
- No right-edge scroll indicators
- No ambient side effects or decorative motion clutter
- No overbuilt hero overlays that dilute the premium look
- No experimental visuals that make the brand feel less luxurious

## Product / Site Structure
- React + Tailwind multi-page structure is the chosen build direction
- Current pages include:
  - Home
  - About
  - Services
  - Pricing
  - FAQ
  - Contact
- Sticky navigation is part of the accepted structure

## Versioning and Compare Workflow
- Backup snapshot: `showkasa-v1`
- Main refined version: `showkasa`
- Compare script: `run-showkasa-compare.sh`
- Compare ports:
  - `5173` -> `showkasa-v1`
  - `5174` -> `showkasa`

## Runtime / Persistence Notes
- Compare servers were made reboot-persistent
- Launchd agents:
  - `ai.dexter.showkasa-v1`
  - `ai.dexter.showkasa-v2`
- Expected result: both compare versions should come back after reboot/login

## Repo / Delivery Notes
- The refined `showkasa` version was initialized as its own git repo and pushed to GitHub successfully
- Important follow-up: local git remote / branch tracking should be sanitized if a credentialed URL was used during push, and any exposed PAT should be treated as revocation-worthy

## Quality Bar
- Strong typography and spacing matter more than novelty
- One strong image is better than several weaker visual ideas competing at once
- CTA emphasis is good when restrained and premium
- The site should feel polished enough to show without apologizing for it

## What Belongs Here
Keep this file focused on durable Showkasa truths:
- design direction
- accepted and rejected visual decisions
- structural choices
- compare workflow and persistent run notes

Do not use this as a running changelog. Put iteration-by-iteration notes elsewhere.
