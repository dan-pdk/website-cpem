import { useState } from "react";
import ScrollFadeIn from "./ScrollFadeIn";
import { faqItems } from "../data/faq";

function Accordeon({ items }) {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-3 mt-8">
      {items.map((item) => {
        const isOpen = activeId === item.id;

        return (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden bg-bg-200 w-full"
          >
            <AccordeonButton
              isOpen={isOpen}
              onClick={() => toggleItem(item.id)}
            >
              {item.title}
            </AccordeonButton>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className="p-5 text-font leading-relaxed border-t border-bg-100 text-base"
                  dangerouslySetInnerHTML={{ __html: item.content }} // tuff
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AccordeonButton({ children, isOpen, onClick, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex justify-between items-center p-4 md:p-5 text-left font-semibold text-base md:text-lg text-font hover:bg-bg-100 transition-colors gap-3 cursor-pointer"
      aria-expanded={isOpen}
      {...props}
    >
      <span className="flex-1 pr-2">{children}</span>

      <svg
        className={`w-5 h-5 shrink-0 text-primary transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

function FAQ() {
  return (
    <div className="w-full min-h-112 flex flex-col items-center py-12 md:py-20 font-nunito-sans gap-4 md:gap-5 px-4">
      <ScrollFadeIn>
        <h2 className="text-5xl text-primary font-bold text-center">
          Perguntas{' '}
          <span className="relative inline-block">
            <span className="relative z-10">frequentes</span>
            <span className="absolute bottom-1 left-0 right-0 h-[0.35em] bg-accent/40 rounded-sm -z-0" />
          </span>
        </h2>
      </ScrollFadeIn>
      <ScrollFadeIn delay={200}>
        <p className="text-center text-font text-base md:text-lg">
          Dúvidas comuns a respeito do que fazemos no projeto.
        </p>
      </ScrollFadeIn>

      <Accordeon items={faqItems} />
    </div>
  );
}

export default FAQ;
