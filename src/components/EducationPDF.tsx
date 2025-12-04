import { View, Text, StyleSheet } from "@react-pdf/renderer";
import type { Milestone } from "../types/Milestone.types";

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitle: {
    fontSize: 10,
  },
  dates: {
    display: "flex",
    gap: 8,
  },
  date: {
    fontSize: 10,
  }
})

interface EducationPDFProps {
  sections: Milestone[];
}

const EducationPDF: React.FC<EducationPDFProps> = ({ sections }) => {
  return (
    <>
      {sections
        .filter((section: any) => section.__typename === "ParagraphEducationSection")
        .map((section: any) => (
          <View key={section.id} style={{ marginBottom: 8 }}>
            {section.milestoneItems?.map((item :any) => (
              <View key={item.id} style={{ marginBottom: 4 }}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.details}>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                  <View>
                    <Text style={styles.date}>{item.dateFrom.time}</Text>
                    <Text style={styles.date}>{item.dateTo.time}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
    </>
  );
};

export default EducationPDF;
