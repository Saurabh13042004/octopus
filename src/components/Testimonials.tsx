import { Avatar } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamMemberProps {
  title: string;
  description: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    title: "Brand Ambassadors",
    description: "Engaging the public to boost awareness.",
  },
  {
    title: "Hospitality Experts",
    description: "Providing exceptional guest services.",
  },
  {
    title: "Product Demonstrators",
    description: "Driving sales through impactful presentations.",
  },
  {
    title: "Events Specialists",
    description: "Delivering unique experiences at trade and entertainment shows.",
  },
];

export const Teams = () => {
  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        A Versatile Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map(({ title, description }: TeamMemberProps, index) => (
          <Card 
            key={index} 
            className=" text-white rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-primary"
          >
            <CardHeader className="flex flex-col items-center justify-center border-b border-gray-700 py-5">
              <Avatar className="mb-4">
                <img src="https://static.vecteezy.com/system/resources/previews/000/649/142/non_2x/team-icon-symbol-sign-vector.jpg"/>
              </Avatar>
              <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-base text-gray-300 px-6 py-4 text-center">
                {description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
