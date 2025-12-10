import { useHome } from "../../hooks/useHome";

const HeroSection = () => {
  const { data } = useHome();

  return (
    <main>
      <title>Untwigged | Portfolio platform</title>
      {data && (
        data.usercontentGraphql1.results.map((content, index) => (
          <article key={index}>

            {content.sections?.map((section) => (
              <section key={section.id} className="hero">
                <div className="hero__content">
                  <h2 className="hero__title">{section.title}</h2>
                  <p className="hero__description">{section.description}</p>
                </div>
                
                <img
                  src={section.image.mediaImage.url}
                  alt={section.title}
                  className="hero__image"
                />
              </section>
            ))}
          </article>
        ))
      )}
    </main>
  )
}

export default HeroSection;