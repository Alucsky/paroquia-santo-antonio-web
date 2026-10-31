import { Link, type LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

type Props = LinkProps & {
  href: string;
  children: ReactNode;
};

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({ href, children, ...rest }: Props) {
  const { pathname } = useRouter();
  const active = isActivePath(pathname, href);

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
