import models from "../assets/indian-models.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="relative border rounded-lg py-12 px-6 sm:px-12 lg:px-24 overflow-hidden" 
        style={{ backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: `url(${models})`, opacity: 0.3 }}
        ></div>
        <div className="absolute inset-0 bg-muted/50"></div>
        <div className="relative flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About Us
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Our team of professionals has extensive experience managing renowned entertainment and hospitality venues across Europe and globally.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
