import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-amber-800 text-9xl">Lamiya</h1>
      <Button variant={"ghost"} className="text-5xl bg-amber-700 py-6 px-12" >Click Me</Button>
    </div>
  );
}
