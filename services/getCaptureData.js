import request from 'superagent'

module.exports = (dispatch) => {
  const baseUrl = 'http://localhost:3000' // *dev
  // const baseUrl = 'https://predata.herokuapp.com' // *deployed
  request
  .get(baseUrl + '/api/v1/captures')
  .withCredentials()
  .end((err, res) => {
    if (!err) dispatch({type: 'ENTRY_HISTORY', payload: res.body})
    else throw err
  })
}
