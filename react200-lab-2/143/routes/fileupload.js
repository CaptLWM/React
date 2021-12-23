const multer = require("multer");
const moment = require("moment"); //날짜.표시하기위한 함수

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      var type = req.query.type;
      cb(null, type);
    } catch (error) {
      console.log(error);
    }
  },
  filename: function (req, file, cb) {
    cb(null, moment().format("YYYYMMDDHHmmss") + "_" + file.originalname);
  }, //파일명설정
});

const upload = multer({ storage: storage }).single("file");
module.exports = upload;
