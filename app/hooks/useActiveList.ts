import {create} from 'zustand'

interface ActiveListStore {
    members: string[];
    add: (id: string) => void;
    remove: (id: string) => void;
    set: (id: string[]) => void;
}

const useActiveList = create<ActiveListStore>((set) => ({
    members: [],
    add: (id) => set((state) => ({members: [...state.members, id]})),
    remove: (id) => set((state) => ({members: state.members.filter((member) => member !== id)})),
    set: (id) => set(({members: id}))
}))

export default useActiveList;