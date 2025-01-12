const sendError = require('./assets/errorController');

exports.healthCheck = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        env: process.env.NODE_ENV,
        test_env: process.env.TEST_ENV,
        message: 'Server is running',
        email: {
            port: process.env.GMAIL_PORT,
            host: process.env.HOST
        }
      }
    });
  } catch(err) {
    sendError(err, 400, req, res);
  }
};