import { create } from 'zustand';
import { persistance } from 'zustand/middleware';

export const useStore = create(persistance((set) => (
{theme: 'light',toggleTheme: () => set((state) => 
    ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
})));