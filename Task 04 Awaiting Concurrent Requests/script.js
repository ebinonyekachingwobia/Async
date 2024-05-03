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

// Async function to make concurrent API requests
async function concurrentRequests() {
    try {
        console.log('Making concurrent API requests...');

        // Make concurrent API requests using Promise.all()
        const [response1, response2] = await Promise.all([
            fetchDataFromAPI('https://api.example.com/data1'),
            fetchDataFromAPI('https://api.example.com/data2')
        ]);

        // Log the combined results after both requests have resolved
        console.log('Combined results:', [response1, response2]);
    } catch (error) {
        console.error('Error making concurrent API requests:', error); // Log any errors
    }
}

// Call the async function
concurrentRequests();
