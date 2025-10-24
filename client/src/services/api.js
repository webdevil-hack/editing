const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
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

  // Auth endpoints
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // Video endpoints
  async createProject(projectData) {
    return this.request('/video/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  async getProjects() {
    return this.request('/video/projects');
  }

  async getProject(id) {
    return this.request(`/video/projects/${id}`);
  }

  async updateProject(id, projectData) {
    return this.request(`/video/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  }

  async deleteProject(id) {
    return this.request(`/video/projects/${id}`, {
      method: 'DELETE',
    });
  }

  async processVideo(projectId, apiKey, service) {
    return this.request(`/video/process/${projectId}`, {
      method: 'POST',
      body: JSON.stringify({ apiKey, service }),
    });
  }

  async getVideoStatus(jobId) {
    return this.request(`/video/status/${jobId}`);
  }

  // User endpoints
  async updateProfile(userData) {
    return this.request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async updateApiKeys(apiKeys) {
    return this.request('/user/api-keys', {
      method: 'PUT',
      body: JSON.stringify(apiKeys),
    });
  }

  async getApiKeys() {
    return this.request('/user/api-keys');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export default new ApiService();