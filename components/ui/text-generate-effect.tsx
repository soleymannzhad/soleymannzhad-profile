"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

export const TextGenerateEffect = ({
  words,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
  animate(
    "span",
    {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    },
    {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    }
  );
}, [animate, filter, duration, scope]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" text-gray-400  opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div>
      <div className="mt-4">
        <div className="  text-gray-400 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
