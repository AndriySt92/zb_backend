import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db/connectDb.js'
import userRouter from './routes/userRouter.js'
import dealsRouter from './routes/dealsRouter.js'
import dealsModel from './models/dealsModel.js'

const app = express()
dotenv.config()
connectDB()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api/auth', userRouter)
app.use('/api/deals', dealsRouter)

app.get('/', async (req, res) => {
  try {
    const deals = await dealsModel.find().sort('-createdAt')

    res.json(deals)
  } catch (error) {
    console.error('Error in get all deals:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
},)

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`)
})
