export async function POST(req) {
  return new Response(
    JSON.stringify({
      error: "Admin removal endpoint is disabled",
    }),
    {
      status: 410,
      headers: { "Content-Type": "application/json" },
    }
  );
}
