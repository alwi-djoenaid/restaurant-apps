/* eslint-disable valid-jsdoc */
import axios from 'axios';
import {showErrorMessage} from '../components/Toast';
import CONFIG from '../global/config';

/**
 * Contains API connection
 */
export default class RestaurantService {
  /**
   *
   * @param {*} id Restaurant ID
   * @return restaurant details
   */
  async getRestaurantById(id) {
    let response;
    try {
      response = await axios.get(`${CONFIG.BASE_URL}/detail/${id}`);
    } catch (error) {
      console.warn(error);
      this.showToast();
    }
    return response.data;
  }

  /**
   * @return restaurant list
   */
  async getRestaurantList() {
    let response;
    try {
      response = await axios.get(`${CONFIG.BASE_URL}/list`);
    } catch (error) {
      console.warn(error);
      this.showToast();
    }
    return response.data;
  }

  /**
   *
   * @param {*} review The payload with JSON format
   * @returns response message
   */
  async addReview(review) {
    let response;
    try {
      response = await axios.post(`${CONFIG.BASE_URL}/review`, review, {
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
      });
    } catch (error) {
      console.warn(error);
      this.showToast();
    }
    return response;
  }

  /**
   * Show error message toast
   */
  showToast() {
    showErrorMessage();
    setTimeout(() => {
      const modal = document.querySelector('#errorToast');
      modal.remove();
    }, 3000);
  }
}
