import { create } from "zustand";
import { immer } from 'zustand/middleware/immer';
import { CVStore, getNewCV } from "./model/cv";
import { Draft } from "immer";

type CVActions = {
    addInstance: <T extends keyof CVStore>(field: T, value: CVStore[T] extends Array<infer U> ? U : never) => void;
    removeInstance: <T extends keyof CVStore>(field: T, index: number) => void;
    updateField: <T extends keyof CVStore>(field: T, value: CVStore[T] , index: number) => void; // Updated this line to remove conditional type
    countPercent: ()=>number;
};

type CVStoreWithActions = CVStore & CVActions;

const cv = getNewCV();

export const useCVStore = create<CVStoreWithActions>()(
    immer((set) => ({
        ...cv,
        addInstance: (field, value) => {
            set((state) => {
                const target = state[field];
                if (Array.isArray(target)) {
                    (target as Array<unknown>).push(value);
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
        updateField: (field, value, index) => {
            set((state: Draft<CVStore>) => { // Added Draft type annotation
                if(index>0){
                    (state[field] as Array<unknown>)[index] = value;
                }
                state[field] = value;
            });
        },
        countPercent: ()=>{
            let count = 0;
            set((state: Draft<CVStore>)=>{
                let t: keyof CVStore;
                for(t in  state){
                    if(state[t] !== '' && typeof state[t] === 'string'){
                        count+=5
                    }
                    if(Array.isArray(state[t]) && state[t].length > 1){
                        count+=10
                    }
                }
            })
            return count
        },
    }))
);
