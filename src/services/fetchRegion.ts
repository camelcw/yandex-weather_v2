import axios from 'axios';


export async function fetchRegion(url: string) {
  try {
    const response = await axios.get(url);
    const data = response?.data?.areas;
    return data;
  } catch (e) {
    console.log('Error');
  }
}
