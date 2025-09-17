"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  const hiddenRoutes = ["/"];
  const shouldHideNavbar = hiddenRoutes.includes(pathname);

  if (shouldHideNavbar) return null;

  return <Header />;
}
