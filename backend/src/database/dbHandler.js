const UserModel = require('./UserModel')

const addUser = async (email, password) => UserModel.create({ email, password, todos: [], doneTasks: [] })

const findUserById = async (id) => UserModel.findById(id)

const findUserEmail = async (email) => UserModel.findOne({ email })

const updateUser = async (_id, key, newTodos) => UserModel.updateOne({ _id }, { [key]: newTodos })

module.exports = {
  addUser,
  findUserById,
  findUserEmail,
  updateUser
}
