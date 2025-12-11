import { useParams } from "@tanstack/react-router";
import ProjectSection from "../components/sections/ProjectSection";
import { usePortfolio } from "../hooks/usePortfolio";

const ProjectPage = () => {
  const { username } = useParams({ from: "/projects/$username" });
  const { data } = usePortfolio(username);

  return (
    <>
      {data && (
        data.usercontentbyidGraphql1.results.map((content) => (
          <ProjectSection 
            content={content}
            preview={false}
            username={username}
          />
        ))
      )}
    </>
  )
}

export default ProjectPage;