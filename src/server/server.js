import { dataBase } from './dataBase'

export default {
  getUsers: () => ({
    status: 'success',
    users: dataBase.getUsers()
  }),
  getUser: id => dataBase.getUser(id),
  createUser: user => ({
    status: dataBase.createUser(user) ? 'success' : 'error'
  }),
  editUser: user => ({
    status: dataBase.updateUser(user) ? 'success' : 'error'
  }),
  deleteUser: id => ({
    status: dataBase.deleteUser(id) ? 'success' : 'error'
  })
}
