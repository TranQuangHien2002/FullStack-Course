const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(express.json());
app.use(cors());    

const db = require('./models');

//Router
const postsRouter = require('./routes/Posts');
app.use('/posts', postsRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}!`));
});
