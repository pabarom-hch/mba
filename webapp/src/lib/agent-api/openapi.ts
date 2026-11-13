/** OpenAPI 3.1 description of the Agent API, for importing as tools into external agents. */
export function buildOpenApiSpec(serverUrl: string) {
  const err = { $ref: "#/components/responses/Error" };
  const ok = (description: string) => ({
    description,
    content: { "application/json": { schema: { type: "object" } } },
  });
  const uuidParam = (name: string, description: string) => ({
    name,
    in: "path",
    required: true,
    description,
    schema: { type: "string" },
  });

  return {
    openapi: "3.1.0",
    info: {
      title: "Executive MBA Platform — Agent API",
      version: "1.0.0",
      description:
        "Read curriculum content and learning progress, write notes, update lesson progress, and read the LP fundraising pipeline. All data is scoped to the platform owner.",
    },
    servers: [{ url: `${serverUrl}/api/agent` }],
    security: [{ bearerAuth: [] }],
    components: {
      securitySchemes: { bearerAuth: { type: "http", scheme: "bearer" } },
      responses: {
        Error: {
          description: "Error",
          content: {
            "application/json": {
              schema: { type: "object", properties: { error: { type: "string" } } },
            },
          },
        },
      },
    },
    paths: {
      "/progress": {
        get: {
          operationId: "getProgress",
          summary: "Completion percentage per curriculum and the 10 most recent lesson activities",
          responses: { "200": ok("Progress summary"), "401": err },
        },
      },
      "/today": {
        get: {
          operationId: "getTodayLesson",
          summary: "Today's CEO Mentor lesson, based on the current week and day of week",
          responses: { "200": ok("Today's lesson (may be null)"), "401": err },
        },
      },
      "/lessons": {
        get: {
          operationId: "searchLessons",
          summary: "Search lessons by title and/or curriculum",
          parameters: [
            { name: "q", in: "query", description: "Text to match in the lesson title", schema: { type: "string" } },
            { name: "curriculum", in: "query", description: "Curriculum slug, e.g. 'mentor'", schema: { type: "string" } },
            { name: "limit", in: "query", schema: { type: "integer", minimum: 1, maximum: 100, default: 20 } },
          ],
          responses: { "200": ok("Matching lessons (without full content)"), "401": err, "404": err },
        },
      },
      "/lessons/{lesson}": {
        get: {
          operationId: "getLesson",
          summary: "Full lesson content and the user's progress on it",
          parameters: [uuidParam("lesson", "Lesson id (UUID) or slug")],
          responses: { "200": ok("Lesson"), "401": err, "404": err, "409": err },
        },
        patch: {
          operationId: "updateLessonProgress",
          summary: "Mark a lesson not started, in progress, or completed, and optionally rate it",
          parameters: [uuidParam("lesson", "Lesson id (UUID)")],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["status"],
                  properties: {
                    status: { type: "string", enum: ["not_started", "in_progress", "completed"] },
                    rating: { type: "integer", minimum: 1, maximum: 5 },
                  },
                },
              },
            },
          },
          responses: { "200": ok("Updated progress"), "400": err, "401": err, "404": err },
        },
      },
      "/notes": {
        get: {
          operationId: "listNotes",
          summary: "The user's most recent notes, optionally for one lesson",
          parameters: [
            { name: "lesson_id", in: "query", schema: { type: "string", format: "uuid" } },
            { name: "limit", in: "query", schema: { type: "integer", minimum: 1, maximum: 100, default: 20 } },
          ],
          responses: { "200": ok("Notes"), "400": err, "401": err },
        },
        post: {
          operationId: "createNote",
          summary: "Create a note, optionally attached to a lesson",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["content"],
                  properties: {
                    content: { type: "string", maxLength: 20000 },
                    title: { type: "string", maxLength: 300 },
                    lesson_id: { type: "string", format: "uuid" },
                  },
                },
              },
            },
          },
          responses: { "201": ok("Created note"), "400": err, "401": err },
        },
      },
      "/funds": {
        get: {
          operationId: "listFunds",
          summary: "The user's funds",
          responses: { "200": ok("Funds"), "401": err },
        },
      },
      "/funds/{fundId}/opportunities": {
        get: {
          operationId: "listFundOpportunities",
          summary: "LP pipeline opportunities for a fund, with organization, contact and stage",
          parameters: [
            uuidParam("fundId", "Fund id (UUID)"),
            {
              name: "status",
              in: "query",
              description: "Opportunity status filter, or 'all'",
              schema: { type: "string", default: "active" },
            },
          ],
          responses: { "200": ok("Opportunities"), "400": err, "401": err, "404": err },
        },
      },
    },
  };
}
