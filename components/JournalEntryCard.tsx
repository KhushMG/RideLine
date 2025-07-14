import type React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

interface JournalEntryCardProps {
  title: string;
  content: string;
  createdAt: string;
}

const JournalEntryCard: React.FC<JournalEntryCardProps> = ({
  title,
  content,
  createdAt,
}) => {
  return (
    <Card className="w-full flex flex-col h-full min-h-[200px] hover:shadow-lg transition-all duration-200 border-border/50">
      <CardHeader className="pb-3 space-y-2">
        <CardTitle className="text-base font-semibold leading-tight line-clamp-2 sm:text-lg">
          {title}
        </CardTitle>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Created: {createdAt}
        </p>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <CardDescription className="text-sm leading-relaxed line-clamp-4 text-muted-foreground text-ellipsis">
          {content}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-5 border-t border-border/50">
        <Button
          size="sm"
          className="w-full flex items-center justify-center gap-2 text-sm sm:w-auto sm:ml-auto"
        >
          <Pencil className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>Edit</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JournalEntryCard;
