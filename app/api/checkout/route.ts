import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message:
        "Checkout is not enabled yet. Stripe will be wired after domain + donate links are live.",
    },
    { status: 501 }
  );
}
