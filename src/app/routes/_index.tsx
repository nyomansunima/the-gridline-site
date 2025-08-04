import {
  AboutSection,
  CTASection,
  HeroSection,
  ResourceSection,
  TopicSection,
} from "@features/landing"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Grow Your Web Design Skills | The Gridline",
    description:
      "Top web designers communities to share and grow togethers. Level up your web design skills and earn more.",
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <TopicSection />
      <ResourceSection />
      <CTASection />
    </main>
  )
}
