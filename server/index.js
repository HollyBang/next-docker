const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

router.post('/yoman', (req, res) => {
  console.log('YoYoYoman');
  res.json([
    {
      name: 'Chuck',
      text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem '
    },
    {
      name: 'Chuck 2',
      text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem '
    },
    {
      name: 'Chuck 3',
      text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem '
    },
  ]);
});

router.get('/api', (req, res) => {
  res.send('test api');
})

app.use('/', router);

app.listen(process.env.PORT || 4040, () => {
  console.log('Yo server'); 
});