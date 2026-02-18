
import { type AIModel, type Persona } from './types';

export const MOCK_PERSONAS: Persona[] = [
  { id: '1', name: 'Aria (Fashion)', thumbnail: 'https://images.unsplash.com/photo-1611558709796-9341f032f425?q=80&w=200&auto=format&fit=crop', status: 'ready' },
  { id: '2', name: 'Liam (Fitness)', thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop', status: 'ready' },
  { id: '3', name: 'Project: Nova', thumbnail: '', status: 'training' },
];

export const VIDEO_MODELS: AIModel[] = [
  { id: 'kling-2.5', name: 'Kling 2.5 Turbo', type: 'kling' },
  { id: 'kling-2.1', name: 'Kling 2.1', type: 'kling' },
  { id: 'kling-2.1-m', name: 'Kling 2.1 Master', type: 'kling' },
  { id: 'veo-3.1', name: 'Veo 3.1', type: 'veo' },
  { id: 'wan-2.1', name: 'Wan 2.1', type: 'wan' },
  { id: 'wan-2.2', name: 'Wan 2.2', type: 'wan' },
  { id: 'wan-2.5', name: 'Wan 2.5', type: 'wan' },
];

export const IMAGE_MODELS: AIModel[] = [
  { id: 'nanu-banana', name: 'Nanu Banana', type: 'nanu' },
  { id: 'nanu-banana-pro', name: 'Nanu Banana Pro', type: 'nanu' },
  { id: 'she-dream-4', name: 'She Dream 4', type: 'dream' },
  { id: 'flux-1.1-pro', name: 'Flux 1.1 Pro', type: 'flux' },
  { id: 'flux-1-dev', name: 'Flux 1 Dev', type: 'flux' },
];
