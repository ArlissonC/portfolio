import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";

interface AccordionProps {
  children: React.ReactNode;
  label: string;
  period: string;
  current: boolean;
}

const Accordion = ({ children, label, period, current }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (current) setOpen(true);
  }, [current]);

  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-brand-dark font-semibold bg-brand py-4 px-5 rounded-lg">
        <button
          className="flex items-center justify-between font-bold w-full"
          onClick={() => setOpen(!open)}
        >
          <p className="text-sm md:text-base">{label}</p>
          <div className="flex items-center gap-11">
            <span className="hidden md:block">{period}</span>
            <span className="text-lg">{open ? "―" : <BiPlus />}</span>
          </div>
        </button>
      </div>
      <div
        ref={contentRef}
        className="content-parent my-2 w-full bg-brand-light rounded-lg"
        style={
          open
            ? {
                height: contentRef.current?.scrollHeight + "px",
                marginTop: "8px",
                marginBottom: "15px",
              }
            : { height: "0px" }
        }
      >
        <div className="py-5 px-8">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
