import { useProjects } from "../../hooks/useProjects";

const ProjectSection = () => {
  const { data } = useProjects();

  return (
    <>
      {data && (
        data.usercontentGraphql1.results.map((project: any) => (
          <div key={project.id}>
            <h2>{project.title}</h2>

            {project.sections?.map((section: any) => (
              <div key={section.id}>
                <h3>{section.sectionTitle}</h3>
                <p>{section.sectionDescription}</p>

                {section.projectItems.map((item: any) => (
                  <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.preamble}</p>
                    <img
                      src={item.image.mediaImage.url}
                      alt={item.title}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))
      )}
    </>
  )
}

export default ProjectSection;