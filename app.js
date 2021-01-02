const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        hola: "mundssso"
    })
})

app.listen(port, () => {
    console.log(`listining on port ${port}`);
}) 