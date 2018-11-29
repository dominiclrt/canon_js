

function put_req_tanks(userData, userURL) {
    request({
      method: 'PUT',
      uri: userURL,
      multipart: [{
        'content-type': 'application/json',
        body: JSON.stringify(userData),
      }]
    }, function(error, response, body) {
      if (response.statusCode == 200) {
        console.log(body)
      } else {
        console.log('error: ' + response.statusCode)
      }
    })
  }

  function get_req_tanks_id(userURL) {
    request({
      method: 'GET',
      uri: userURL
    }, function(error, response, body) {
      if (response.statusCode == 200) {
        return response;
      } else {
        console.log('error: ' + response.statusCode)
      }
    })
  }


  function get_req_highscores() {
    request({
      method: 'GET',
      uri: 'http://tankgame-api.herokuapp.com/api/highscores'
    }, function(error, response, body) {
      if (response.statusCode == 200) {
        return (body);
      } else {
        console.log('error: ' + response.statusCode)
        return null;
      }
    })
  }

   function put_req_highscores(userData) {
    request({
      method: 'PUT',
      uri: 'http://tankgame-api.herokuapp.com/api/highscores',
      multipart: [{
        'content-type': 'application/json',
        body: JSON.stringify(userData),
      }]
    }, function(error, response, body) {
      if (response.statusCode == 200) {
        console.log(body);
      } else {
        console.log('error: ' + response.statusCode)
      }
    })
  }
