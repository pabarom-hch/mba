import { NextResponse, type NextRequest } from "next/server";
import { buildOpenApiSpec } from "@/lib/agent-api/openapi";

/** GET /api/agent/openapi.json — public, contains no user data. */
export function GET(request: NextRequest) {
  const origin = process.env.AGENT_API_BASE_URL || request.nextUrl.origin;
  return NextResponse.json(buildOpenApiSpec(origin));
}
