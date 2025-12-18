// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// API Service
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Hero Section
  async getHeroSection() {
    return this.request('/hero');
  }

  // Services
  async getServices() {
    return this.request('/services');
  }

  async getService(slug) {
    return this.request(`/services/${slug}`);
  }

  // Projects
  async getProjects() {
    return this.request('/projects');
  }

  async getFeaturedProjects() {
    return this.request('/projects/featured');
  }

  async getProject(slug) {
    return this.request(`/projects/${slug}`);
  }

  // Training
  async getTrainings() {
    return this.request('/trainings');
  }

  async getTraining(slug) {
    return this.request(`/trainings/${slug}`);
  }

  // Team Members
  async getTeamMembers() {
    return this.request('/team');
  }

  // About Section
  async getAboutSection() {
    return this.request('/about');
  }

  // Portfolio
  async getPortfolios() {
    return this.request('/portfolio');
  }

  // App Settings
  async getAppSettings() {
    return this.request('/settings');
  }

  // Contact Info
  async getContactInfo() {
    return this.request('/contact-info');
  }

  // Contact Form Submission
  async submitContactForm(formData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // News & Events
  async getNewsEvents() {
    return this.request('/news-events');
  }

  async getFeaturedNewsEvents() {
    return this.request('/news-events/featured');
  }

  async getNewsEvent(slug) {
    return this.request(`/news-events/${slug}`);
  }

  // Accreditations
  async getAccreditations() {
    return this.request('/accreditations');
  }
}

// Export singleton instance
const apiService = new ApiService();
export default apiService;
