# Agent API

A small REST API that lets an external AI agent (for example Meta's agent) read and
update your data on this platform. It lives under `/api/agent/*`. Requests authenticate
with an API key, not a login session, and all data is scoped to one user.

## Setup

Add these environment variables wherever the app is hosted (e.g. Vercel → Settings →
Environment Variables), then redeploy:

| Variable | Value |
|----------|-------|
| `AGENT_API_KEY` | A long random secret, e.g. output of `openssl rand -hex 32` |
| `AGENT_USER_ID` | Your user id: Supabase → Authentication → Users → your row → UID |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API → `service_role` key |
| `AGENT_API_BASE_URL` | *(optional)* Public URL of the app, e.g. `https://mba.example.com`, used in the OpenAPI spec |

The service role key bypasses Row Level Security. It is only used on the server, and every
agent route filters by `AGENT_USER_ID`. Never give it to the agent itself. The agent gets
only `AGENT_API_KEY`.

If any of the three required variables is missing, every agent route returns `503`.

## Connecting the agent

1. In the agent's settings, add a custom tool / action from an OpenAPI spec and point it at
   `https://<your-app>/api/agent/openapi.json` (public, contains no user data).
2. Set authentication to **Bearer token** (API key) with the value of `AGENT_API_KEY`.
   `X-API-Key: <key>` is also accepted.

To revoke access, change or remove `AGENT_API_KEY` and redeploy.

## Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/agent/progress` | Completion per curriculum and recent lesson activity |
| GET | `/api/agent/today` | Today's CEO Mentor lesson |
| GET | `/api/agent/lessons?q=&curriculum=&limit=` | Search lessons by title / curriculum slug |
| GET | `/api/agent/lessons/{idOrSlug}` | Full lesson content plus your progress |
| PATCH | `/api/agent/lessons/{id}` | Update progress: `{"status":"completed","rating":5}` |
| GET | `/api/agent/notes?lesson_id=&limit=` | Recent notes |
| POST | `/api/agent/notes` | Create a note: `{"content":"...","title":"...","lesson_id":"..."}` |
| GET | `/api/agent/funds` | Your funds |
| GET | `/api/agent/funds/{fundId}/opportunities?status=active\|all` | LP pipeline with org, contact, stage |

## Quick test

```bash
curl -H "Authorization: Bearer $AGENT_API_KEY" https://<your-app>/api/agent/today
```
