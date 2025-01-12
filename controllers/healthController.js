const sendError = require('./assets/errorController');

exports.healthCheck = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        message: 'Server is running'
      }
    });
  } catch(err) {
    sendError(err, 400, req, res);
  }
};