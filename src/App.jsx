import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './App.css';
import axios from 'axios';
import LandingPage from './pages/LandinPage';
import Index from './layouts/Index';

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [history, setHistory] = useState([]);

  // Fetch and parse CSV data using Axios
  const fetchDataFromCSV = async (csvFile) => {
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
  };

  useEffect(() => {
    // Fetch user data from CSV
    const loadData = async () => {
      const userlist = await fetchDataFromCSV('/src/data/users.csv');
      const productslist = await fetchDataFromCSV('/src/data/products.csv')
      const historylist = await fetchDataFromCSV('/src/data/purchase_history.csv')
      console.log({ userlist, productslist, historylist });
      setUsers(userlist);  // Set fetched data to state
      setProducts(productslist)
      setHistory(historylist)
    };

    loadData();
  }, []);  // Only run on mount

  const [count, setCount] = useState(0);

  return (
    <div className='app px-5 py-4'>
      <Index>
        <LandingPage onClick={() => console.log('clicked')} />
      </Index>
    </div>

  );
}

export default App;
