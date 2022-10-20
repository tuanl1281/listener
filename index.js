import express from 'express';

/* CONFIG */
const port = 8080;
const app = express();
/* RUN */
app.get('/', (request) => console.log(request));
app.listen(port || 3000, () => console.log(`Listen on port ${port}`));
