import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import EducationPDF from "./EducationPDF";
import WorkPDF from "./WorkPDF";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  portfolioTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 8,
  },
  portfolioDescription: {
    fontSize: 12,
    marginBottom: 12,
  },
  careerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 24,
  },
  careerCol: {
    width: "100%",
  },
  careerTitle: {
    fontSize: 14,
    marginBottom: 16,
    fontWeight: 600,
  },
});

const PortfolioPDFDocument = ({ items }: any) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.portfolioTitle}>{items[0].title}</Text>
        <Text style={styles.portfolioDescription}>{items[0].description}</Text>

        <View style={styles.careerRow}>
          <View style={styles.careerCol}>
            <Text style={styles.careerTitle}>Education</Text>
            <EducationPDF sections={items[0].sections} />
          </View>

          <View style={styles.careerCol}>
            <Text style={styles.careerTitle}>Work Experience</Text>
            <WorkPDF sections={items[0].sections} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PortfolioPDFDocument;
