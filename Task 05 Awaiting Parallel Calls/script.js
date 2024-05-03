// Simulated API call function
function fetchDataFromAPI(url) {
    return new Promise((resolve, reject) => {
        // Simulate API call delay with setTimeout
        setTimeout(() => {
            // Simulated API response
            const data = { url, status: 'success' };
            resolve(data); // Resolve the promise with the data
        }, Math.random() * 2000); // Simulate random delay between 0 and 2 seconds
    });
}

// Function to fetch data from multiple URLs concurrently
async function parallelCalls(urls) {
    try {
        console.log('Fetching data from multiple URLs concurrently...');

        // Map each URL to a Promise that fetches data from the API
        const promises = urls.map(url => fetchDataFromAPI(url));

        // Use Promise.all() to await all API calls simultaneously
        const responses = await Promise.all(promises);

        // Log the responses once all requests are complete
        console.log('Responses:', responses);
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
    }
}

// Example usage:
const urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
parallelCalls(urls);
