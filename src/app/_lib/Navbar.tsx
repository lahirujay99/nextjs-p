"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Counter",
    href: "/counter",
  },
  {
    name: "Product",
    href: "/product",
  },
  {
    name: "Product-Orders",
    href: "/order-product",
  },
  {
    name: "Upload-Files",
    href: "/upload",
  },
  {
    name: "Login",
    href: "/login",
  },
];
const NavlinksAuth = [
  {
    name: "Homepage",
    href: "/",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isAuth = ["/login", "/register", "/forgot-password"].includes(pathname);
  const linksToDisplay = isAuth ? NavlinksAuth : Navlinks;
  return (
    <div className="flex flex-col md:flex-row sticky top-0 left-0 space-x-5 bg-sky-950 justify-center mb-10 py-5">
      {linksToDisplay.map((navlink) => {
        const isActive =
          pathname === navlink.href ||
          (pathname.startsWith(navlink.href) && navlink.href !== "/");
        return (
          <p
            className={
              isActive
                ? "bg-black/40 text-white font-bold py-1 px-2 rounded"
                : "text-lg text-white"
            }
            key={navlink.href}
          >
            <Link href={navlink.href}>{navlink.name}</Link>
          </p>
        );
      })}
    </div>
  );
}
