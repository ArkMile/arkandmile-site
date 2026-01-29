import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ token: string }> }
) {
  const { token } = await context.params;

  return NextResponse.json(
    {
      ok: false,
      token,
      message:
        "Secure downloads are not enabled yet. This endpoint will validate tokens and redirect to the file host later.",
    },
    { status: 501 }
  );
}
