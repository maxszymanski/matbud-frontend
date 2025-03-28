import { create } from 'zustand'

const useAppStore = create()((set) => ({
    isNavOpen: false,
    toggleNavigation: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
    closeNavigation: () => set({ isNavOpen: false }),
}))

export default useAppStore
