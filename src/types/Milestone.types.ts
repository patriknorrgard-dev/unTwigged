export interface Milestone {
  id: number;
  title: string;
  subtitle: string;
  dataFrom: {
    time: string;
  }
  dateTo: {
    time: string;
  }
}