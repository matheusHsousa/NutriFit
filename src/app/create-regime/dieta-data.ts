export interface DietaData {
    id(arg0: string, id: any): unknown;
    objetivos: {
      objetivo: string;
      id: string;
      refeicoes?: {
        cafe_da_manha?: string;
        almoco?: string;
        jantar?: string;
        sugestao?: string;
      };
    }[];
  }
  