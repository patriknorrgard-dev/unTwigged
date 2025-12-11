import { View, Text, StyleSheet } from "@react-pdf/renderer";
import type { Milestone } from "../../types/Milestone.types";
import { dateFormater } from "../../utils/dateFormater";

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitle: {
    fontSize: 9,
  },
  dates: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  date: {
    fontSize: 8,
  }
})

interface WorkPDFProps {
  sections: Milestone[];
}

const WorkPDF: React.FC<WorkPDFProps> = ({ sections }) => {
  return (
    <>
      {sections
        .filter((section: any) => section.__typename === "ParagraphWorkSection")
        .map((section: any) => (
          <View key={section.id}>
            {section.milestoneItems?.map((item :any) => (
              <View key={item.id}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.details}>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                  <View style={styles.dates}>
                    <Text style={styles.date}>{dateFormater(item.dateFrom.time)}</Text>
                    <Text>-</Text>
                    <Text style={styles.date}>{dateFormater(item.dateTo.time)}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
    </>
  );
};

export default WorkPDF;
