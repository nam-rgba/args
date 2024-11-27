import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware";
import { BaseInforU } from './interface/User';



interface UserStore {
    user: BaseInforU | null;
    access_token: string | null;
    setAuth: (user: BaseInforU, access_token: string) => void;
    clearAuth: () => void;
}

const useUserStore = create<UserStore>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                access_token: null,
                setAuth: (user: BaseInforU, access_token: string) => set({ user, access_token }),
                clearAuth: () => { set({ user: null, access_token: null }) }
            }),
            { name: "user-store" }
        )
    )
);

export default useUserStore;