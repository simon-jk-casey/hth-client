import request from 'superagent'

module.exports = ({predatorData}, dispatch) => {
  request
  .post('localhost:3000/api/v1/captures')
  .send({predatorData})
  .withCredentials()
  .end((err, res) => {
    if (res) {
      if (!err) {
        dispatch({type: 'placeholder', payload: 'placeholder'})
      }
    }
  })
}
