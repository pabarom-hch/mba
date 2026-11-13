import { timingSafeEqual } from "crypto";
import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export type AgentContext = {
  supabase: ReturnType<typeof createAdminClient>;
  userId: string;
};

export function jsonError(status: number, message: string) {
  return NextResponse.json({ error: message }, { status });
}

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

/**
 * Authenticates an external agent request via `Authorization: Bearer <AGENT_API_KEY>`
 * (or `X-API-Key`). Data is always scoped to AGENT_USER_ID.
 */
function authenticate(request: NextRequest): AgentContext | NextResponse {
  const apiKey = process.env.AGENT_API_KEY;
  const userId = process.env.AGENT_USER_ID;
  if (!apiKey || !userId || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return jsonError(503, "Agent API is not configured");
  }

  const header = request.headers.get("authorization") ?? "";
  const provided = header.toLowerCase().startsWith("bearer ")
    ? header.slice(7).trim()
    : (request.headers.get("x-api-key") ?? "").trim();

  if (!provided || !safeEqual(provided, apiKey)) {
    return jsonError(401, "Invalid or missing API key");
  }

  return { supabase: createAdminClient(), userId };
}

type Handler<P> = (
  ctx: AgentContext,
  request: NextRequest,
  params: P
) => Promise<NextResponse>;

/** Wraps a route handler with API-key auth and uniform error handling. */
export function withAgentAuth<P = Record<string, never>>(handler: Handler<P>) {
  return async (request: NextRequest, context: { params: Promise<P> }) => {
    const auth = authenticate(request);
    if (auth instanceof NextResponse) return auth;
    try {
      return await handler(auth, request, await context.params);
    } catch (err) {
      console.error("Agent API error:", err);
      return jsonError(500, "Internal server error");
    }
  };
}

export function clampLimit(value: string | null, fallback = 20, max = 100) {
  const n = Number.parseInt(value ?? "", 10);
  if (Number.isNaN(n) || n < 1) return fallback;
  return Math.min(n, max);
}

export const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
