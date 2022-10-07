import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getCar, createCar,} from "./src/Cars.js"
import { getUser, createUser,} from "./src/User.js"


const app = express()
app.use(cors())
app.use(express.json())


app.get('/cars', getCar)
app.post('/cars', createCar)
app.get('/users', getUser)
app.post('/users', createUser)

export const api = functions.https.onRequest(app);