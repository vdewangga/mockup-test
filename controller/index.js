const express = require('express');
const router = express.Router();
const response = require('../util/response');

//Test Endpoint
router.post('/UserAuth/login', (req, res) => {
  const { userName, password } = req.body;

  if (password === 'test2' && userName === 'email@test.com') {
    const data = {
      message: 'Username or password is incorrect',
      errorCode: 'LOGIN/PASSWORD-IS-INCORRECT',
      parameter: {
        userName: 'string',
        password: 'string',
      },
    };
    return response.NewHttpRecordNotFound(res, data, '', 'Error');
  }

  if (password === 'test1' && userName === 'email@test.com') {
    const data = {
      message: 'INTERNAL SERVER ERROR',
      errorCode: 'INTERNAL SERVER ERROR',
      parameter: null,
    };
    return response.NewHttpServerError(res, data, '', 'Error');
  }

  if (password !== 'pwd' || userName !== 'email@test.com') {
    const data = {
      type: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
      title: 'One or more validation errors occurred.',
      status: 400,
      traceId: '00-43ca9d87c0f5f9733340d4998933790f-8db56e8a3dbceccb-00',
      errors: {
        UserName: [
          'The UserName field is required.',
          "The field UserName must be a string or array type with a minimum length of '6'.",
        ],
        Password: [
          'The Password field is required.',
          "The field Password must be a string or array type with a minimum length of '10'.",
        ],
      },
    };
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
    };
    return response.NewHttpOK(res, data, '', 'SUCCESS');
  }
});

router.put('/UserAuth/emailrequest', (req, res) => {
  const { email } = req.body;

  if (email == '1@mail.com') {
    const data = {
      message: 'Email Not Found',
      errorCode: 'USERRESETPASSWORD/NOT-FOUND',
      parameter: {
        User: null,
      },
    };
    return response.NewHttpRecordNotFound(res, data, '', 'Error');
  }

  if (email == '2@mail.com') {
    const data = {
      message: 'INTERNAL SERVER ERROR',
      errorCode: 'INTERNAL SERVER ERROR',
      parameter: null,
    };
    return response.NewHttpServerError(res, data, '', 'Error');
  }

  if (email == '3@mail.com') {
    const data = {
      type: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
      title: 'One or more validation errors occurred.',
      status: 400,
      traceId: '00-43ca9d87c0f5f9733340d4998933790f-8db56e8a3dbceccb-00',
      errors: {
        Email: ['The Email field is required.'],
      },
    };
    return response.NewHttpNOK(res, data, '', 'Error');
  }

  if (email == '4@mail.com') {
    const data = {
      type: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
      title: 'One or more validation errors occurred.',
      status: 400,
      traceId: '00-43ca9d87c0f5f9733340d4998933790f-8db56e8a3dbceccb-00',
      errors: {
        Email: [
          "The field Email must be a string or array type with a maximum length of '50'.",
        ],
      },
    };
    return response.NewHttpNOK(res, data, '', 'Error');
  }

  if (email == '5@mail.com') {
    const data = {};
    return response.NewHttpOK(res, data, '', 'SUCCESS');
  }
});

router.put('/userAuth/resetpassword', (req, res) => {
  const { token, newPassword, verifyNewPassword } = req.body;
  console.log(newPassword);
  if (newPassword === '1testinG123*') {
    const data = {
      message: 'Token Not Found',
      errorCode: 'USER-RESET-PASSWORD/NOT-FOUND',
      parameter: {
        Token: 'string',
      },
    };
    return response.NewHttpRecordNotFound(res, data, '', 'Error');
  }

  if (newPassword === '2testinG123*') {
    const data = {
      message: 'INTERNAL SERVER ERROR',
      errorCode: 'INTERNAL SERVER ERROR',
      parameter: null,
    };
    return response.NewHttpServerError(res, data, '', 'Error');
  }

  if (newPassword === '3testinG123*') {
    const data = {
      type: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
      title: 'One or more validation errors occurred.',
      status: 400,
      traceId: '00-43ca9d87c0f5f9733340d4998933790f-8db56e8a3dbceccb-00',
      errors: {
        UserName: [
          'The UserName field is required.',
          "The field UserName must be a string or array type with a minimum length of '6'.",
        ],
        Password: [
          'The Password field is required.',
          "The field Password must be a string or array type with a minimum length of '10'.",
        ],
      },
    };
    return response.NewHttpNOK(res, data, '', 'Error');
  }

  if (newPassword === '4testinG123*') {
    const data = {
      message: ['Passwords do not match'],
      errorCode: 'VALIDATION-ERROR',
      parameter: {
        VerifyNewPassword: ['Passwords do not match'],
      },
    };
    return response.NewHttpNOK(res, data, '', 'Error');
  }

  if (newPassword === '5testinG123*') {
    const data = {};
    return response.NewHttpOK(res, data, '', 'SUCCESS');
  }
});

router.get('/testing', (req, res) => {
  return response.NewHttpOK(res, 'success', '', 'SUCCESS');
});

router.get('/dropdown/pay-period', (req, res) => {
  const { page, description } = req.query;
  let data = {};
  if (page === '1') {
    data = {
      data: [
        {
          id: 'a',
          payPeriodDesc: 'January-M1M012022',
          payCycleName: 'Monthly',
          cutOffDateFrom: '01/01/2022',
          cutOffDateTo: '31/01/2021',
          payDate: '2022-01-31',
        },
        {
          id: 'b',
          payPeriodDesc: 'February-M1M022022',
          payCycleName: 'Monthly',
          payDate: '2022-01-31',
        },
        {
          id: 'c',
          payPeriodDesc: 'March-M1M032022',
          payCycleName: 'Monthly',
          payDate: '2022-01-31',
        },
        {
          id: 'd',
          payPeriodDesc: 'April-M1M042022',
          payCycleName: 'Monthly',
          payDate: '2022-01-31',
        },
        {
          id: 'e',
          payPeriodDesc: 'Mei-M1M052022',
          payCycleName: 'Monthly',
          payDate: '2022-01-31',
        },
      ],
      page: 1,
      limit: 5,
      total: 5,
    };
  }
  if (page === '2') {
    data = {
      data: [
        {
          id: 'f',
          payPeriodDesc: 'June-M1M062022',
          payCycleName: 'Monthly',
          payDate: '2022-01-31',
        },
        {
          id: 'g',
          payPeriodDesc: 'July-M1M072022',
          payCycleName: 'Monthly',
          payDate: '2022-01-31',
        },
        {
          id: 'h',
          payPeriodDesc: 'August-M1M082022',
          payCycleName: 'Monthly',
          payDate: '2022-01-31',
        },
        {
          id: 'i',
          payPeriodDesc: 'September-M1M092022',
          payCycleName: 'Monthly',
          payDate: '2022-01-31',
        },
        {
          id: 'j',
          payPeriodDesc: 'Oct-M1M102022',
          payCycleName: 'Monthly',
          payDate: '2022-01-31',
        },
      ],
      page: 2,
      limit: 10,
      total: 10,
    };
  }
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.post('/payroll-run', (req, res) => {
  const { payPriodId } = req.body;
  return response.NewHttpOK(
    res,
    {
      payPeriodId: payPriodId,
    },
    '',
    'SUCCESS'
  );
});

module.exports = router;
