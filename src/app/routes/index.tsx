import { HeroSection } from "@features/landing";
import { generatedMetadata } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Grow Your Web Design Skills | The Gridline",
      description:
        "Top web designers communities to share and grow togethers. Level up your web design skills and earn more.",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}
