import { redirect } from "next/navigation";

export default function MainPage() {
  redirect("/analyze/overview");

  return <div></div>;
}
