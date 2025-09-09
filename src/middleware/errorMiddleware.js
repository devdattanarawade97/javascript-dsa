// Custom Error Handler for routes that don't exist (404)
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // Pass the error to the next middleware (our general errorHandler)
};

// General Error Handler
const errorHandler = (err, req, res, next) => {
  // If status code is 200 (OK), it means it wasn't explicitly set by an error, so default to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    // In production, we don't want to leak stack traces
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };