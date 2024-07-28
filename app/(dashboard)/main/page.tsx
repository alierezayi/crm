import { redirect } from "next/navigation";

export default function MainPage() {
  redirect("/analyze");

  return <div></div>;
}
