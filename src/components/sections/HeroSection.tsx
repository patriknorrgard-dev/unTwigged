import { useHome } from "../../hooks/useHome";

const HeroSection = () => {
  const { data } = useHome();

  return (
    <>
      {data && (
        data.usercontentGraphql1.results.map((content: any) => (
          <div key={content.id}>

            {content.sections?.map((section: any) => (
              <div key={section.id}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <img
                  src={section.image.mediaImage.url}
                  alt={section.title}
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