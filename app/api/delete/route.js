import { del } from "@vercel/blob";

export async function POST(req) {
  return new Response(
    JSON.stringify({ 
      error: "This endpoint has been disabled" 
    }),
    { 
      status: 410,
      headers: { "Content-Type": "application/json" } 
    }
  );
}
