import request from 'superagent'

module.exports({loginData}, dispatch) => {
  // const {username, password} = loginData
  request
    .post('localhost:3000/api/v1/login')
    .send({loginData})
    .withCredentials()
    .end((err,res) => {
      if (!err) {
        dispatch({type: 'PLACEHOLDER-LOGIN', payload: 'PLACEHOLDER-LOGIN'})
      } else {
        dispatch({type: 'PLACEHOLDER-LOGINFAIL', payload: 'PLACEHOLDER-LOGINFAIL'})
      }
    })
}
