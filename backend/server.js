import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from  "./routes/auth.js"
import userRoutes from  "./routes/users.js"
import postRoutes from  "./routes/posts.js"
import commentRoutes from  "./routes/comments.js"
import likeRoutes from  "./routes/likes.js"


dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/auth",authRoutes );
app.use("/api/users",userRoutes );
app.use("/api/posts", postRoutes );
app.use("/api/comments",commentRoutes );
app.use("/api/likes",likeRoutes );

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
