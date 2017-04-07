import request from 'superagent'

module.exports = (newUserData, dispatch) => {
  // const baseUrl = 'http://localhost:3000' // *dev
  const baseUrl = 'https://predata.herokuapp.com' // *deployed
  request
  .post(baseUrl + '/api/v1/signup')
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
