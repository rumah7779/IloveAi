
export interface AIModel {
  id: string;
  name: string;
  type: string;
}

export interface Persona {
  id: string;
  name: string;
  thumbnail: string;
  status: 'ready' | 'training';
}
