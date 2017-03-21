import request from 'superagent'

module.exports = (dispatch) => {
  request
  .get('localhost:3000/api/v1/captures')
  .withCredentials()
  .end((err, res) => {
    //handle data received
  })
}
