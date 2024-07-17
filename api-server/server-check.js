const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/check-connection', async (req, res) => {
    const urlToCheck = req.query.url;

    if (!urlToCheck) {
        return res.status(400).send('URL parameter is required');
    }

    try {
        const response = await axios.get(urlToCheck);
        res.status(200).send({
            message: 'Connection successful',
            statusCode: response.status,
            data: response.data
        });
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            res.status(error.response.status).send({
                message: 'Server responded with an error',
                statusCode: error.response.status,
                data: error.response.data
            });
        } else if (error.request) {
            // The request was made but no response was received
            res.status(500).send({
                message: 'No response received from server',
                error: error.message
            });
        } else {
            // Something happened in setting up the request that triggered an Error
            res.status(500).send({
                message: 'Error in setting up the request',
                error: error.message
            });
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// http://localhost:3000/check-connection?url=https://jsonplaceholder.typicode.com/posts