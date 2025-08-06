import logo from "./logo.webp"
import { Link } from "react-router"

interface ItemData {
  label: string
  url: string
}

const items: ItemData[] = [
  {
    label: "Substack",
    url: "https://thegridline.substack.com",
  },
  {
    label: "Linkedin newsletter",
    url: "https://www.linkedin.com/newsletters/the-gridline-7357803082438643713",
  },
]

function Item({ item }: { item: ItemData }) {
  return (
    <Link
      to={item.url}
      target="_blank"
      className="flex items-center gap-2 py-2"
    >
      <i className="fi fi-sc-bullet text-sm text-foreground/40" />
      <span>{item.label}</span>
    </Link>
  )
}

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
        Top web designer communities. Help you understand web design better and
        give you overall tips and tricks for running a web design business on
        your own.
      </p>

      <div className="flex flex-col gap-1 mt-10">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </section>
  )
}
