import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from"@/components/ui/text-reveal-card"

export function TextRevealCardHD() {
  return (
    <div className="flex items-center justify-center  h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Want to know a secret"
        revealText="Software development"
      >
        <TextRevealCardTitle>
          Some things are essential for buisness.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Here is a secret
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
