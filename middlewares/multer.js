const multer = require("multer");
// const path = require(`path`); <=reminder
//\\ بسم الله الرحمن الرحيم //\\
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "media");
    //path.join(__dirname, `../media`) <=reminder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
//
module.exports = upload;
