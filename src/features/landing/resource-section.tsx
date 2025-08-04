import { Link } from "react-router"

interface ItemData {
  label: string
  url: string
}

const items: ItemData[] = [
  {
    label: "Watch on youtube",
    url: "",
  },
  {
    label: "Read on substack",
    url: "https://thegridline.substack.com",
  },
  {
    label: "Newsletter on linkedin",
    url: "https://www.linkedin.com/newsletters/the-gridline-7357803082438643713/",
  },
  {
    label: "Follow us on twitter",
    url: "",
  },
  {
    label: "See us on instagram",
    url: "",
  },
  {
    label: "Join our communities",
    url: "",
  },
  {
    label: "Watch premium courses",
    url: "",
  },
  {
    label: "Listen to the podcasts",
    url: "",
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

export function ResourceSection() {
  return (
    <section className="flex flex-col items-center py-28" id="resources">
      <span className="text-sm text-foreground/40 font-medium font-heading leading-tight">
        Resources
      </span>

      <h2 className="text-4xl text-center font-semibold font-heading leading-tight mt-10 w-8/12">
        Complete resources
        <br />
        kits for starter
      </h2>

      <p className="leading-7 mt-8 text-center text-pretty w-8/12 text-foreground/60">
        You can find ours on any platforms you like. Watch our video, read
        articles or see tips on social media.
      </p>

      <div className="flex flex-col gap-1 mt-10">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </section>
  )
}
