let express = require('express');
let app = express();

let port = process.env.PORT || 2200

app.get('/', (req, res) => {
    res.send('asche server!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});