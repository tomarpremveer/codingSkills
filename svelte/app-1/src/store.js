import { writable } from "svelte/store";


function createStore(intialValue = 0) {
    const { subscribe, set, update } = writable(intialValue);
    
    return {
        subscribe,
        increase: () => update(n => n + 1),
        decrease: () => update(n => n - 1),
        reset: () => set(0)
    }
}

export const count = createStore();