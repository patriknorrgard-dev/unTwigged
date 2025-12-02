import { useHome } from "../../hooks/useHome";

const HeroSection = () => {
  const { data } = useHome();

  return (
    <>
      {data && (
        data.usercontentGraphql1.results.map((content: any) => (
          <div key={content.id}>

            {content.sections?.map((section: any) => (
              <div key={section.id} className="hero">
                <div className="hero__content">
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </div>
                
                <img
                  src={section.image.mediaImage.url}
                  alt={section.title}
                  className="hero__image"
                />
              </div>
            ))}
          </div>
        ))
      )}
    </>
  )
}

export default HeroSection;