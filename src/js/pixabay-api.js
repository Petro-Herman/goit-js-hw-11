// import iziToast from "izitoast";
// import 'izitoast/dist/css/iziToast.min.css';

// const inSearch = document.querySelector('.js-input');
// const btnSearch = document.querySelector('.js-btn');

// btnSearch.addEventListener('click', () => {
//     const query = inSearch.value.trim();
//     if (!query) {
//         iziToast.error({
//             title: 'Error',
//             message:
//                 'Sorry, there are no images matching your search query. Please try again!',
//         });
//         return;
//     }

//     getPicturesByQuery(query).then(data => console.log(data)).catch(err => console.error("Fetch Error: ", err));
// });

// // btnSearch.addEventListener('click', () => {
// //     getPicturesByQuery(`${inSearch}`)
// //       .then(data => console.log(data))
// //       .catch(err => console.error('Fetch Error: ', err));
// // })

// function getPicturesByQuery(query) {
//     const API_KEY = '44800036-3797b6ab3e55b410f8e06bcc9';
//     return fetch(
//       `https://pixabay.com/api?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`
//     ).then(res => {
//       console.log(res);

//       if (!res.ok) {
//         throw new Error(res.status);
//       }

//       return res.json();
//     });
// }






// ===========================================================================================


// const API_KEY = '44800036-3797b6ab3e55b410f8e06bcc9';
// const BASE_URL = 'https://pixabay.com/api/';

// export async function fetchImages(query) {
//   const response = await fetch(
//     `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
//       query
//     )}&image_type=photo&orientation=horizontal&safesearch=true`
//   );
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return await response.json();
// }













// ========================================================================







const pix = 2;
export { pix };
