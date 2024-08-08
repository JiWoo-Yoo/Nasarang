const apiKey = import.meta.env.VITE_NASA_API_KEY;

const baseUrl = import.meta.env.VITE_NASA_BASE_URL;

export const getData = async (endpoint: string, params = '') => {
    try{
        const response = await fetch(`${baseUrl}${endpoint}?api_key=${apiKey}&${params}`);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch(error) {
        console.error('Error fetching data:', error);
        return {};
    }
}