import { links } from "@/data/profile";
import { recordClick } from "@/lib/clicks";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  // 등록된 링크만 집계한다
  if (!links.some((link) => link.id === id)) {
    return Response.json({ error: "Unknown link" }, { status: 404 });
  }

  const count = await recordClick(id);
  return Response.json({ id, count });
}
