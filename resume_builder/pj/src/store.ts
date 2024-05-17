import { create } from "zustand";
import { immer } from 'zustand/middleware/immer';
import { CVStore, getNewCV } from "./model/cv";

type CVActions = {
    addInstance: <T extends keyof CVStore>(field: T, value: CVStore[T] extends Array<infer U> ? U : never) => void;
    removeInstance: (field: keyof CVStore, index: number) => void;
    updateField: <T extends keyof CVStore>(field: T, value: CVStore[T]) => void;
}

const cv = getNewCV();

export const useCVStore = create<CVStore & CVActions>()(
    immer((set) => ({
        ...cv,
        addInstance: (field, value) => {
            set((state) => {
                const target = state[field];
                if (Array.isArray(target)) {
                    target.push(value);
                } else {
                    console.error(`Field ${field} is not an array.`);
                }
            });
        },
        removeInstance: (field, index) => {
            set((state) => {
                const target = state[field];
                if (Array.isArray(target)) {
                    target.splice(index, 1);
                } else {
                    console.error(`Field ${field} is not an array.`);
                }
            });
        },
        updateField: (field, value) => {
            set((state) => {
                state[field] = value;
            });
        }
    }))
);
