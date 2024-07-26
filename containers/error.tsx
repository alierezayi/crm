import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Error({ message }: { message: string }) {
  return (
      <Alert variant="destructive" className="w-full sm:max-w-md mt-5">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
  );
}
