import { HeroSection } from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title:
        "Top Web Designer Newsletter, Courses, Community & Resources | Gridline",
      description:
        "Top web designers communities to share and grow togethers. Level up your web design skills and earn more.",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}
