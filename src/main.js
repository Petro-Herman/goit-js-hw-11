// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';


// document.querySelector('.js-btn').addEventListener('click', function (event) {
//   const searchInput = document.querySelector('.js-input').value.trim();
//   if (!searchInput) {
//     event.preventDefault();
//     alert(
//       'Sorry, there are no images matching your search query. Please try again!'
//     );
//   }
// });




// ========================================================================================


// import { fetchImages } from './pixabay-api.js';
// import { renderImages, showError } from './render-functions.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('#search-form');
//   const input = form.querySelector('input[name="searchQuery"]');

//   form.addEventListener('submit', async event => {
//     event.preventDefault();

//     const query = input.value.trim();
//     if (!query) {
//       showError('Please enter a search term.');
//       return;
//     }

//     try {
//       const data = await fetchImages(query);
//       if (data.hits.length === 0) {
//         showError(
//           'Sorry, there are no images matching your search query. Please try again!'
//         );
//         return;
//       }
//       renderImages(data.hits);
//     } catch (error) {
//       showError(
//         'An error occurred while fetching images. Please try again later.'
//       );
//     }
//   });
// });







// =====================================================================

import { render } from "./js/render-functions"
import { pix } from "./js/pixabay-api"

console.log(render + pix);