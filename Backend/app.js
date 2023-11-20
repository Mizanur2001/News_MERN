import Express from "express";
import axios from 'axios'
import env from 'dotenv'
import cors from 'cors'


const app = Express()
app.use(Express.json())
env.config()
app.use(cors({}))


app.post("/", (req, res) => {
    const {country,category,page,pageSize} = req.body
    const apiKey = process.env.apiKey
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${apiKey}&page=${page}&pageSize=${pageSize}`).then((responce) => {
        res.send(responce.data)
    }).catch((err) => {
        res.status(400).send(err.response.data)
    })
})

app.listen(5003, () => {
    console.log("server is listen on port 5003")
})