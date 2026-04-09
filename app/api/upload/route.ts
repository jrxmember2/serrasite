import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: false, message: "Upload será implementado na próxima etapa." }, { status: 501 });
}
