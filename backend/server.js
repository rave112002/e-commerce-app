const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample Route using Axios
app.get('/data', async (req, res) => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts/1'
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
