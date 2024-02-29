const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../upload/companies'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, 'img' + '-' + uniqueSuffix);
  }
});

const fileFilter = (req, file, cb) => {
  const extname = path.extname(file.originalname).toLowerCase();
  if (extname !== '.jpg' && extname !== '.jpeg' && extname !== '.png' && extname !== '.gif') {
    req.fileInvalid = true;
    return cb(null, false);
  }
  cb(null, true);
};


module.exports = multer({ storage: storage, fileFilter: fileFilter });