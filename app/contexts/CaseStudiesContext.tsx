'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { caseStudiesLabels } from '../labels/index';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  duration: string;
  results: string[];
}

interface CaseStudiesContextType {
  studies: CaseStudy[];
  loading: boolean;
  error: string | null;
  selectedStudy: CaseStudy | null;
  page: number;
  hasMore: boolean;
  loadMoreCaseStudies: () => Promise<void>;
  setSelectedStudy: (study: CaseStudy | null) => void;
  clearSelectedStudy: () => void;
}

const CaseStudiesContext = createContext<CaseStudiesContextType | undefined>(undefined);

export const useCaseStudies = () => {
  const context = useContext(CaseStudiesContext);
  if (context === undefined) {
    throw new Error('useCaseStudies must be used within a CaseStudiesProvider');
  }
  return context;
};

// Use data from labels instead of hardcoded mock data
const mockCaseStudies: CaseStudy[] = caseStudiesLabels.studies.map(study => ({
  ...study,
}));

interface CaseStudiesProviderProps {
  children: React.ReactNode;
}

export const CaseStudiesProvider: React.FC<CaseStudiesProviderProps> = ({ children }) => {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreCaseStudies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Return mock data based on page
      const startIndex = (page - 1) * 3;
      const endIndex = startIndex + 3;
      const newStudies = mockCaseStudies.slice(startIndex, endIndex);
      
      if (page === 1) {
        setStudies(newStudies);
      } else {
        setStudies(prev => [...prev, ...newStudies]);
      }
      
      setHasMore(endIndex < mockCaseStudies.length * 3); // Simulate more data
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load case studies');
    } finally {
      setLoading(false);
    }
  }, [page]);

  const handleSetSelectedStudy = (study: CaseStudy | null) => {
    setSelectedStudy(study);
  };

  const handleClearSelectedStudy = () => {
    setSelectedStudy(null);
  };

  // Load initial data
  useEffect(() => {
    if (studies.length === 0) {
      loadMoreCaseStudies();
    }
  }, [studies.length, loadMoreCaseStudies]);

  const value = {
    studies,
    loading,
    error,
    selectedStudy,
    page,
    hasMore,
    loadMoreCaseStudies,
    setSelectedStudy: handleSetSelectedStudy,
    clearSelectedStudy: handleClearSelectedStudy,
  };

  return (
    <CaseStudiesContext.Provider value={value}>
      {children}
    </CaseStudiesContext.Provider>
  );
}; 