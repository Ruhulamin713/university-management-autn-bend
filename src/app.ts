import express, { Application, Request, Response, urlencoded } from 'express'
export const app: Application = express()
import cors from 'cors'
import { userRoute } from './app/modules/users/user.routes'

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

//application routes
app.use('/user', userRoute)

app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully')
})
