"use client";
import Navbar from "@/app/components/Navbar";
//import "../../globals.css";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  session: any
}
export default function RootLayout({ children, session }: IProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session= {session}>
          <div className={"  h-screen "}>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}