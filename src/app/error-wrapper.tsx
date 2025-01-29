"use client";
import "./globals.css";

import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm hover:bg-red-900 transition"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg mt-8  p-4 border border-gray-300">
      <div className="bg-slate-900 p-4 rounded text-white">
        <p>global error ekak awoth fix karanne kohomada?😲</p>
        <p>e wadeta thama api global-error file eka use karanne😉</p>
        <p>
          👇 me button eka obanna ethakota error ekak occur wenaw😏 ethakota
          refresh button eka obanna hariyanawa
        </p>
      </div>
      <div className=" left-4 ">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};

//me file eken thama error eka simulate karanne
//ethakota meken layout eka wrap karala error eka simulate karama
//error eka execute wenawa ethakota global-error.tsx file eke thiyena function logic eken
//error eka fix karanwa, e hati wadak newe.
// wade wenne window eka reload wenawa ethakota state change weddi error state eka false wenwaw
//ethakota nikamma error eka fix wenawa 😉
