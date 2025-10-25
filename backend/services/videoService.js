const axios = require('axios');
const Project = require('../models/Project');

class VideoService {
  // Shotstack API Integration
  async processShotstack(apiKey, prompt, inputData) {
    try {
      const response = await axios.post(
        'https://api.shotstack.io/v1/render',
        {
          timeline: {
            soundtrack: inputData.soundtrack || {},
            background: inputData.background || '#000000',
            tracks: inputData.tracks || []
          },
          output: {
            format: 'mp4',
            resolution: 'hd'
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
          }
        }
      );

      return {
        success: true,
        data: response.data,
        videoUrl: response.data.response?.url || ''
      };
    } catch (error) {
      console.error('Shotstack error:', error.response?.data || error.message);
      return {
        success: false,
        error: error.response?.data?.message || error.message
      };
    }
  }

  // Creatomate API Integration
  async processCreatomate(apiKey, prompt, inputData) {
    try {
      const response = await axios.post(
        'https://api.creatomate.com/v1/renders',
        {
          template_id: inputData.templateId || '',
          modifications: inputData.modifications || {},
          output_format: 'mp4'
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return {
        success: true,
        data: response.data,
        videoUrl: response.data.url || ''
      };
    } catch (error) {
      console.error('Creatomate error:', error.response?.data || error.message);
      return {
        success: false,
        error: error.response?.data?.message || error.message
      };
    }
  }

  // Plainly Videos API Integration
  async processPlainly(apiKey, prompt, inputData) {
    try {
      const response = await axios.post(
        'https://api.plainlyvideos.com/api/v1/render',
        {
          template: inputData.template || '',
          parameters: inputData.parameters || {},
          webhookUrl: inputData.webhookUrl || ''
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return {
        success: true,
        data: response.data,
        videoUrl: response.data.videoUrl || ''
      };
    } catch (error) {
      console.error('Plainly error:', error.response?.data || error.message);
      return {
        success: false,
        error: error.response?.data?.message || error.message
      };
    }
  }

  // Tavus API Integration
  async processTavus(apiKey, prompt, inputData) {
    try {
      const response = await axios.post(
        'https://api.tavus.io/v2/videos',
        {
          script: prompt,
          replica_id: inputData.replicaId || '',
          video_name: inputData.videoName || 'AI Generated Video',
          background_url: inputData.backgroundUrl || ''
        },
        {
          headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
          }
        }
      );

      return {
        success: true,
        data: response.data,
        videoUrl: response.data.video_url || ''
      };
    } catch (error) {
      console.error('Tavus error:', error.response?.data || error.message);
      return {
        success: false,
        error: error.response?.data?.message || error.message
      };
    }
  }

  // Main processing function
  async processVideo(projectId, tool, prompt, inputData, user) {
    try {
      // Update project status to processing
      await Project.findByIdAndUpdate(projectId, { status: 'processing' });

      let result;

      switch (tool) {
        case 'shotstack':
          result = await this.processShotstack(user.apiKeys.shotstack, prompt, inputData);
          break;
        case 'creatomate':
          result = await this.processCreatomate(user.apiKeys.creatomate, prompt, inputData);
          break;
        case 'plainly':
          result = await this.processPlainly(user.apiKeys.plainly, prompt, inputData);
          break;
        case 'tavus':
          result = await this.processTavus(user.apiKeys.tavus, prompt, inputData);
          break;
        case 'promptclip':
        case 'lucyedit':
        case 'ltxvideo':
        case 'wan21':
          // These are open-source tools - simulation response
          result = {
            success: true,
            data: { message: `${tool} processing simulated` },
            videoUrl: `https://example.com/videos/${projectId}.mp4`
          };
          break;
        default:
          result = { success: false, error: 'Unknown tool' };
      }

      // Update project with result
      if (result.success) {
        await Project.findByIdAndUpdate(projectId, {
          status: 'completed',
          videoUrl: result.videoUrl,
          outputData: result.data
        });
      } else {
        await Project.findByIdAndUpdate(projectId, {
          status: 'failed',
          outputData: { error: result.error }
        });
      }
    } catch (error) {
      console.error('Process video error:', error);
      await Project.findByIdAndUpdate(projectId, {
        status: 'failed',
        outputData: { error: error.message }
      });
    }
  }
}

module.exports = new VideoService();
