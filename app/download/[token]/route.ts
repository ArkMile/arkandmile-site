import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";

export const runtime = "nodejs"; // IMPORTANT: fs only works in Node runtime (not Edge)

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  // ✅ TODO: REAL SECURITY (do this soon)
  // - lookup token in DB
  // - ensure not expired / not used
  // - ensure it maps to a specific product/file
  if (!token || token.length < 20) {
    return NextResponse.json({ error: "Access denied" }, { status: 401 });
  }

  const filename = "installer.zip"; // change later per product
  const filePath = path.join(process.cwd(), "secure_storage", filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  // ✅ Stream (no huge memory load)
  const nodeStream = fs.createReadStream(filePath);
  const webStream = Readable.toWeb(nodeStream) as ReadableStream;

  return new NextResponse(webStream, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="Ark_Mile_Installer_v1.zip"`,
      "Cache-Control": "no-store",
    },
  });
}
