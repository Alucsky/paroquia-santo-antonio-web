import routeMap from "@/content/routes.json";

export type RouteKey = keyof typeof routeMap;

export const routes = Object.fromEntries(
  Object.entries(routeMap).map(([key, route]) => [key, route.path]),
) as Record<RouteKey, string>;

export const sacramentAnchors = {
  baptism: "batismo",
  marriage: "matrimonio",
  others: "outros",
} as const;

export const sacramentLink = (anchor: keyof typeof sacramentAnchors) =>
  `${routes.sacraments}#${sacramentAnchors[anchor]}`;

const publicPathByPage: Record<string, string> = Object.fromEntries(
  Object.values(routeMap).map(({ page, path }) => [page, path]),
);

export const toPublicPath = (pathname: string) =>
  publicPathByPage[pathname] ?? pathname;
