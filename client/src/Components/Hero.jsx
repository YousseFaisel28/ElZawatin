import MyNavbar from "./MyNavbar";
import { useScreenSize } from "../Hooks/useScreenSize";
import agriculture from "../assets/images/Hero/a.jpg";
import CTABtn from "./atoms/CTABtn";

import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const [scope, animate] = useAnimate();
  const fadeInDownVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    const animations = [
      ["#title", fadeInDownVariant.visible, { duration: 1, delay: 0.5 }],
      ["#channelsNum", fadeInDownVariant.visible, { duration: 1 }],
      ["#buttons", fadeInDownVariant.visible, { duration: 1 }],
    ];
    animate(animations);
  }, [animate, scope, fadeInDownVariant.visible]);

  const screenSize = useScreenSize();
  const circularText = "Invest today for a brighter tom orrow.";

  return (
    <div className="relative">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <MyNavbar />
      </header>

      <section ref={scope} className="overflow-hidden">
        <div className="flex flex-col lg:min-h-[800px] lg:flex-row lg:items-stretch">
          <div className="relative flex w-full items-center justify-center lg:order-2 lg:w-7/12">
            <div className="relative px-4 pb-16 pt-24 text-center sm:px-6 md:px-24 lg:py-24 lg:text-left 2xl:px-32">
              <motion.div
                id="title"
                variants={fadeInDownVariant}
                initial="hidden"
              >
                <h1 className="text-4xl font-bold sm:text-6xl xl:text-8xl">
                  Reviving Land,
                  <br />
                  Cultivating Futures
                </h1>
                <p className="mt-8 text-xl">
                  we transform neglected landscapes into 
                  thriving grounds of opportunity.
                </p>
              </motion.div>
              <motion.div
                id="buttons"
                variants={fadeInDownVariant}
                initial="hidden"
              >
                <div className="mx-auto mt-8 max-w-xl p-2 lg:mx-0 lg:mt-12">
                  <CTABtn />
                </div>

              </motion.div>
            </div>

            {/* <div className="absolute -bottom-16 right-0 z-10 m-0 flex h-32 w-32 items-center justify-center rounded-full p-0 md:h-40 md:w-40 lg:-left-20 lg:top-24 z-0">
              <motion.p
                className="m-0 h-full w-full select-none p-0 text-base font-semibold !text-black md:text-lg"
                whileHover={{ rotate: 360, transition: { duration: 1 } }}
              >
                {circularText.split("").map((character, index) => (
                  <span
                    key={index}
                    style={{
                      transform: `rotate(${index * (360 / circularText.length)}deg)`,
                      transformOrigin: `0px ${["xs", "sm"].includes(screenSize) ? 64 : 80}px`,
                    }}
                    className="absolute left-1/2"
                  >
                    {character}
                  </span>
                ))}
              </motion.p>
            </div> */}
          </div>

          <div className="relative h-96 w-full overflow-hidden lg:order-1 lg:h-screen lg:w-5/12 rounded" style={{ zIndex: -1 }}>
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover rounded"
                loading="lazy"
                src={agriculture}
                alt=""
              />
            </div>

            <div className="via-transparent to-transparent absolute inset-0 bg-gradient-to-t !from-black"></div>

            <motion.div
              className="absolute bottom-0 left-0"
              id="channelsNum"
              variants={fadeInDownVariant}
              initial="hidden"
            >
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center">
                  <i class="fa-solid fa-mountain-sun fa-2x" style={{ color: "#f58a42" }}></i>
                  <h2 className="ml-2.5 text-7xl font-bold !text-white">
                    50,000+
                  </h2>
                </div>
                <p className="mt-1.5 max-w-xs text-xl !text-white">
                  fidans for non-traditional agricultural products with high profit potential
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
