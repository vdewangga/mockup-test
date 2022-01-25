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
      message: [
        'The UserName field is required.',
        "The field UserName must be a string or array type with a minimum length of '6'.",
      ],
      errorCode: 'VALIDATION-ERROR',
      parameter: {
        Password: [
          'The Password field is required.',
          "The field Password must be a string or array type with a minimum length of '10'.",
        ],
        UserName: [
          'The UserName field is required.',
          "The field UserName must be a string or array type with a minimum length of '6'.",
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
      message: ['The Email field is required.'],
      errorCode: 'VALIDATION-ERROR',
      parameter: {
        Email: [
          "The field Email must be a string or array type with a maximum length of '50'.",
        ],
      },
    };
    return response.NewHttpNOK(res, data, '', 'Error');
  }

  if (email == '4@mail.com') {
    const data = {
      message: [
        "The field Email must be a string or array type with a maximum length of '50'.",
      ],
      errorCode: 'VALIDATION-ERROR',
      parameter: {
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
      message: [
        'The VerifyNewPassword field is required.',
        "The field VerifyNewPassword must be a string or array type with a minimum length of '10'.",
      ],
      errorCode: 'VALIDATION-ERROR',
      parameter: {
        Token: ['The Token field is required.'],
        NewPassword: [
          'The NewPassword field is required.',
          "The field NewPassword must be a string or array type with a minimum length of '10'.",
        ],
        VerifyNewPassword: [
          'The VerifyNewPassword field is required.',
          "The field VerifyNewPassword must be a string or array type with a minimum length of '10'.",
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

router.get('/payGroup/tax-rule', (req, res) => {
  const { page } = req.query;
  const data = {
    data: [
      {
        paygroupCode: `PAY-202200000001 page ${page}`,
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 1,
      },
      {
        paygroupCode: 'PAY-202200000001',
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 2,
      },
      {
        paygroupCode: 'PAY-202200000001',
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 3,
      },
      {
        paygroupCode: 'PAY-202200000001',
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 4,
      },
      {
        paygroupCode: 'PAY-202200000001',
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 5,
      },
      {
        paygroupCode: 'PAY-202200000001',
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 6,
      },
      {
        paygroupCode: 'PAY-202200000001',
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 7,
      },
      {
        paygroupCode: 'PAY-202200000001',
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 8,
      },
      {
        paygroupCode: 'PAY-202200000001',
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 9,
      },
      {
        paygroupCode: 'PAY-202200000001',
        payCycleName: 'Monthly',
        isActiveStatus: 'Active',
        description: 'Main Cycle pay group for 2022',
        id: 10,
      },
    ],
    page: parseInt(page),
    limit: 10,
    total: 56,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/employment/employees', (req, res) => {
  const { page } = req.query;
  const data = {
    data: [
      {
        employeeNo: `EMP45678901234 page-${page}`,
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 1,
      },
      {
        employeeNo: 'EMP45678901234',
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 2,
      },
      {
        employeeNo: 'EMP45678901234',
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 3,
      },
      {
        employeeNo: 'EMP45678901234',
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 4,
      },
      {
        employeeNo: 'EMP45678901234',
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 5,
      },
      {
        employeeNo: 'EMP45678901234',
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 6,
      },
      {
        employeeNo: 'EMP45678901234',
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 7,
      },
      {
        employeeNo: 'EMP45678901234',
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 8,
      },
      {
        employeeNo: 'EMP45678901234',
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 9,
      },
      {
        employeeNo: 'EMP45678901234',
        name: 'John Doe',
        jobPostion: 'Junior BA',
        isActiveStatus: true,
        id: 10,
      },
    ],
    page: parseInt(page),
    limit: 10,
    total: 56,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/payroll-run/tax-rule', (req, res) => {
  const { page } = req.query;
  const data = {
    data: [
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 1,
      },
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 2,
      },
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 3,
      },
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 4,
      },
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 5,
      },
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 6,
      },
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 7,
      },
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 8,
      },
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 9,
      },
      {
        unit: 'Company A',
        payGroupCode: 'PAY-2022000001',
        payCycle: 'Monthly',
        status: false,
        description: 'Main Cycle pay group for 2021',
        id: 10,
      },
    ],
    page: parseInt(page),
    limit: 10,
    total: 56,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
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
  const { payPeriodId } = req.body;
  return response.NewHttpOK(
    res,
    {
      payPeriodId: payPeriodId,
    },
    '',
    'SUCCESS'
  );
});

router.get("/payroll-run/payroll-run", (req, res) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + ' ' + dd + ' ' + yyyy;
  const { page } = req.query;
  const data = {
    data:[
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'LOCKED',
      runDate: today,
      id: 1,
    },
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'DRAFT',
      runDate: today,
      id: 2,
    },
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'RUNNING',
      runDate: today,
      id: 3,
    },
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'CLOSED',
      runDate: today,
      id: 4,
    },
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'LOCKED',
      runDate: today,
      id: 5,
    },
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'LOCKED',
      runDate: today,
      id: 6,
    },
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'LOCKED',
      runDate: today,
      id: 7,
    },
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'LOCKED',
      runDate: today,
      id: 8,
    },
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'LOCKED',
      runDate: today,
      id: 9,
    },
    {
      periodName: 'November 2021',
      payCycleName: 'Monthly',
      cutoffDateFrom: today,
      cutoffDateTo: today,
      paymentDate: today,
      statusName: 'LOCKED',
      runDate: today,
      id: 10,
    },
  ],
  page : parseInt(page),
  limit : 10,
  total : 32
  };
  return response.NewHttpOK(res, data, "", "SUCCESS");
});

router.get("/testing", (req, res) => {
  return response.NewHttpOK(res, "success", "", "SUCCESS");
});

router.post('/pay-group', (req, res) => {
  const { paygroupCode } = req.body;
  if (paygroupCode == 'inikodebakal') {
    const data = {
      message: 'Pay period not found',
      errorCode: 'USERRESETPASSWORD/NOT-FOUND',
      parameter: {
        User: null,
      },
    };
    return response.NewHttpRecordNotFound(res, data, '', 'Error');
  }
  return response.NewHttpOK(
    res,
    'success',
    '',
    'SUCCESS'
  );
});

module.exports = router;
