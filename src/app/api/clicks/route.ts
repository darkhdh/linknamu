import { getAllClicks } from "@/lib/clicks";

export const dynamic = "force-dynamic";

export async function GET() {
  const counts = await getAllClicks();
  return Response.json(counts);
}
