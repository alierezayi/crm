import { redirect } from "next/navigation";

export default function AnalyzePage() {
  redirect("/analyze/overview");

  return null;
}
