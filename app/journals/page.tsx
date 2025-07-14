import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import JournalEntries from "@/components/JournalEntries";


export default async function ProtectedPage() {

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Info Banner */}
        <div className="w-full">
          <div className="bg-accent text-sm p-4 rounded-lg text-foreground flex gap-3 items-start">
            <InfoIcon
              size="16"
              strokeWidth={2}
              className="flex-shrink-0 mt-0.5"
            />
            <span className="text-sm leading-relaxed">
              This is a protected page that you can only see as an authenticated
              user
            </span>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold sm:text-2xl">Your user details</h2>
          <div className="w-full overflow-hidden rounded-lg border bg-muted/50">
            <pre className="text-xs font-mono p-4 overflow-auto max-h-40 sm:max-h-48 whitespace-pre-wrap break-all">
              {JSON.stringify(data.user, null, 2)}
            </pre>
          </div>
        </div>

        {/* Journal Entries */}
        <JournalEntries />
      </div>
    </div>
  );
}
