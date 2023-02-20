import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";

interface AccordionProps {
  children: React.ReactNode;
  label: string;
  period: string;
}

const Accordion = ({ children, label, period }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-brand-dark font-semibold bg-brand py-4 px-5 rounded-lg">
        <button
          className="flex justify-between font-bold w-full"
          onClick={() => setOpen(!open)}
        >
          <p>{label}</p>
          <div className="flex items-center gap-11">
            <span>{period}</span>
            <span>{open ? "―" : <BiPlus />}</span>
          </div>
        </button>
      </div>
      <div
        ref={contentRef}
        className="content-parent my-4 w-full bg-brand-light rounded-lg"
        style={
          open
            ? { height: contentRef.current?.scrollHeight + "px" }
            : { height: "0px", margin: "5px" }
        }
      >
        <div className="py-5 px-8">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
