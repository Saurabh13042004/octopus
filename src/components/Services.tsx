import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { UserIcon, HeartIcon, GiftIcon, PlaneIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Brand Ambassadors",
    description: "Boost brand awareness and engagement.",
    icon: <UserIcon />,
  },
  {
    title: "Hospitality Staff & Performers",
    description: "Provide exceptional guest experience and events.",
    icon: <HeartIcon />,
  },
  {
    title: "Product Demonstrations",
    description: "Encourage sales through impactful presentations.",
    icon: <GiftIcon />,
  },
  {
    title: "Lead Generation",
    description: "Gather valuable leads, especially at exhibitions.",
    icon: <PlaneIcon />,
  },
];
export const Services = () => {
  return (
    <section className="container py-24 sm:py-32" id="services">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          {/* <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p> */}

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src="https://cdn.gamma.app/ilf4pixn9jct0ek/generated-images/S5j478g6m_o0qzZT.jpg"
          className="w-[300px] md:w-[500px] lg:w-[400px] object-contain rounded-2xl"
          alt="About services"
        />
      </div>
    </section>
  );
};
