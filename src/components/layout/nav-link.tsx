import { Link, type LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import type { ReactNode } from "react";
import { usePublicPath } from "@/hooks/use-public-path";

type Props = LinkProps & {
  href: string;
  children: ReactNode;
};

export function isActivePath(path: string, href: string): boolean {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function NavLink({ href, children, ...rest }: Props) {
  const active = isActivePath(usePublicPath(), href);

  return (
    <Link
      asChild
      aria-current={active ? "page" : undefined}
      data-active={active ? "" : undefined}
      _hover={{ textDecoration: "none" }}
      {...rest}
    >
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
}
