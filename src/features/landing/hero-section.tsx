import logo from "./logo.webp";

type ItemData = {
  label: string;
  url: string;
};

const items: ItemData[] = [
  {
    label: "Substack",
    url: "https://thegridline.substack.com",
  },
  {
    label: "Linkedin newsletter",
    url: "https://www.linkedin.com/newsletters/the-gridline-7357803082438643713",
  },
];

function Item({ item }: { item: ItemData }) {
  return (
    <a className="flex items-center gap-2 py-2" href={item.url} target="_blank">
      <i className="fi fi-sc-bullet text-foreground/40 text-sm" />
      <span>{item.label}</span>
    </a>
  );
}

export function HeroSection() {
  return (
    <section className="flex flex-col items-center py-28">
      <img
        alt="logo"
        className="cursor-pointer transition-all duration-300 hover:scale-95"
        height={75}
        src={logo}
        width={75}
      />

      <h2 className="mt-10 w-8/12 text-center font-heading font-semibold text-4xl leading-tight">
        Level up your web
        <br />
        design skills
      </h2>

      <p className="mt-8 w-8/12 text-pretty text-center text-foreground/60 leading-7">
        Top web designer communities. Help you understand web design better and
        give you overall tips and tricks for running a web design business on
        your own.
      </p>

      <div className="mt-10 flex flex-col gap-1">
        {items.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </div>
    </section>
  );
}
