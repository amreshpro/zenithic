"use client";
import { Button } from "@/components/atom/button";

export default function Home() {
  return (
    <div>
      <h1>Zenithic Component</h1>
      <Button
        variant="ghost"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Pro Button
      </Button>
    </div>
  );
}
