import { redirect } from "next/navigation";

export default function Home() {
  redirect("/links");
  return <div></div>;
}
