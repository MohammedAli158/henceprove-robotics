import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../../lib/supabase-server";
type LoginBody = {
  email: string;
  password: string;
};


export async function POST(req: Request) {
    console.log("req came");
    
 const { email, password } = (await req.json()) as LoginBody;

  const supabase = await supabaseServer();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    console.log("this is error",error,"this is data",data);
    
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ user: data.user });
}
