"use client";

import React from "react";
import { quotes } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Quotes = () => {
  return (
    <section id="quotes" className="py-20">
      <h1 className="heading">
        <span className="text-purple">Insiparational Quotes</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // responsive design
          className="h-[40vh] md:h-[25rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={quotes}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Quotes;
