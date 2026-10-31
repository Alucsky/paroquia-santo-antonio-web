import { useRouter } from "next/router";
import { toPublicPath } from "@/content/routes";

export function usePublicPath(): string {
  const { pathname } = useRouter();
  return toPublicPath(pathname);
}
