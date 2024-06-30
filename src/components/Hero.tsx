import { Button } from "@/components/ui/button"; // Make sure to import the Button component
import { buttonVariants } from "./ui/button"; // Adjust the import path as necessary
import { ContactUsIcon } from "./Icons";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
        autoPlay
        loop
        muted
        playsInline

      >
        <source src="https://videos.pexels.com/video-files/3402547/3402547-uhd_2732_1440_25fps.mp4" type="video/mp4" />
      </video>

      <div className="container relative grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 z-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                Octopus Promotion
              </span>
            </h1>{" "}
            <br />
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Staff
              </span>
            </h2>
            <br />
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Build your brand effortlessly with the elegance and precision our professional staff brings to every project.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-1/3">Get Started</Button>

            <a
              rel="noreferrer noopener"
              href="#contact" 
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: "outline",
              })}`}
            >
              Contact Us
              <ContactUsIcon />
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://img.freepik.com/premium-photo/portrait-beautiful-woman-black-dress-with-creative-makeup-fashion-style-beauty-face_151428-3512.jpg"
            alt="user avatar"
            className="w-96 h-96 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Shadow effect */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};
