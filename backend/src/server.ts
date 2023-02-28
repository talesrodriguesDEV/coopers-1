import express from 'express'

const server = express()

server.use(express.json())
server.get('/', (_req, res) => res.send('oi'))

server.listen(3001, () => console.log('Server running.'))

// Connecting to Database
import connectDb from './database/connectDb'
connectDb()
