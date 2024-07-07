import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import {
  clearGallery,
  renderImages,
  showNoResultsMessage,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = form.querySelector('input');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    return;
  }

  clearGallery();
  showLoadingIndicator();

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      showNoResultsMessage();
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    console.error('Error:', error);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoadingIndicator();
  }
});
