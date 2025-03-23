import { create } from 'zustand'

const useAppStore = create()((set) => ({
    isNavOpen: false,
    openModal: null,
    toggleNavigation: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
    closeNavigation: () => set({ isNavOpen: false }),
    setOpenModal: (modalType) => set({ openModal: modalType }),
}))

export default useAppStore
