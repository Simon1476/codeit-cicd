"use client";

import { LoremIpsum } from "@/components/LoremIpsum";

import { useScroll, animated } from "@react-spring/web";

export default function MyComponent() {
  const { scrollYProgress } = useScroll({
    config: { duration: 20, easing: (num) => num },
  });

  return (
    <>
      <animated.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />

      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
    </>
  );
}

// export default function Spring() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <>
//       <animated.div
//         className="progress-bar"
//         style={{ scaleX: scrollYProgress }}
//       />
//       <h1>
//         <code>useScroll</code> demo
//       </h1>
//       <LoremIpsum />
//     </>
//   );
// }
