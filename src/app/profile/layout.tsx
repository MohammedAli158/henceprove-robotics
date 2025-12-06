"use client"
import { useState } from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import VerticalNav from "../components/VerticalNav";

export default function Layout({ children }: { children: React.ReactNode }) {
     const [line,setLine] = useState("About")
  return (
    <div >
      <ProfileNavbar line={line} setLine={setLine} />
      {children}
    </div>
  );
}
