// Label imports for all pages
import homeLabels from './home.json';
import aboutLabels from './about.json';
import servicesLabels from './services.json';
import caseStudiesLabels from './caseStudies.json';
import contactLabels from './contact.json';
import commonLabels from './common.json';

export {
  homeLabels,
  aboutLabels,
  servicesLabels,
  caseStudiesLabels,
  contactLabels,
  commonLabels,
};

// Type definitions for better TypeScript support
export interface HomeLabels {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    buttons: {
      primary: string;
      secondary: string;
    };
  };
  services: Array<{
    title: string;
    description: string;
    metrics: string;
  }>;
  expandedContent: {
    mainTitle: string;
    subtitle: string;
    sections: Array<{
      title: string;
      description: string;
      note: string;
    }>;
    insights: {
      title: string;
      description: string;
      features: Array<{
        label: string;
        color: string;
      }>;
    };
  };
}

export interface AboutLabels {
  header: {
    title: string;
    subtitle: string;
  };
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
  }>;
  expertise: {
    title: string;
    description: string;
    certifications: string[];
  };
  skills: Array<{
    name: string;
    level: number;
  }>;
  team: {
    title: string;
    members: Array<{
      name: string;
      role: string;
      image: string;
      skills: string[];
    }>;
  };
}

export interface ServicesLabels {
  header: {
    title: string;
    subtitle: string;
  };
  services: Array<{
    title: string;
    description: string;
    features: string[];
    price: string;
    gradient: string;
    benefits: string[];
  }>;
  stats: Array<{
    value: number | string;
    suffix: string;
    label: string;
    description: string;
  }>;
  process: {
    title: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export interface CaseStudiesLabels {
  header: {
    title: string;
    subtitle: string;
  };
  studies: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    client: string;
    duration: string;
    results: string[];
  }>;
  loadMore: {
    buttonText: string;
    loadingText: string;
  };
  modal: {
    viewProjectText: string;
  };
}

export interface ContactLabels {
  header: {
    title: string;
    subtitle: string;
  };
  contactInfo: Array<{
    title: string;
    value: string;
    subtitle: string;
  }>;
  form: {
    title: string;
    fields: {
      [key: string]: {
        label: string;
        required: string;
        invalid?: string;
        minLength?: string;
      };
    };
    services: string[];
    buttons: {
      submit: string;
      sending: string;
      success: string;
    };
  };
  whyChoose: {
    title: string;
    features: string[];
  };
  successMessage: string;
}

export interface CommonLabels {
  company: {
    name: string;
    tagline: string;
    description: string;
  };
  navigation: Array<{
    label: string;
    path: string;
  }>;
  footer: {
    description: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
    certifications: string[];
    sections: Array<{
      title: string;
      links: string[];
    }>;
    socialLinks: Array<{
      name: string;
      url: string;
    }>;
    copyright: string;
    additionalInfo: string;
    legalLinks: string[];
  };
}