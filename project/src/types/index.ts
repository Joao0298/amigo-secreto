export interface Participant {
  id: string;
  name: string;
}

export interface DrawResult {
  giver: string;
  receiver: string;
}

export interface DrawState {
  participants: Participant[];
  results: DrawResult[];
  isDrawn: boolean;
  isDrawing: boolean;
}