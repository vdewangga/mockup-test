const express = require('express');
const router = express.Router();
const response = require('../util/response');

//Test Endpoint
router.post('/login', (req, res) => {
  const {userName, password} = req.body;

  if (userName !== 'email@test.com') {
    const data = {
      message: 'Username/Email Not Found',
      errorCode: 'USERLOGIN/NOT-FOUND',
      parameter: {
        User: null,
      },
    }
    return response.NewHttpRecordNotFound(res, data, '', 'Error');
  }
  if (password !== 'pwd') {
    const data = {
      message: 'Username or password is incorrect',
      errorCode: 'LOGIN/PASSWORD-IS-INCORRECT',
      parameter: {
        UserName: 'string',
        Password: 'string',
      },
    }
    return response.NewHttpNOK(res, data, '', 'Error');
  }

  if (password === 'pwd' && userName === 'email@test.com') {
    const data = {
      userName: 'email',
      exp: 3232,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImVtYWlsIiwibmFtZSI6Ill1ZGlzdGEiLCJleHAiOjE2NDA3ODE5OTZ9.nEhLOP1ahhpOLs7yQRxYXeIYJB4-KIpcYU0nlNrDnOA',
      refreshToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImVtYWlsIiwibmFtZSI6Ill1ZGlzdGEiLCJleHAiOjE2NDA3ODE5OTZ9.nEhLOP1ahhpOLs7yQRxYXeIYJB4-KIpcYU0nlNrDnOA',
    }
    return response.NewHttpOK(res, data, '', 'SUCCESS');
  }

  if (password === 'test1' && userName === 'email@test.com') {
    const data = {
      userName: 'email',
      exp: 3232,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImVtYWlsIiwibmFtZSI6Ill1ZGlzdGEiLCJleHAiOjE2NDA3ODE5OTZ9.nEhLOP1ahhpOLs7yQRxYXeIYJB4-KIpcYU0nlNrDnOA',
      refreshToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImVtYWlsIiwibmFtZSI6Ill1ZGlzdGEiLCJleHAiOjE2NDA3ODE5OTZ9.nEhLOP1ahhpOLs7yQRxYXeIYJB4-KIpcYU0nlNrDnOA',
    }
    return response.NewHttpServerError(res, data, '', 'Error');
  }
});

router.get('/testing', (req, res) => {
  return response.NewHttpOK(res, "success", "", 'SUCCESS')
})

module.exports = router;