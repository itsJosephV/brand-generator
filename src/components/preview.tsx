import { IntroductionCard } from './IntroductionCard'
const optionCards = [
  {
    img: '/imgs/Card-Palette.png',
    alt: 'Card Palette Decoration',
    title: 'Create Palette',
    description: 'Describe your brand and get the perfect colors for it',
  },
  {
    img: '/imgs/Card-Typography.png',
    alt: 'Card Typography Decoration',
    title: 'Choose Typography',
    description: 'Get the best typography for your branding',
  },
  {
    img: '/imgs/Card-Copy.png',
    alt: 'Card Typography Decoration',
    title: 'Adapt Copy-writting',
    description: 'Find your voice, and adapt the message for your brand',
  },
]

export const Preview = () => {
  return (
    <section className="grid min-h-screen w-full grid-rows-[auto_1fr]">
      <header className="flex w-full items-center justify-center p-5">
        <div className="h-[50px] w-full rounded-md bg-white px-[10px] py-[5px] shadow-sm">
          <img src="/imgs/Avatar.png" alt="User Avatar" width={36} height={36} />
        </div>
      </header>
      <article className="flex w-full flex-col items-center justify-center">
        <img src="/imgs/Hambot.webp" alt="Hambot Logo" width={120} />
        <h2 className="text-cs-black text-center text-4xl leading-11 font-bold">
          Welcome to <span className="text-primary">Hambot</span>
          , your
          <br /> AI-powered helper
        </h2>
        <p className="text-description">From prompt to complete corporate branding</p>
        <div className="mt-8 grid grid-cols-3 gap-9">
          {optionCards.map((card) => (
            <IntroductionCard key={card.title} {...card} />
          ))}
        </div>
      </article>
    </section>
  )
}
