import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { supabaseServer } from "../lib/supabase-server";

export async function proxy(req:NextRequest) {
  const supabase = await supabaseServer();
  const { data: { session } } = await supabase.auth.getSession();

  const isProtected = req.nextUrl.pathname.startsWith("/dashboard");

  // if (isProtected && !session) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  return NextResponse.next();
}
