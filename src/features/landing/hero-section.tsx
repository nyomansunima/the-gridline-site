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
    label: "Linkedin",
    url: "https://www.linkedin.com/newsletters/the-gridline-7357803082438643713",
  },
];

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 py-28 lg:px-0">
      <img alt="Gridline Logo" height={75} src={logo} width={75} />

      <h2 className="mt-10 text-center font-medium text-5xl tracking-tighter">
        Gridline.
      </h2>

      <p className="mt-6 text-center leading-relaxed lg:w-4/12">
        Top web designer communities. Help you understand web design better and
        give you overall tips and tricks for running a web design business on
        your own.
      </p>

      <div className="mt-10 flex flex-col gap-1">
        {items.map((item, i) => (
          <a className="flex items-center gap-2 py-2" href={item.url} key={i}>
            <svg
              className="fill-foreground/40"
              height="10"
              viewBox="0 0 24 24"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
            </svg>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
