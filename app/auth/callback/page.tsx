"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    // This will exchange the OAuth code for a session and set the cookie
    supabase.auth.getSession().then(() => {
      // Redirect to your protected page or home
      router.replace("/protected");
    });
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Signing you in...</p>
    </div>
  );
}
