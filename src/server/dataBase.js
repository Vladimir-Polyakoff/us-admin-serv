const parseUsersList = users => JSON.parse(users)
const isDataLength = data => Boolean(data && data.length)
const checkUser = (id, data) => {
  for (const user of data) {
    if (user.id === id) {
      return true
    }
  }
  return false
}

export const dataBase = {
  getUsers: () => {
    return parseUsersList(localStorage.getItem('usersList'))
  },
  deleteUsers: () => {
    localStorage.setItem('usersList', '')
  },
  saveUsers: (usersList) => {
    localStorage.setItem('usersList', JSON.stringify(usersList))
  },
  getUser: id => {
    const usersList = dataBase.getUsers()
    const user = usersList.find(user => user.id === id)

    return !user
      ? { status: 'error' }
      : { status: 'success', user }
  },
  createUser: user => {
    const usersList = dataBase.getUsers()

    if (isDataLength(usersList)) {
      usersList.unshift(user)
      dataBase.saveUsers(usersList)
    } else {
      dataBase.saveUsers([user])
    }

    return checkUser(user.id, usersList)
  },
  updateUser: updatedUser => {
    const usersList = dataBase.getUsers()

    for (let i = 0; i < usersList.length; ++i) {
      if (updatedUser.id === usersList[i].id) {
        usersList[i] = updatedUser
        return true
      }
    }
    return false
  },
  deleteUser: id => {
    const usersList = dataBase.getUsers()
    const updatedUsersList = usersList.filter(user => user.id !== id)
    dataBase.saveUsers(updatedUsersList)

    return true
  }
}
