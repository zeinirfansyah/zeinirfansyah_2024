import {create} from 'zustand';

const initialState = {
  posts: [],
  featuredMedia: [],
  isLoading: false,
  error: null,
};

export const useBlogState = create((set) => ({
  ...initialState,
  setPosts: (posts) => set({ posts }),
  setFeaturedMedia: (featuredMedia) => set({ featuredMedia }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
