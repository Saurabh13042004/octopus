import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea"; // Assuming you have a Textarea component

export const ContactUs = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Contact form submitted!");
  };

  return (
    <section id="contact" className="bg-muted/50 py-24 sm:py-32">
      <div className="container">
        <h3 className="text-center text-4xl md:text-5xl font-bold text-white">
          Get in{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Touch
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          We are here to help you elevate your brand. Contact us for a
          consultation.
        </p>

        <form
          className="flex flex-col w-full md:w-8/12 lg:w-6/12 mx-auto gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Your Name"
            className="bg-muted/80"
            aria-label="name"
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-muted/80"
            aria-label="email"
            required
          />
          <Textarea
            placeholder="Your Message"
            className="bg-muted/80"
            aria-label="message"
            rows={4}
            required
          />
          <Button type="submit">Send Message</Button>
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="flex flex-col items-center text-center">
            <span className="bg-primary text-white rounded-full flex items-center justify-center w-10 h-10 mb-4">
              1
            </span>
            <h4 className="text-lg font-bold">Reach Out</h4>
            <p className="text-sm mt-2">
              Schedule a consultation to discuss your needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="bg-primary text-white rounded-full flex items-center justify-center w-10 h-10 mb-4">
              2
            </span>
            <h4 className="text-lg font-bold">Customized Solutions</h4>
            <p className="text-sm mt-2">
              We'll create a tailored plan to elevate your brand.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="bg-primary text-white rounded-full flex items-center justify-center w-10 h-10 mb-4">
              3
            </span>
            <h4 className="text-lg font-bold">Exceptional Results</h4>
            <p className="text-sm mt-2">
              Experience the power of Octopus Staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
