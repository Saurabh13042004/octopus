import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#mission",
    label: "Mission",
  },
  {
    href: "#about",
    label: "About Us",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-background shadow-md">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-15 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex items-center">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex items-center"
            >
                  <img src="./src/assets/logo-header.png" alt="logo" className="w-24 p-2 h-20" />

             
            </a>
          </NavigationMenuItem>

          {/* Mobile */}
          <div className="flex md:hidden items-center">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="h-5 w-5"
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Octopus Promotions
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-4 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-lg font-medium ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
