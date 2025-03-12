import "../styles/challenges.css";

function Challenges() {
  const challenges = [
    {
      name: "Reliable Water Access",
      description:
        "Deep wells (600-1000 meters) provide consistent and dependable water resources for the project.",
    },
    {
      name: "Superior Soil Quality",
      description:
        "Virgin soil surpasses Delta soil in quality, representing untapped agricultural potential.",
    },
    {
      name: "Favorable Climate & Stability",
      description:
        "The region's climate enhances crop growth while supporting sustainable, long-term agricultural operations.",
    },
    {
      name: "Optimal Soil Salinity",
      description:
        "Salinity levels ranging between 600-800 P.P.M create ideal conditions for cultivation.",
    },
    {
      name: "Enhanced Transportation Infrastructure",
      description:
        "The development of new infrastructure mitigates transportation challenges and supports project connectivity.",
    },
    {
      name: "Strategic Geographical Positioning",
      description:
        "Positioned 600 km from Alexandria Harbor and 400 km from Safaga Harbor, the site offers access to both European and Asian markets.",
    },
  ];

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="border-l-4 border-bright-red pl-3.5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Why New Valley Governorate?
              </h2>
              <p>Key factors we chose upon.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-20">
          <div className="row">
            {challenges.map((challenge, index) => (
              <div className="col-sm-6 col-lg-4" key={index}>
                <div className="feature-box-1">
                  <div className="icon">
                    <i class="fa-solid fa-mountain-sun" style={{ color: "#63E6BE" }}></i>
                  </div>
                  <div className="feature-content">
                    <h5>{challenge.name}</h5>
                    <p>{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Challenges;





