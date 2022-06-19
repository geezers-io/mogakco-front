import create from 'zustand';
import { Me } from 'providers/@types';
import { createTrackedSelector } from 'react-tracked';
import { persist } from 'zustand/middleware';

export interface MeState extends Partial<Me> {
  updateMe(me: Me): void;
  deleteMe(): void;
}

const initialState: Partial<Me> = {
  id: undefined,
  email: undefined,
};

export const useMe = create<MeState>()(
  persist(
    (set) => ({
      ...initialState,

      updateMe: (me: Me) => set(() => me),
      deleteMe: () => set(() => initialState),
    }),
    { name: 'me' }
  )
);

export const useTrackedMe = createTrackedSelector(useMe);
