import { create } from 'zustand';

export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';
export type TypePair = 'classic' | 'editorial' | 'crafted';

export interface CartItem {
  pid: string;
  qty: number;
}

interface AppState {
  lang: Language;
  theme: Theme;
  typePair: TypePair;
  cart: CartItem[];
  favs: Set<string>;
  follows: Set<string>;

  setLang: (lang: Language) => void;
  toggleLang: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setTypePair: (pair: TypePair) => void;

  addToCart: (pid: string) => void;
  removeFromCart: (pid: string) => void;
  updateQty: (pid: string, qty: number) => void;

  toggleFav: (pid: string) => void;
  toggleFollow: (sid: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  lang: 'en',
  theme: 'light',
  typePair: 'classic',
  cart: [
    { pid: 'p1', qty: 1 },
    { pid: 'p5', qty: 1 },
  ],
  favs: new Set(['p2', 'p7']),
  follows: new Set(['s1', 's5']),

  setLang: (lang) => set({ lang }),
  toggleLang: () => set((state) => ({ lang: state.lang === 'en' ? 'ar' : 'en' })),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setTypePair: (typePair) => set({ typePair }),

  addToCart: (pid) => set((state) => {
    const existing = state.cart.find(c => c.pid === pid);
    return {
      cart: existing
        ? state.cart.map(c => (c.pid === pid ? { ...c, qty: c.qty + 1 } : c))
        : [...state.cart, { pid, qty: 1 }],
    };
  }),

  removeFromCart: (pid) => set((state) => ({
    cart: state.cart.filter(c => c.pid !== pid),
  })),

  updateQty: (pid, qty) => set((state) => ({
    cart: state.cart.map(c => (c.pid === pid ? { ...c, qty: Math.max(1, qty) } : c)),
  })),

  toggleFav: (pid) => set((state) => {
    const favs = new Set(state.favs);
    favs.has(pid) ? favs.delete(pid) : favs.add(pid);
    return { favs };
  }),

  toggleFollow: (sid) => set((state) => {
    const follows = new Set(state.follows);
    follows.has(sid) ? follows.delete(sid) : follows.add(sid);
    return { follows };
  }),
}));
