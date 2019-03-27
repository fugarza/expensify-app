const path = require('path')
const express = require('express');
// heroku dynamic port if exists
const port = process.env.PORT || 3000;

//create express application
const app = express();

// dir_name current directory -> .. goes up a folder, public folder want to server html
const publicPath = path.join(__dirname, '..', 'public')

app.use(express.static(publicPath));

// function to run when someone requests page
// not part of the public directory.. sends to index.html
// * all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// start server and port to use
app.listen(port,  () => {
  console.log('Server is up!')
})