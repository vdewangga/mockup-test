const express = require('express');
const router = express.Router();
const response = require('../util/response');
const moment = require('moment');

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

router.get('/payroll/payroll-run', (req, res) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + ' ' + dd + ' ' + yyyy;
  const { page } = req.query;
  const data = {
    data: [
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'LOCKED',
        runDate: today,
        id: 'aa-bb-cc-dd',
      },
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'DRAFT',
        runDate: today,
        id: 'aa-bb-cc-ee',
      },
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'RUNNING',
        runDate: today,
        id: 'aa-bb-cc-zz',
      },
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'CLOSED',
        runDate: today,
        id: 'aa-bb-cc-aa',
      },
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'LOCKED',
        runDate: today,
        id: 'aa-bb-cc-bb',
      },
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'LOCKED',
        runDate: today,
        id: 'aa-bb-cc-cc',
      },
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'LOCKED',
        runDate: today,
        id: 'aa-bb-cc-vv',
      },
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'LOCKED',
        runDate: today,
        id: 'aa-bb-cc-xx',
      },
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'LOCKED',
        runDate: today,
        id: 'aa-bb-cc-yy',
      },
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'LOCKED',
        runDate: today,
        id: 'aa-bb-cc-rr',
      },
    ],
    page: parseInt(page),
    limit: 10,
    total: 32,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});


router.get('/rounding-rule', (req, res) => {
  const { page } = req.query;
  const data = {
    data: [
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-dd',
      },
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-ee',
      },
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-zz',
      },
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-aa',
      },
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-bb',
      },
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-cc',
      },
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-vv',
      },
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-xx',
      },
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-yy',
      },
      {
        description: 'description for rounding rule',
        isActiveStatus: false,
        id: 'aa-bb-cc-rr',
      },
    ],
    page: parseInt(page),
    limit: 10,
    total: 32,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/testing', (req, res) => {
  return response.NewHttpOK(res, 'success', '', 'SUCCESS');
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
  return response.NewHttpOK(res, 'success', '', 'SUCCESS');
});

router.get('/payroll/payroll-run:id', (req, res) => {
  const { id } = req.params;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + ' ' + dd + ' ' + yyyy;
  if (id === 'aa-bb-cc-dd') {
    return response.NewHttpOK(
      res,
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'LOCKED',
        id: id,
      },
      '',
      'SUCCESS'
    );
  } else if (id == 'aa-bb-cc-ee') {
    return response.NewHttpOK(res, {
      "periodName": 'November 2021',
      "payCycleName": 'Monthly',
      "cutoffDateFrom": today,
      "cutoffDateTo": today,
      "paymentDate": today,
      "statusName": 'CLOSED',
      "id": id,
    }, "", "SUCCESS");
  } else if (id === 'aa-bb-cc-rr') {
    return response.NewHttpOK(res, {
      "periodName": 'November 2021',
      "payCycleName": 'Monthly',
      "cutoffDateFrom": today,
      "cutoffDateTo": today,
      "paymentDate": today,
      "statusName": 'DRAFT',
      "id": id,
    }, "", "SUCCESS");
  } else {
    const data = {
      message: 'INTERNAL SERVER ERROR',
      errorCode: 'INTERNAL SERVER ERROR',
      parameter: null,
    };
    return response.NewHttpOK(res, data, "", "SUCCESS");
  }
});

