const express = require("express");
const router = express.Router();
const response = require("../util/response");

//Test Endpoint
router.post("/UserAuth/login", (req, res) => {
  const { userName, password } = req.body;

  if (password === "test2" && userName === "email@test.com") {
    const data = {
      message: "Username or password is incorrect",
      errorCode: "LOGIN/PASSWORD-IS-INCORRECT",
      parameter: {
        userName: "string",
        password: "string",
      },
    };
    return response.NewHttpRecordNotFound(res, data, "", "Error");
  }

  if (password === "test1" && userName === "email@test.com") {
    const data = {
      message: "INTERNAL SERVER ERROR",
      errorCode: "INTERNAL SERVER ERROR",
      parameter: null,
    };
    return response.NewHttpServerError(res, data, "", "Error");
  }

  if (password !== "pwd" || userName !== "email@test.com") {
    const data = {
      message: [
        "The UserName field is required.",
        "The field UserName must be a string or array type with a minimum length of '6'."
      ],
      errorCode: "VALIDATION-ERROR",
      parameter: {
        Password: [
          "The Password field is required.",
          "The field Password must be a string or array type with a minimum length of '10'."
        ],
        UserName: [
          "The UserName field is required.",
          "The field UserName must be a string or array type with a minimum length of '6'."
        ]
      }
    }
    return response.NewHttpNOK(res, data, "", "Error");
  }

  if (password === "pwd" && userName === "email@test.com") {
    const data = {
      userName: "email",
      exp: 3232,
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImVtYWlsIiwibmFtZSI6Ill1ZGlzdGEiLCJleHAiOjE2NDA3ODE5OTZ9.nEhLOP1ahhpOLs7yQRxYXeIYJB4-KIpcYU0nlNrDnOA",
      refreshToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImVtYWlsIiwibmFtZSI6Ill1ZGlzdGEiLCJleHAiOjE2NDA3ODE5OTZ9.nEhLOP1ahhpOLs7yQRxYXeIYJB4-KIpcYU0nlNrDnOA",
    };
    return response.NewHttpOK(res, data, "", "SUCCESS");
  }
});

router.put("/UserAuth/emailrequest", (req, res) => {
  const {email} = req.body;

  if(email == '1@mail.com') {
    const data = {
      message: "Email Not Found",
      errorCode: "USERRESETPASSWORD/NOT-FOUND",
      parameter: {
        User: null
      }
    }
    return response.NewHttpRecordNotFound(res, data, "", "Error");
  }

  if(email == '2@mail.com') {
    const data = {
      message: "INTERNAL SERVER ERROR",
      errorCode: "INTERNAL SERVER ERROR",
      parameter: null,
    };
    return response.NewHttpServerError(res, data, "", "Error");
  }

  if(email == '3@mail.com') {
    const data = {
      message: [ "The Email field is required."],
      errorCode: "VALIDATION-ERROR",
      parameter: {
        Email: [
          "The Email field is required."
        ]
      }
    }
    return response.NewHttpNOK(res, data, "", "Error");
  }

  if(email == '4@mail.com') {
    const data = {
      message: [
        "The field Email must be a string or array type with a maximum length of '50'."
      ],
      errorCode: "VALIDATION-ERROR",
      parameter: {
        Email: [
          "The field Email must be a string or array type with a maximum length of '50'."
        ]
      }
    }
    return response.NewHttpNOK(res, data, "", "Error");
  }

  if(email == '5@mail.com') {
    const data = {};
    return response.NewHttpOK(res, data, "", "SUCCESS");
  }
});

router.put("/userAuth/resetpassword", (req, res) => {
  const { token, newPassword, verifyNewPassword } = req.body;
  console.log(newPassword);
  if (newPassword === '1testinG123*') {
    const data = {
      message: "Token Not Found",
      errorCode: "USER-RESET-PASSWORD/NOT-FOUND",
      parameter: {
        Token: "string",
      },
    };
    return response.NewHttpRecordNotFound(res, data, "", "Error");
  }

  if (newPassword === '2testinG123*') {
    const data = {
      message: "INTERNAL SERVER ERROR",
      errorCode: "INTERNAL SERVER ERROR",
      parameter: null,
    };
    return response.NewHttpServerError(res, data, "", "Error");
  }

  if (newPassword === '3testinG123*') {
    const data = {
      message: [
        "The VerifyNewPassword field is required.",
        "The field VerifyNewPassword must be a string or array type with a minimum length of '10'."
      ],
      errorCode: "VALIDATION-ERROR",
      parameter: {
        Token: [
          "The Token field is required."
        ],
        NewPassword: [
          "The NewPassword field is required.",
          "The field NewPassword must be a string or array type with a minimum length of '10'."
        ],
        VerifyNewPassword: [
          "The VerifyNewPassword field is required.",
          "The field VerifyNewPassword must be a string or array type with a minimum length of '10'."
        ]
      }
    }
    return response.NewHttpNOK(res, data, "", "Error");
  }

  if (newPassword === '4testinG123*') {
    const data = {
      message: ["Passwords do not match"],
      errorCode: "VALIDATION-ERROR",
      parameter: {
        VerifyNewPassword: ["Passwords do not match"],
      },
    };
    return response.NewHttpNOK(res, data, "", "Error");
  }

  if (newPassword === '5testinG123*') {
    const data = {};
    return response.NewHttpOK(res, data, "", "SUCCESS");
  }
});

router.get("/testing", (req, res) => {
  return response.NewHttpOK(res, "success", "", "SUCCESS");
});

module.exports = router;
