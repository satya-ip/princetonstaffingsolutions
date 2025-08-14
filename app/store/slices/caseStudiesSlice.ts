import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

interface CaseStudiesState {
  studies: CaseStudy[];
  loading: boolean;
  error: string | null;
  selectedStudy: CaseStudy | null;
  page: number;
  hasMore: boolean;
}

const initialState: CaseStudiesState = {
  studies: [],
  loading: false,
  error: null,
  selectedStudy: null,
  page: 1,
  hasMore: true,
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

export const loadMoreCaseStudies = createAsyncThunk(
  'caseStudies/loadMore',
  async (page: number) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock data based on page
    const startIndex = (page - 1) * 3;
    const endIndex = startIndex + 3;
    const studies = mockCaseStudies.slice(startIndex, endIndex);
    
    return {
      studies,
      hasMore: endIndex < mockCaseStudies.length * 3, // Simulate more data
    };
  }
);

const caseStudiesSlice = createSlice({
  name: 'caseStudies',
  initialState,
  reducers: {
    setSelectedStudy: (state, action) => {
      state.selectedStudy = action.payload;
    },
    clearSelectedStudy: (state) => {
      state.selectedStudy = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMoreCaseStudies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMoreCaseStudies.fulfilled, (state, action) => {
        state.loading = false;
        if (state.page === 1) {
          state.studies = action.payload.studies;
        } else {
          state.studies.push(...action.payload.studies);
        }
        state.hasMore = action.payload.hasMore;
        state.page += 1;
      })
      .addCase(loadMoreCaseStudies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load case studies';
      });
  },
});

export const { setSelectedStudy, clearSelectedStudy } = caseStudiesSlice.actions;
export default caseStudiesSlice.reducer;