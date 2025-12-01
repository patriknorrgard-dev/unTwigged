import { useParams } from "@tanstack/react-router";
import { usePortfolio } from "../../hooks/usePortfolio";
import ProjectList from "../lists/ProjectList";

const ProjectSection = () => {
  const { username } = useParams({ from: "/projects/$username" });
  const { data } = usePortfolio(username);

  return (
    <>
      {data && (
        data.usercontentbyidGraphql1.results.map((project: any) => (
          <div key={project.id}>

            {project.sections?.map((section: any) => (
              <div key={section.id}>
                <h3>{section.sectionTitle}</h3>
                <p>{section.sectionDescription}</p>

                <ProjectList items={section.projectItems || []} />
              </div>
            ))}
          </div>
        ))
      )}
    </>
  )
}

export default ProjectSection;