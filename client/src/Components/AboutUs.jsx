import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/nav.css";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const fadeInDownVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="bg-secondary-dark py-10 sm:py-16 lg:py-24" id="about">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white">
            Explore the common questions and answers about Zawatin
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-x-20 gap-y-16 md:mt-20 md:grid-cols-2"
        >
          <motion.div
            variants={fadeInDownVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex items-start">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary-bright">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">Who are you?</p>
                <p className="mt-4 text-base text-white">
                  We are an Egyptian joint-stock company with a net worth of 50 million EGP.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInDownVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-start">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary-bright">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  How can you help me?
                </p>
                <p className="mt-4 text-base text-white">
                  Our operations cover the complete inventory cycle, including: Aromatic oil manufacturing (crop drying), Plastic containers Factory and Supporting Industries
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInDownVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="flex items-start">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary-bright">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  What is your vision?
                </p>
                <p className="mt-4 text-base text-white">
                  We have signed a contract to own 10,000 fidans in the New Valley Governorate. Additionally, we have secured a contract to manage 50,000 fidans for non-traditional agricultural products with high profit potential, primarily focusing on aromatic oil products.

                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInDownVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="flex items-start">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary-bright">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  What should I do now?
                </p>
                <p className="mt-4 text-base text-white">
                  Just get in touch!{" "}
                  <a
                    href="#footer"
                    className="hover-link cursor-pointer text-base font-semibold text-bright-red no-underline transition-all duration-200 hover:text-bright-red"
                  >
                    Contact us
                  </a>{" "}
                  today to learn more about how Al Zawatin can help you grow.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
