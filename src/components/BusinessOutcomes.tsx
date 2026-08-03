"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const outcomes = [
  { id: 1, num: "01", title: "Increase Operational Efficiency", description: "Streamline your core processes and remove friction from daily operations.", icon: "⚡" },
  { id: 2, num: "02", title: "Reduce Manual Work", description: "Automate repetitive tasks so your team can focus on high-value strategy.", icon: "🤖" },
  { id: 3, num: "03", title: "Generate More Qualified Leads", description: "Turn your digital presence into a high-converting acquisition engine.", icon: "🎯" },
  { id: 4, num: "04", title: "Rank Better in AI & Google", description: "Ensure your brand is cited correctly by ChatGPT and search algorithms.", icon: "📈" },
  { id: 5, num: "05", title: "Scale Without Rebuilding", description: "Future-proof architectures that grow infinitely without crashing.", icon: "🏗️" },
  { id: 6, num: "06", title: "Faster Time to Market", description: "Deploy new features and products at lightning speed to outpace competitors.", icon: "🚀" },
];

export function BusinessOutcomes() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const lineScaleY = useTransform(spring, [0, 1], [0, 1]);

  return (
    <section
      id="outcomes"
      ref={sectionRef}
      className="relative z-10 bg-cf-bg text-cf-text py-28 border-t border-cf-border"
    >
      <div className="container-main">
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">
            Your Returns
          </span>
          <h2 className="font-syncopate font-bold text-4xl md:text-5xl tracking-tight mb-6">
            Business Outcomes, Not Just Code
          </h2>
          <p className="text-cf-text-secondary text-xl max-w-2xl mx-auto leading-relaxed">
            Every line of code is tied to a measurable business result.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-cf-border" />

          {/* scaleY is GPU-composited — no paint, no layout */}
          <motion.div
            className="absolute left-1/2 -translate-x-px top-0 w-[2px] bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 origin-top"
            style={{ scaleY: lineScaleY, height: "100%", willChange: "transform" }}
          />

          <div className="relative z-10">
            {outcomes.map((item, index) => (
              <OutcomeCard
                key={item.id}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeCard({
  item, index, isLeft,
}: {
  item: (typeof outcomes)[number];
  index: number;
  isLeft: boolean;
}) {
  return (
    <motion.div
      className={`relative flex items-center py-8 gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <article
        className={`
          flex-1 bg-cf-card border border-cf-border clip-corner p-6
          hover:border-blue-400 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
          transition-colors duration-200 group cursor-pointer
          ${isLeft ? "text-right" : "text-left"}
        `}
      >
        <div className={`text-3xl mb-4 ${isLeft ? "text-right" : "text-left"}`}>{item.icon}</div>
        <h3 className="font-syncopate font-bold text-base tracking-tight mb-2 group-hover:text-blue-500 transition-colors duration-200 leading-snug">
          {item.title}
        </h3>
        <p className="text-cf-text-secondary text-sm leading-relaxed">{item.description}</p>
      </article>

      <div className="relative z-10 shrink-0 w-10 h-10 bg-cf-bg border-2 border-blue-500 flex items-center justify-center font-syncopate font-bold text-xs text-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.4)]">
        {item.num}
      </div>

      <div className="flex-1" />
    </motion.div>
  );
}
