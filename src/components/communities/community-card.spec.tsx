import { screen } from "@testing-library/react";
import { CommunityCard } from "@/components/communities/community-card";
import { renderWithProviders } from "@/test/render-with-providers";

describe("CommunityCard", () => {
  it("should be able to describe approximate and decade arrivals", () => {
    renderWithProviders(
      <>
        <CommunityCard
          community={{
            slug: "sao-bras",
            name: "São Brás",
            kind: "community",
            arrival: { year: 1949, precision: "circa" },
            families: null,
          }}
        />
        <CommunityCard
          community={{
            slug: "sao-cristovao",
            name: "São Cristóvão",
            kind: "community",
            arrival: { year: 1960, precision: "decade" },
            families: null,
          }}
        />
      </>,
    );

    const arrivals = screen.getAllByTestId("community-card-arrival");
    expect(arrivals[0]).toHaveTextContent("por volta de 1949");
    expect(arrivals[1]).toHaveTextContent("na década de 1960");
  });

  it("should not be able to show an arrival when it is unknown", () => {
    renderWithProviders(
      <CommunityCard
        community={{
          slug: "flor-da-serra",
          name: "Flor da Serra",
          kind: "community",
          arrival: null,
          families: null,
        }}
      />,
    );

    expect(
      screen.queryByTestId("community-card-arrival"),
    ).not.toBeInTheDocument();
  });
});
