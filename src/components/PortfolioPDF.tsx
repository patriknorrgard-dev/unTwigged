import { Document, Page, View, Text } from "@react-pdf/renderer";
import type { Portfolio } from "../types/Portfolio.types";

interface PortfolioPDFProps {
  items: Portfolio[];
}

const PortfolioPDF: React.FC<PortfolioPDFProps> = ({ items }) => {
  return (
    <Document>
      <Page size="A4">
        {items.map((item) => (
          <View key={item.id}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        ))}
      </Page>
    </Document>
  )
}

export default PortfolioPDF;