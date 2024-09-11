
import { create } from "zustand";
import {persist} from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage";

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1})),
    decrement: () => set((state) => ({ count: state.count - 1})),
    setZero: () => set({ count: 0 })
}))

const usePersistedCounterStore = create(
    persist(
        (set) => ({
            persistedCount: 0,
            persistedIncrement: () => set((state) => ({ persistedCount: state.persistedCount + 1 })),
            persistedDecrement: () => set((state) => ({ persistedCount: state.persistedCount - 1 })),
            persistedSetZero: () => set({ persistedCount: 0 })
        }),
        {
            name:"counter-store",
            getStorage: () => AsyncStorage
        }
    )
)

export {useCounterStore, usePersistedCounterStore}







/**'
 REFERENCE
    const useCounterStore = create((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        setZero: () => set({count: 0})
    }));
    only use the state parameter when it's being dynamically Changed
USE:
    const { count, increment, decrement } = useCounterStore();
    useListStore((state) => state.list)

ASYNC:
    const usePersistedStore = create(
    persist(
        (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        reset: () => set({ count: 0 }),
        }),
        {
        name: 'counter-storage', // unique name in AsyncStorage
        getStorage: () => AsyncStorage,
        }
    )
    );
 */