import { PDFViewer } from "@react-pdf/renderer";
import { useParams } from "@tanstack/react-router";
import { usePortfolio } from "../hooks/usePortfolio";
import PortfolioPDFDocument from "../components/PortfolioPDFDocument";

const PortfolioPDFViewer = () => {
  const { username } = useParams({ from: "/portfolio/$username" });
    const { data } = usePortfolio(username);

  return (
    <div style={{ height: "100vh" }}>
      {data && (
        <PDFViewer width="100%" height="100%">
          <PortfolioPDFDocument items={data.usercontentbyidGraphql1.results} />
        </PDFViewer>
      )}
    </div>
  )
}

export default PortfolioPDFViewer;