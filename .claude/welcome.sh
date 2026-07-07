#!/usr/bin/env bash
# Prints the scottmurphytennis usage summary at session start (SessionStart hook).
# Output is JSON with a systemMessage field, displayed to the user in the UI.

read -r -d '' MESSAGE <<'EOF'
scottmurphytennis — Eleventy static site for scottmurphytennis.net, a tennis coaching site

WHAT IT IS
The marketing site for tennis coach Scott Murphy: services, tennis tips, background, and
contact details. Originally a Jekyll site (Menca theme), converted to Eleventy (v2) with
Sass for styling. Hosted on Netlify.

WORKFLOW
1. Dev (watches Sass + Eleventy in parallel): `npm start`
2. Production build: `npm run build`  (clean output with `npm run clean`)
3. Edit content/templates, then push — Netlify builds and deploys from the repo.
EOF

jq -nc --arg m "$MESSAGE" '{systemMessage: $m}'
