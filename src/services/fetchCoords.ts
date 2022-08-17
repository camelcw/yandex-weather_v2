import axios from "axios";

async function fetchTown(url: string, params: any) {
    try {
        const response = await axios.get(url, {
            params:{
                term: params
            }
        });
      const data = response?.data;
      return data
    } catch(e) {
        console.log("Error")
    }
}

export async function fetchCoords(url: string, params: any) {
    try {
      const town = await fetchTown(url, params)
    
    } catch (e) {
      console.log('Error');
    }
  }
  