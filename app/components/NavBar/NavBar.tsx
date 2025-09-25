"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const NavItems = [
  {
    title: "Home",
    href: "/landing",
    items: [],
  },
  {
    title: "About Us",
    href: "/about-us",
    items: [],
  },
  {
    title: "Our Products",
    href: "/our-products",
    items: [
      {
        title: "Fabrics & Textiles",
        href: "/fabrics-textiles",
      },
      {
        title: "Leather Clothing",
        href: "/leather-clothing",
      },
      {
        title: "Women’s Outerwear",
        href: "/womens-outerwear",
      },
      {
        title: "Home Textiles",
        href: "/home-textiles",
      },
      {
        title: "Sustainable Fabrics",
        href: "/sustainable-fabrics",
      },
      {
        title: "Custom Orders",
        href: "/custom-orders",
      },
    ],
  },
  { title: "Cart", href: "/cart" },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full py-9 bg-white border-b">
      <div className="container flex h-6 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 pl-6">
          <Image
            src="/Preview.jpg"
            alt="Company Logo"
            width={150}
            height={70}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {NavItems.map((item) =>
                item.items && item.items.length > 0 ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger
                      onClick={() => router.push(item.href)}
                      className={cn(
                        "px-3 py-2 text-xl",
                        pathname === item.href
                          ? "border-black text-black font-bold"
                          : "border-transparent text-black-500 font-bold hover:text-black"
                      )}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4">
                        {item.items.map((subItem) => (
                          <ListItem
                            key={subItem.title}
                            active={pathname === subItem.href}
                            title={subItem.title}
                            href={subItem.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} passHref legacyBehavior>
                      <NavigationMenuLink
                        className={cn(
                          "border-b-2 px-3 py-2 text-xl",
                          pathname === item.href
                            ? "border-black text-black font-bold"
                            : "border-transparent text-black-500 font-bold hover:text-black"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden p-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 pt-8 pl-4">
                {NavItems.map((item) => (
                  <div key={item.title} className="py-2">
                    {item.items && item.items.length > 0 ? (
                      <div className="space-y-3">
                        <Link
                          href={item.href}
                          className={cn(
                            "font-medium text-lg",
                            pathname === item.href
                              ? "border-black text-black font-bold"
                              : "border-transparent text-black-500 font-bold hover:text-black"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                        <div className="pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={cn(
                                "block py-2 text-lg",
                                pathname === subItem.href
                                  ? "border-black text-black font-bold"
                                  : "border-transparent text-black-500 font-bold hover:text-black"
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-2 font-medium text-lg",
                          pathname === item.href
                            ? "border-black text-black font-bold"
                            : "border-transparent text-black-500 font-bold hover:text-black"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// ListItem Component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { active: boolean }
>(({ className, title, active, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
            active
              ? "border-b-2 border-black font-semibold"
              : "hover:border-b-2 hover:border-black",
            className
          )}
          {...props}
        >
          <div className="text-xl font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
