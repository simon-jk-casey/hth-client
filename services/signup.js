import request from 'superagent'

module.exports = (newUserData, dispatch) => {
  request
  .post('http://localhost:3000/api/v1/signup')
  .send(newUserData)
  .end((err, res) => {
    if (res) {
      if (!err) {
        dispatch({type: 'CLEAR_STATE_CHANGE_ROUTE', payload: {category: 'newUser', route: '/'}})
      }
    } else {
      throw err
    }
  })
}
