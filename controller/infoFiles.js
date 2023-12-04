const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './filesave')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

const infoFiles = async (req, res,next) => {
    if (req.file) {
        let name = req.file.originalname;
        let size = Math.round(req.file.size/1024) +"KB";
        let arr = name.split(".");
        let extension = arr[1];
        res.status(200).json({fileName: name,size: size,extension: extension});
        next();
    }else{
    res.status(422).json({error: 'Please select a file'});
    }

};
module.exports = {infoFiles,upload};