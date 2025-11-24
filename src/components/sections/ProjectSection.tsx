import { useProjects } from "../../hooks/useProjects";
import ProjectList from "../lists/ProjectList";

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

                <ProjectList items={section.projectItems} />
              </div>
            ))}
          </div>
        ))
      )}
    </>
  )
}

export default ProjectSection;