const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/files/:filename", (req, res) => {
    const filePath = path.join(__dirname, 'files', req.params.filename);
    res.sendFile(filePath);
});
module.exports=router;