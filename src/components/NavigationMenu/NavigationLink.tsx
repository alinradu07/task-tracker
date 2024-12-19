"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavigationLink.module.css";
type MenuProps = {
  href: string;
  children: string;
};
export default function NavigationLink({ href, children }: MenuProps) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path === href ? `${classes.link} ${classes.active}` : classes.link
      }
    >
      {children}
    </Link>
  );
}
