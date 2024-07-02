import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Industry Experience",
    description:
      "Decades in high-end hospitality and entertainment give us firsthand knowledge of your needs.",
  },
  {
    title: "Exceptional Quality",
    description: "Glamorous promoters and skilled performers.",
  },
  {
    title: "Customer-first Philosophy",
    description: "Elevating your brand and driving sales.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Why{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Choose{" "}
        </span>
        Octopus?{" "}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-[rgba(47,22,22,0.3)] backdrop-blur-md bg-opacity-30 shadow-xl rounded-lg border border-[rgba(255,255,255,0.18)] transition-transform transform hover:scale-105 hover:border-primary py-4"
          >
            <CardHeader className="flex flex-col items-center text-center p-4">
              <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
            </CardHeader>

            <CardContent className="px-4 py-2 text-center text-white">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
