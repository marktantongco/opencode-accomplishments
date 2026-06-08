'use client';

import { create } from 'zustand';
import { skills, type Skill } from '@/lib/data/skills';

interface RegistryState {
  allSkills: Skill[];
  category: string | null;
  searchQuery: string;
  filteredSkills: Skill[];
  setCategory: (cat: string | null) => void;
  setSearchQuery: (query: string) => void;
  getCategories: () => string[];
}

function filterSkills(
  allSkills: Skill[],
  category: string | null,
  query: string
): Skill[] {
  let filtered = allSkills;
  if (category) {
    filtered = filtered.filter((s) => s.category === category);
  }
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  return filtered;
}

export const useRegistryStore = create<RegistryState>()((set) => ({
  allSkills: skills,
  category: null,
  searchQuery: '',
  filteredSkills: skills,

  setCategory: (cat) => {
    set((state) => ({
      category: cat,
      filteredSkills: filterSkills(state.allSkills, cat, state.searchQuery),
    }));
  },

  setSearchQuery: (query) => {
    set((state) => ({
      searchQuery: query,
      filteredSkills: filterSkills(state.allSkills, state.category, query),
    }));
  },

  getCategories: () => {
    const cats = new Set(skills.map((s) => s.category));
    return Array.from(cats);
  },
}));
