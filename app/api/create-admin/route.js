export async function POST(req) {
  try {
    const { email, password, name } = await req.json();

    // Admin system is disabled
    return new Response(
      JSON.stringify({ 
        message: "Admin creation is currently disabled",
        error: "Admin system is not available"
      }),
      { 
        status: 503, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}