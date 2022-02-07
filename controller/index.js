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

router.get('/payroll/dropdown/pay-period', (req, res) => {
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

router.post('/payroll/payroll-run', (req, res) => {
  const { payPeriodId } = req.body;
  return response.NewHttpOK(
    res,
    {
      payrollRunId: 'aa-bb-cc',
    },
    '',
    'SUCCESS'
  );
});

router.post('/payroll/payroll-run/:id/proceed-to-lock', (req, res) => {
  const { id } = req.params;
  return response.NewHttpOK(res, { id }, '', 'SUCCESS');
});

router.post('/payroll/payroll-run/:id/close-payroll', (req, res) => {
  const { id } = req.params;
  return response.NewHttpOK(res, { id }, '', 'SUCCESS');
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
        id: '0dbba3af-a8df-466e-13d3-08d9e17d2ab7',
        period: 'PG-000000001-M1M032021',
        payCycleName: 'Monthly',
        cutOffDateFrom: '2021-03-01',
        cutOffDateTo: '2021-03-31',
        runDate: '2022-01-27',
        statusName: 'DRAFT',
      },
      {
        id: '2eeaafa9-6c52-4a0e-13d2-08d9e17d2ab7',
        period: 'PG-000000001-M1M022021',
        payCycleName: 'Monthly',
        cutOffDateFrom: '2021-02-01',
        cutOffDateTo: '2021-02-28',
        runDate: '2022-01-27',
        statusName: 'DRAFT',
      },
      {
        id: 'a5bfde19-ba3a-4a0a-13d1-08d9e17d2ab7',
        period: 'PG-000000001-M1M012021',
        payCycleName: 'Monthly',
        cutOffDateFrom: '2021-01-01',
        cutOffDateTo: '2021-01-31',
        runDate: '2022-01-27',
        statusName: 'DRAFT',
      },
    ],
    page: parseInt(page),
    limit: 10,
    total: 2,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/payroll/rounding-rule', (req, res) => {
  const { page } = req.query;
  const data = {
    data: [
      {
        policyName: 'policyName for thp',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
        isActiveStatus: false,
        id: 'aa-bb-cc-dd',
      },
      {
        policyName: 'policyName for thx',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
        isActiveStatus: false,
        id: 'aa-bb-cc-ee',
      },
      {
        policyName: 'policyName for tax',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
        isActiveStatus: false,
        id: 'aa-bb-cc-zz',
      },
      {
        policyName: 'policyName for tax-2',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
        isActiveStatus: false,
        id: 'aa-bb-cc-aa',
      },
      {
        policyName: 'policyName for tax-3',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
        isActiveStatus: false,
        id: 'aa-bb-cc-bb',
      },
      {
        policyName: 'policyName for tax-4',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
        isActiveStatus: false,
        id: 'aa-bb-cc-cc',
      },
      {
        policyName: 'policyName for tax-5',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
        isActiveStatus: false,
        id: 'aa-bb-cc-vv',
      },
      {
        policyName: 'policyName for tax-6',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
        isActiveStatus: false,
        id: 'aa-bb-cc-xx',
      },
      {
        policyName: 'policyName for tax-7',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
        isActiveStatus: false,
        id: 'aa-bb-cc-yy',
      },
      {
        policyName: 'policyName for tax-8',
        remarks: 'Untuk Pembulatan THP minumum ke seribu',
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

router.get('/payroll/rounding-rule/:id', (req, res) => {
  const { id } = req.params;
  const data = {
    policyName: 'THP Rounding',
    applyPolicyTo: 'Take Home Pay',
    isActiveStatus: true,
    remarks: 'Untuk Pembulatan THP minumum ke seribu',
    roundingValue: [
      {
        id: 'aa-bb-cc',
        valueFrom: 1,
        valueTo: 499,
        roundingTo: 1000,
      },
      {
        id: 'aa-bb-dd',
        valueFrom: 500,
        valueTo: 999,
        roundingTo: 1000,
      },
    ],
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/testing', (req, res) => {
  return response.NewHttpOK(res, 'success', '', 'SUCCESS');
});

router.post('/payroll/pay-group', (req, res) => {
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

router.get('/payroll/payroll-run/:id', (req, res) => {
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
        periodName: 'PG-000000001-M1M012021',
        payCycleName: 'Monthly',
        cutOffDateFrom: '2021-01-01',
        cutOffDateTo: '2021-01-31',
        paymentDate: '2021-01-31',
        statusName: 'DRAFT',
      },
      '',
      'SUCCESS'
    );
  } else if (id == 'aa-bb-cc-ee') {
    return response.NewHttpOK(
      res,
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'CLOSED',
        id: id,
      },
      '',
      'SUCCESS'
    );
  } else if (id === 'aa-bb-cc-rr') {
    const data = {
      message: 'INTERNAL SERVER ERROR',
      errorCode: 'INTERNAL SERVER ERROR',
      parameter: null,
    };
    return response.NewHttpOK(res, data, '', 'SUCCESS');
  } else {
    return response.NewHttpOK(
      res,
      {
        periodName: 'November 2021',
        payCycleName: 'Monthly',
        cutoffDateFrom: today,
        cutoffDateTo: today,
        paymentDate: today,
        statusName: 'DRAFT',
        id: id,
      },
      '',
      'SUCCESS'
    );
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

router.get('/payroll/pay-group', (req, res) => {
  const { page } = req.query;
  const data = [];
  for (let index = 0; index < 10; index++) {
    data.push({
      id: index + 1,
      paygroupCode: 'code paygroup loh ini',
      payCycleName: 'monthly',
      isActiveStatus: true,
      description: 'ini description',
    });
  }
  const dataTemp = {
    data: data,
    page: parseInt(page),
    limit: 10,
    total: 19,
  };
  return response.NewHttpOK(res, dataTemp, '', 'SUCCESS');
});

router.get('/employment-type/:id', (req, res) => {
  const { id } = req.params;
  const data = {
    unitName: 'Unit-1',
    code: '00-111',
    incomeTaxRuleId: 1,
    description: 'test description',
    maximumBaseSalary: 100000,
    id,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/payroll/tax-rule', (req, res) => {
  const { page } = req.query;
  const data = {
    data: [
      {
        id: 1,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 1 -${page}`,
      },
      {
        id: 2,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 2 -${page}`,
      },
      {
        id: 3,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 3 -${page}`,
      },
      {
        id: 4,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 4 -${page}`,
      },
      {
        id: 5,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 5 -${page}`,
      },
      {
        id: 6,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 6 -${page}`,
      },
      {
        id: 7,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 7 -${page}`,
      },
      {
        id: 8,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 8 -${page}`,
      },
      {
        id: 9,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 9 -${page}`,
      },
      {
        id: 10,
        effectiveDateFrom: '2022-01-01',
        effectiveDateUntil: '2022-01-01',
        status: true,
        description: `description 10 -${page}`,
      },
    ],
    page: parseInt(page),
    limit: 10,
    total: 56,
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/payroll/tax-rule/:id', (req, res) => {
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
        takeHomeSalary: 90000,
      },
      {
        id: 'aa-bb-bb',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000,
      },
      {
        id: 'aa-bb-cc',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000,
      },
      {
        id: 'aa-bb-dd',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000,
      },
      {
        id: 'aa-bb-ee',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000,
      },
      {
        id: 'aa-bb-ff',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000,
      },
      {
        id: 'aa-bb-gg',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000,
      },
      {
        id: 'aa-bb-hh',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000,
      },
      {
        id: 'aa-bb-ii',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000,
      },
      {
        id: 'aa-bb-jj',
        employeeName: 'Surya Paloh',
        employeeNo: '1',
        salaryBeforeTax: 100000,
        tax: 1000,
        takeHomeSalary: 90000,
      },
    ],
    total: 34,
    limit: 10,
    page: parseInt(page),
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

router.get('/payroll/pay-group/:id', (req, res) => {
  const { id } = req.params;
  const data = {
    id: 'd5bd81d3-c45e-4c89-88e9-a4414ccc9afa',
    paygroupCode: 'PAY-202200000001',
    payCycleCode: 'MONTHLY',
    cycleTypeCode: 'MAIN_CYCLE',
    calculationMethodCode: 'GROSS',
    isActiveStatus: true,
    description: 'Pay Group for 2022',
    payPeriod: {
      startMonth: 1,
      startYear: 2022,
      endMonth: 12,
      endYear: 2022,
    },
    periodList: [
      {
        id: 'cc9f216d-775e-4672-8e1c-0ed84e6f3229',
        date: '2022-03-01',
        periodDesc: 'PAY-202200000000103',
        cutOffDateFrom: '2022-03-01',
        cutOffDateTo: '2022-03-31',
        payDate: '2022-03-31',
      },
      {
        id: '66bc1c69-2622-4a03-9196-744ecafc4a10',
        date: '2022-01-01',
        periodDesc: 'PAY-202200000000101',
        cutOffDateFrom: '2022-01-01',
        cutOffDateTo: '2022-01-31',
        payDate: '2022-01-31',
      },
      {
        id: '3ae4689c-34df-4e96-a45e-fe9613876a1e',
        date: '2022-02-01',
        periodDesc: 'PAY-202200000000102',
        cutOffDateFrom: '2022-02-01',
        cutOffDateTo: '2022-02-28',
        payDate: '2022-02-28',
      },
    ],
  };
  return response.NewHttpOK(res, data, '', 'SUCCESS');
});

module.exports = router;
