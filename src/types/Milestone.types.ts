export interface Milestone {
  id: number;
  title: string;
  subtitle: string;
  dateFrom: {
    time: string;
  }
  dateTo: {
    time: string;
  }
}