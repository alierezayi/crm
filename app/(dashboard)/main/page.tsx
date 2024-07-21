import { redirect } from "next/navigation";

export default function MainPage() {
  redirect("/main/overview");

  return null;
}
