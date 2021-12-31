const statusCode  = {
	StatusOK                   : 200, // RFC 7231, 6.3.1
	StatusCreated              : 201, // RFC 7231, 6.3.2
	StatusAccepted             : 202, // RFC 7231, 6.3.3

	StatusBadRequest                   : 400, // RFC 7231, 6.5.1
	StatusUnauthorized                 : 401, // RFC 7235, 3.1
	StatusForbidden                    : 403, // RFC 7231, 6.5.3
	StatusNotFound                     : 404, // RFC 7231, 6.5.4
	StatusMethodNotAllowed             : 405, // RFC 7231, 6.5.5
	StatusConflict                     : 409, // RFC 7231, 6.5.8
	StatusGone                         : 410, // RFC 7231, 6.5.9
	StatusLengthRequired               : 411, // RFC 7231, 6.5.10

	StatusInternalServerError           : 500, // RFC 7231, 6.6.1
	StatusNotImplemented                : 501, // RFC 7231, 6.6.2
	StatusBadGateway                    : 502, // RFC 7231, 6.6.3
	StatusServiceUnavailable            : 503, // RFC 7231, 6.6.4
}

exports.NewHttpOK = (res,body = [],message,flag = "") => {
  return res.status(statusCode.StatusOK).json({
    ...body,
    code: statusCode.StatusOK,
    message,
    flag
  });
}

exports.NewHttpNOK = (res,body = [],message,flag = "") => {
  return res.status(statusCode.StatusBadRequest).json({
    ...body,
    code: statusCode.StatusBadRequest,
    message,
    flag
  });
}

exports.NewHttpServerError = (res,body = [],message,flag = "") => {
  return res.status(statusCode.StatusInternalServerError).json({
    ...body,
    code: statusCode.StatusInternalServerError,
    message,
    flag
  });
}

exports.NewHttpDuplicate = (res,body = [], message, flag = "") => {
  return res.status(statusCode.StatusConflict).json({
    ...body,
    code: statusCode.StatusConflict,
    message,
    flag
  });
}

exports.NewHttpRecordNotFound = (res,body = [],message, flag = "") => {
  return res.status(statusCode.StatusNotFound).json({
    ...body,
    code: statusCode.StatusNotFound,
    message,
    flag
  });
}

exports.NewHttpUnauthorized = (res,body = [],message, flag = "") => {
  return res.status(statusCode.StatusUnauthorized).json({
    ...body,
    code: statusCode.StatusUnauthorized,
    message,
    flag
  });
}

exports.NewHttpMethodNotAllowd = (res,body = [],message, flag = "") => {
  return res.status(statusCode.StatusMethodNotAllowed).json({
    ...body,
    code: statusCode.StatusMethodNotAllowed,
    message,
    flag
  });
}