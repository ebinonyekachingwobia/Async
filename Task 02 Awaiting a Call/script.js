// Simulated API call function
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate API call delay with setTimeout
        setTimeout(() => {
            // Simulated API response
            const data = { id: 1, name: 'John Doe', email: 'john@example.com' };
            resolve(data); // Resolve the promise with the data
        }, 2000); // Simulate 2 seconds delay
    });
}

// Async function to fetch data from API and log it
async function awaitCall() {
    try {
        console.log('Fetching data from API...');
        const data = await fetchDataFromAPI(); // Wait for API response
        console.log('API response:', data); // Log the data
    } catch (error) {
        console.error('Error fetching data from API:', error); // Log any errors
    }
}

// Call the async function
awaitCall();
