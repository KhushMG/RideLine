import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import JournalEntryCard from "@/components/JournalEntryCard";
import { Button } from "@/components/ui/button";

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
        <div className="space-y-6">
          <h2 className="text-xl font-bold sm:text-2xl flex justify-between">
            <div className="flex justify-start w-1/2"> Your Journal Entries </div>
            <div className="flex justify-end w-1/2">
              <Button
                variant="outline"
                className="hover:bg-green-700 hover:text-white transition-colors duration-200"
              >
                Create a new entry
              </Button>
            </div>
          </h2>
          <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-3 xl:grid-cols-2">
            <JournalEntryCard
              title="Journal Entry 1"
              content="This is a journal entry about my day. It was quite eventful and I learned a lot of new things."
              createdAt="June 1st, 2025"
            />
            <JournalEntryCard
              title="Weekend Reflections"
              content="Spent the weekend hiking and reflecting on life goals. The mountains were beautiful and the weather was perfect."
              createdAt="June 2nd, 2025"
            />
            <JournalEntryCard
              title="Work Thoughts"
              content="Had an interesting meeting today about the new project direction."
              createdAt="June 3rd, 2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
