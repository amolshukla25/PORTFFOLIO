export interface StockMarketingModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  prerequisites: string[];
  lessons: {
    id: string;
    title: string;
    duration: string;
    content: string;
    codeSnippet: string;
    codeOutput: string;
    tips: string[];
    practiceExercises: {
      id: string;
      difficulty: string;
      task: string;
      hint: string;
      solution: string;
    }[];
  }[];
}
