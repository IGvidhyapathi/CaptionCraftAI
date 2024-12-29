"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full p-4 rounded-lg">
      <div className="calendly-widget-container overflow-hidden">
        <InlineWidget
          url="https://calendly.com/c-vidhyapathi1555/talk-to-sales"
          styles={{ height: "80vh", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Calendly;
