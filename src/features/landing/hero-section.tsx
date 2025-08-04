import { Button } from "@shared/components"
import logo from "./logo.webp"
import { Link } from "react-router"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center py-28">
      <img
        src={logo}
        height={75}
        width={75}
        className="transition-all duration-300 hover:scale-95 cursor-pointer"
      />

      <h2 className="text-4xl text-center font-semibold font-heading leading-tight mt-10 w-8/12">
        Level up your web
        <br />
        design skills
      </h2>

      <p className="leading-7 mt-8 text-center text-pretty w-8/12 text-foreground/60">
        A weekly dose of practical web design strategies. No fluff — just
        clarity, craft, and conversion.
      </p>

      <div className="flex items-center mt-10">
        <Button
          size={"lg"}
          asChild
          className="transition-all duration-300 hover:scale-95"
        >
          <Link to={"/#resources"}>Bring me in, now</Link>
        </Button>
      </div>
    </section>
  )
}
