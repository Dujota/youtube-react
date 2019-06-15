import axios from 'axios';

const KEY = 'AIzaSyB2JEIFZGWPx63VTohbIZeyR8DJDbrMiSQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY
  }
});
