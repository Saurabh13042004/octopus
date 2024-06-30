
export const Expertise = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container grid place-items-center">
        <div className="lg:col-start-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Expertise{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              In Industry
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row text-center sm:text-left lg:text-center xl:text-left">
              <span className="bg-primary text-white rounded-full flex items-center justify-center w-12 h-12 text-lg font-semibold">
                1
              </span>
              <p className="ml-0 sm:ml-4 lg:ml-0 xl:ml-4 mt-4 sm:mt-0 lg:mt-4 xl:mt-0">
                Entertainment
                <br />
                Extensive experience in high-end venues.
              </p>
            </div>
            <div className="flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row text-center sm:text-left lg:text-center xl:text-left">
              <span className="bg-primary text-white rounded-full flex items-center justify-center w-12 h-12 text-lg font-semibold">
                2
              </span>
              <p className="ml-0 sm:ml-4 lg:ml-0 xl:ml-4 mt-4 sm:mt-0 lg:mt-4 xl:mt-0">
                Hospitality
                <br />
                Delivering exceptional guest experiences.
              </p>
            </div>
            <div className="flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row text-center sm:text-left lg:text-center xl:text-left">
              <span className="bg-primary text-white rounded-full flex items-center justify-center w-12 h-12 text-lg font-semibold">
                3
              </span>
              <p className="ml-0 sm:ml-4 lg:ml-0 xl:ml-4 mt-4 sm:mt-0 lg:mt-4 xl:mt-0">
                Promotions
                <br />
                Driving brand awareness and engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Uncomment this section to include buttons */}
        {/* <div className="mt-12 lg:mt-0 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button variant="outline" className="w-full md:w-auto mt-4 md:mt-0">
            View all features
          </Button>
        </div> */}
      </div>
    </section>
  );
};
