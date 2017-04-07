import request from 'superagent'

module.exports = (dispatch) => {
  request
  .get('http://localhost:3000/api/v1/captures')
  .withCredentials()
  .end((err, res) => {
    if (!err) dispatch({type: 'ENTRY_HISTORY', payload: res.body})
    else throw err
  })
}
