export const runtime = "nodejs";


import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../../lib/supabase-server";

type LoginBody = {
  email: string;
  password: string;
};

export async function POST(req: Request) {
  try {
    const { email, password } = (await req.json()) as LoginBody;
    const supabase = await supabaseServer();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
        console.log(error)
      return NextResponse.json({ error: error }, { status: 400 });
    }

    return NextResponse.json({ user: data });

  } catch (err) {
    console.error("Signup failed:", err);
    return NextResponse.json(
      { error: "Server error during signup" },
      { status: 500 }
    );
  }
}