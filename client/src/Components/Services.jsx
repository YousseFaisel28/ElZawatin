import Accordion from "react-bootstrap/Accordion";

import carton from "../assets/icons/services/carton-box.svg";
import construction from "../assets/icons/services/construction-worker.svg";
import slave from "../assets/icons/services/dig-a-well.svg";
import fertilizer from "../assets/icons/services/fertilizer.svg";
import mill from "../assets/icons/services/mill.svg";
import Promotion from "../assets/icons/services/promotion.svg";
import perfume from "../assets/icons/services/perfume.svg";
import plastic from "../assets/icons/services/plastic.svg";
import wood from "../assets/icons/services/wood.svg";
import farm from "../assets/icons/services/farm.svg";
const ServiceCard = ({ bgColor, category, title, description, icon }) => (
  <div className={`w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4`}>
    <div
      className={`h-full ${bgColor === "dark" ? "bg-secondary-dark text-white" : "bg-white text-secondary-dark"} flex flex-col justify-between rounded-xl shadow`}
    >
      <div className="flex items-center justify-between p-6">
        <div className="flex w-[50px] items-center justify-center">
          <img src={icon} />
        </div>
        <div
          className={`rounded-[32px] border px-4 py-2 ${bgColor === "dark" ? "border-white" : "border-secondary-dark"}`}
        >
          <div className="text-xs">{category}</div>
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-center p-6">
        <h3 className="mb-2 text-xl font-semibold leading-relaxed sm:text-2xl">
          {title}
        </h3>
        <p
          className={`text-sm leading-tight ${bgColor === "dark" ? "text-white" : "text-secondary-dark"}`}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ServiceCardMobile = ({ bgColor, title, description, icon }) => (
  <div className={`w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4`}>
    <div
      className={`h-full ${bgColor === "dark" ? "bg-secondary-dark text-white" : "bg-white text-secondary-dark"} flex flex-col justify-between rounded-xl shadow`}
    >
      <div className="flex items-center justify-between p-6">
        <div className="flex w-[50px] items-center justify-center">
          <img src={icon} />
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-center p-6">
        <h3 className="mb-2 text-xl font-semibold leading-relaxed sm:text-2xl">
          {title}
        </h3>
        <p
          className={`text-sm leading-tight ${bgColor === "dark" ? "text-white" : "text-secondary-dark"}`}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Services = () => {
  const customItemStyle = {
    border: "none",
  };

  const noFocusStyle = {
    outline: "none",
    boxShadow: "none",
  };

  const accordionHeaderStyle = {
    ...noFocusStyle,
    "&:focus": noFocusStyle,
    "&:not(.collapsed)": noFocusStyle,
  };
  const factory = [
    {
      bgColor: "dark",
      category: "Factory",
      title: "Aromatic Oil Factory",
      description:
        "We offer access to over 2,000 Factory channels to maximize your product reach.",
      icon: perfume,
    },
    {
      bgColor: "light",
      category: "Factory",
      title: "Plastic containers Factory",
      description:
        "Access to all hyper markets, large grocery stores, retail markets, small groceries and different channels in Egypt",
      icon: plastic,
    },
    {
      bgColor: "dark",
      category: "Factory",
      title: "Carton containers factory",
      description:
        "Stay informed with detailed Factory reports and market overviews.",
      icon: carton,
    },
    {
      bgColor: "light",
      category: "Factory",
      title: "Fertilizer factory",
      description:
        "Ensure your products are widely available at competitive prices across all hypermarkets.",
      icon: fertilizer,
    },
    {
      bgColor: "dark",
      category: "Factory",
      title: "Feed Mill factory",
      description:
        "Ensure your products are widely available at competitive prices across all hypermarkets.",
      icon: mill,
    },
    {
      bgColor: "light",
      category: "Factory",
      title: "Wooden containers factory",
      description:
        "Ensure your products are widely available at competitive prices across all hypermarkets.",
      icon: wood,
    },
  ];

  const other = [
    {
      bgColor: "dark",
      category: "Sales",
      title: "Exportation contracts",
      description:
        "We handle all aspects of marketing, both digital and traditional, to boost your brand's visibility.",
      icon: Promotion,
    },

    {
      bgColor: "light",
      category: "Construction",
      title: "Construction of roads",
      description:
        "Partner with complementary products to enhance your market presence.",
      icon: construction,
    },
    {
      bgColor: "dark",
      category: "Construction",
      title: "Digging wells",
      description:
        "We work on digging wells and leveling the land",
      icon: slave,
    },
  ];

  const agriculture = [
    {
      bgColor: "light",
      category: "agriculture",
      title: "agriculture land",
      description: "we have secured a contract to manage 50,000 fidans for non-traditional agricultural products with high profit potential, primarily focusing on aromatic oil products.",
      icon: farm,
    },
  ];

  return (
    <section className="relative lg:mt-5" id="services">
      <div>
        <div className="container mx-auto px-4 py-12 md:py-24">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            Areas of Collaboration
          </h2>
          <div className="-mx-3 hidden flex-wrap sm:mt-12 sm:flex lg:mt-20">
            {factory.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
            {other.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
            {agriculture.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-8 block sm:hidden">
            <Accordion>
              <Accordion.Item eventKey="0" style={customItemStyle}>
                <Accordion.Header style={accordionHeaderStyle}>
                  Factories
                </Accordion.Header>
                <Accordion.Body>
                  {factory.map((service, index) => (
                    <ServiceCardMobile key={index} {...service} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={customItemStyle}>
                <Accordion.Header style={accordionHeaderStyle}>
                    Construction
                </Accordion.Header>
                <Accordion.Body>
                  {other.map((service, index) => (
                    <ServiceCardMobile key={index} {...service} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={customItemStyle}>
                <Accordion.Header style={accordionHeaderStyle}>
                  Agriculture
                </Accordion.Header>
                <Accordion.Body>
                  {agriculture.map((service, index) => (
                    <ServiceCardMobile key={index} {...service} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
