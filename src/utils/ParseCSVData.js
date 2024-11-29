import axios from "axios";
import Papa from 'papaparse';


export const parseCSVData = async(csvFile) => {
    try {
        const response = await axios.get(csvFile);  // Use Axios to fetch the file
        const csvText = response.data;  // Get the CSV content from the response
        return new Promise((resolve, reject) => {
          Papa.parse(csvText, {
            header: true, // Treat the first row as headers
            skipEmptyLines: true, // Skip empty rows
            complete: (result) => resolve(result.data),  // Parse and return the data
            error: (error) => reject(error),
          });
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
}