const items: string[] = [
  "Tips & tricks for better design",
  "Strategies to grow",
  "Hackings to get your first client",
  "Tips videos",
  "Blueprints to start your own ",
  "Sales tips to close deals",
  "Scalings your current skills",
]

function Item({ item }: { item: string }) {
  return (
    <li className="flex items-center gap-2 py-2">
      <i className="fi fi-sc-check-circle text-sm text-foreground/40" />
      <span>{item}</span>
    </li>
  )
}

export function TopicSection() {
  return (
    <section className="flex flex-col items-center py-28">
      <span className="text-sm text-foreground/40 font-medium font-heading leading-tight">
        Topics
      </span>

      <h2 className="text-4xl text-center font-semibold font-heading leading-tight mt-10 w-8/12">
        Full access to
        <br />
        the libraries
      </h2>

      <p className="leading-7 mt-8 text-center text-pretty w-8/12 text-foreground/60">
        Packed interesting topics, hours of contents that worth thousand dollars
        at your fingertips.
      </p>

      <ul className="flex flex-col gap-1 mt-10">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </ul>
    </section>
  )
}
