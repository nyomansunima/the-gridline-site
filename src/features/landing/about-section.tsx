const items: string[] = [
  "Top articles",
  "Sharing podcasts",
  "Tips videos",
  "Weekly newsletter",
  "Training courses",
  "Online communities",
]

function Item({ item }: { item: string }) {
  return (
    <li className="flex items-center gap-2 py-2">
      <i className="fi fi-sc-bullet text-sm text-foreground/40" />
      <span>{item}</span>
    </li>
  )
}

export function AboutSection() {
  return (
    <section className="flex flex-col items-center py-28">
      <span className="text-sm text-foreground/40 font-medium font-heading leading-tight">
        Who we are?
      </span>

      <h2 className="text-4xl text-center font-semibold font-heading leading-tight mt-10 w-8/12">
        One sources for
        <br />
        web designers
      </h2>

      <p className="leading-7 mt-8 text-center text-pretty w-8/12 text-foreground/60">
        Creating space for web designers to grow together, help them to level up
        the skills & grow business.
      </p>

      <ul className="flex flex-col gap-1 mt-10">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </ul>
    </section>
  )
}
