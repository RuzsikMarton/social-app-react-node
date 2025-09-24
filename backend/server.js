import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
