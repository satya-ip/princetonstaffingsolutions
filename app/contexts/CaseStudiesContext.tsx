'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

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

// Mock data for demonstration
const mockCaseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Enterprise Cloud Migration',
    description: 'Seamlessly migrated a Fortune 500 company to cloud infrastructure, reducing costs by 40% and improving performance.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    category: 'Cloud Infrastructure',
    client: 'Global Manufacturing Corp',
    duration: '8 months',
    results: ['40% cost reduction', '99.9% uptime achieved', '3x faster deployment cycles'],
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Platform',
    description: 'Developed a cutting-edge analytics platform using machine learning to provide real-time business insights.',
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    category: 'Artificial Intelligence',
    client: 'Tech Startup Inc',
    duration: '6 months',
    results: ['250% increase in data processing speed', 'Real-time insights', 'Predictive accuracy of 94%'],
  },
  {
    id: '3',
    title: 'Digital Transformation Suite',
    description: 'Complete digital overhaul including mobile app, web platform, and backend systems integration.',
    image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'GraphQL'],
    category: 'Digital Transformation',
    client: 'Retail Chain Ltd',
    duration: '12 months',
    results: ['300% increase in mobile engagement', '50% faster checkout process', '99.5% customer satisfaction'],
  },
];

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