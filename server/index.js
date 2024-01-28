const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const db = require('./models');

//Router
const postsRouter = require('./routes/Posts');
app.use('/posts', postsRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}!`));
});
