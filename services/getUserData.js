import request from 'superagent'

module.exports = (userId, dispatch) => {
  request
  .get(`http://localhost:3000/api/v1/user/${userId}`)
  .withCredentials()
  .end((err, res) => {
    if (!err) console.log(res)
    else throw err
  })
}
