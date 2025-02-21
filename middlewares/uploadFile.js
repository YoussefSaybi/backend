const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/files"); // Correction de "punlic" en "public"
    },
    filename: function (req, file, cb) {
        const uploadPath = 'public/files'; // Correction de "punlic" en "public"
        const originalName = file.originalname; // Correction de file.originalname
        const fileExtension = path.extname(originalName);
        let fileName = originalName;
        let fileIndex = 1;

        while (fs.existsSync(path.join(uploadPath, fileName))) {
            const baseName = path.basename(originalName, fileExtension);
            fileName = `${baseName}_${fileIndex}${fileExtension}`;
            fileIndex++;
        }

        cb(null, fileName);
    }
});

const uploadfile = multer({ storage: storage });
module.exports = uploadfile;
