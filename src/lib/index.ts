export async function testServerCors() {
	try {
		const response = await fetch('http://localhost:8000/', {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}

		const data = await response.json();
		console.log(`Server response: ${data.message}`);
		return data.message || 'No message returned';
	} catch (error) {
		console.error('Failed to fetch data:', error);
		return 'Error fetching data. Please try again later.';
	}
}
