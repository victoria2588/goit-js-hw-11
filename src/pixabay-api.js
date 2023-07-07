import axios from 'axios';
const API_KEY = '38118761-5c53bea8af45b7f3b182c00e5';

async function getImages(querry, page) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${querry}&image_type=photo&per_page=40&page=${page}
  &orientation=horizontal&safesearch=true`;
  const res = await axios.get(url);
  return res.data;
}
export { getImages };
