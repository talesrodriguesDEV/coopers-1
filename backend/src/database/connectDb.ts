import mongoose from 'mongoose'

export default function connectDb() {
	mongoose.connect('mongodb://localhost:27017', { user: 'root', pass: 'example' })

	const db = mongoose.connection

	db.once('open', () => console.log('Connected to MongoDB'))
	db.on('error', (err) => console.log(err))
}
