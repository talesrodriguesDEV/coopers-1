const { addUser, findUserById, findUserEmail, updateUser } = require('../database/dbHandler')
const jwt = require('jsonwebtoken')

const postUser = async (req, res) => {
  const { email, password } = req.body

  const user = await findUserEmail(email)

  if (user && user.password === password) {
    const token = jwt.sign({ _id: user._id }, 'jwt_secret')

    return res.status(200).json({ message: 'Login was sucessfully.', token })
  }

  const { _id } = await addUser(email, password)

  const token = jwt.sign({ _id }, 'jwt_secret')

  res.status(201).json({ message: 'User created successfully.', token })
}

const getUser = async (req, res) => {
  const user = await findUserById(req.id)

  res.status(200).json(user)
}

const putUser = async (req, res) => {
  const { key, newTodos } = req.body

  await updateUser(req.id, key, newTodos)

  res.status(200).json({ message: 'User updated successfully.' })
}

module.exports = {
  postUser,
  getUser,
  putUser
}