router.get('/employment-type', (req, res) => {
  const { page } = req.query;
  const data = {
    data: [
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe',
        id: 1,
      },
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe 2',
        id: 2,
      },
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe 3',
        id: 3,
      },
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe 4',
        id: 4,
      },
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe 5',
        id: 5,
      },
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe 6',
        id: 6,
      },
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe 7',
        id: 7,
      },
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe 8',
        id: 8,
      },
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe 9',
        id: 9,
      },
      {
        incomeTaxRuleName: `income tax rule name page-${page}`,
        description: 'John Doe 10',
        id: 10,
      },
    ],
    page: parseInt(page),
    limit: 10,
    total: 56,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/employment-type/:id', (req, res) => {
  const { id } = req.params;
  const data = {
    unitName: 'Unit-1',
    code: '00-111',
    incomeTaxRuleId: 1,
    description: 'test description',
    maximumBaseSalary: 100000,
    id
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/tax-rule', (req, res) => {
  const { page } = req.query;
  const data = {
    data: [
      {
        id: 1,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 1 -${page}`,
      },
      {
        id: 2,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 2 -${page}`,
      },
      {
        id: 3,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 3 -${page}`,
      },
      {
        id: 4,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 4 -${page}`,
      },
      {
        id: 5,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 5 -${page}`,
      },
      {
        id: 6,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 6 -${page}`,
      },
      {
        id: 7,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 7 -${page}`,
      },
      {
        id: 8,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 8 -${page}`,
      },
      {
        id: 9,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 9 -${page}`,
      },
      {
        id: 10,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: 'Active',
        description: `description 10 -${page}`,
      },
    ],
    page: parseInt(page),
    limit: 10,
    total: 56,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/tax-rule/:id', (req, res) => {
  const data = {
    id: 'aa-bb-cc',
    effectiveDateFrom: moment().format('DD MMMM YYYY'),
    effectiveDateUntil: moment().format('DD MMMM YYYY'),
    status: true,
    positionAllowancePerMonth: 600000,
    positionAllowancePerYear: 7200000,
    nationalityId: 1,
    description:
      'Income tax for Indonesian pegawai tetap, according to RUU HPR',
    remarks: 'remarsk for tax rule',
    incomeTaxTable: [
      {
        id: 'aa-bb-cc',
        minimumValue: 0,
        maximumValue: 50000000,
        nonNpwpAdditionalFine: 20,
        taxRate: 5,
      },
      {
        id: 'aa-bb-dd',
        minimumValue: 50000001,
        maximumValue: 200000000,
        nonNpwpAdditionalFine: 20,
        taxRate: 15,
      },
      {
        id: 'aa-bb-ee',
        minimumValue: 200000001,
        maximumValue: 500000000,
        nonNpwpAdditionalFine: 20,
        taxRate: 20,
      },
      {
        id: 'aa-bb-ff',
        minimumValue: 500000001,
        maximumValue: 0,
        nonNpwpAdditionalFine: 20,
        taxRate: 25,
      },
    ],
    ptkpTable: [
      {
        id: 'aa-bb-cc',
        type: 'Not Married Exeption Base',
        code: 'TK',
        ruleType: 'Exact',
        rulePercentage: null,
        valueOrCeiling: 54000000,
      },
      {
        id: 'aa-bb-dd',
        type: 'Occupational Exemption',
        code: 'K',
        ruleType: '',
        rulePercentage: 5,
        valueOrCeiling: 1000000,
      },
      {
        id: 'aa-bb-ee',
        type: 'Pension Exemption',
        code: 'K/I',
        ruleType: '',
        rulePercentage: 5,
        valueOrCeiling: 1000000,
      },
      {
        id: 'aa-bb-ff',
        type: 'Marries Exemption Base',
        code: '1',
        ruleType: 'Exact',
        rulePercentage: null,
        valueOrCeiling: 58000000,
      },
    ],
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/employees/:id', (req, res) => {
  const { id } = req.params;
  return response.NewHttpOK(
    res,
    {
      id: id,
      employeeNo: '88',
      name: 'aku laku',
      citizenship: { id: 1, name: 'indonesian' },
      identityNo: '123213',
      passportNo: '23233323',
      employmentDate: '2022-01-02',
      employmentType: { id: 1, name: 'Pegawai Tetap' },
      basicSalary: 50000,
      npwpNo: '12312323',
    },
    '',
    'SUCCESS'
  );
});

router.get('/payroll/payroll-run/:id/employees', (req, res) => {
  const { page } = req.query;
  const { id } = req.params;
  const data = {
    data: [
      {
        id: 'aa-bb-aa',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
      {
        id: 'aa-bb-bb',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
      {
        id: 'aa-bb-cc',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
      {
        id: 'aa-bb-dd',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
      {
        id: 'aa-bb-ee',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
      {
        id: 'aa-bb-ff',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
      {
        id: 'aa-bb-gg',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
      {
        id: 'aa-bb-hh',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
      {
        id: 'aa-bb-ii',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
      {
        id: 'aa-bb-jj',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000
      },
    ],
    total: 34,
    limit: 10,
    page: parseInt(page)
  }
  return response.NewHttpOK(res, data, '', 'SUCCESS');
})

router.get('/pay-group/:id', (req, res) => {
  const { id } = req.params;
  const data = {
    id: 'aa-bb-cc',
    unitId: 1,
    paygroupCode: 'PAY-202200000001',
    cycleTypeCode: 'MAIN_CYCLE',
    payCycleCode: 'MONTHLY',
    calculationMethodCode: 'NETT',
    isActiveStatus: true,
    description: 'Pay Group for 2022',
    payPeriod: {
      startMonth: 1,
      startYear: '2021',
      endMonth: 12,
      endYear: '2021',
    },
    periodList: [
      {
        id: 'aa-bb-aa',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      },
      {
        id: 'aa-bb-bb',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      },
      {
        id: 'aa-bb-cc',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      },
      {
        id: 'aa-bb-dd',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      },
      {
        id: 'aa-bb-ee',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      }, {
        id: 'aa-bb-ff',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      }
      , {
        id: 'aa-bb-aa',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      }
      , {
        id: 'aa-bb-gg',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      }, {
        id: 'aa-bb-hh',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      }, {
        id: 'aa-bb-ii',
        date: moment().format('MMMM YYYY'),
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: moment().format('DD/MM/YYYY'),
        cutOffDateTo: moment().format('DD/MM/YYYY'),
        payDate: moment().format('DD/MM/YYYY'),
      }
    ]
  }
  return response.NewHttpOK(res, data, '', 'SUCCESS');
})

module.exports = router;
