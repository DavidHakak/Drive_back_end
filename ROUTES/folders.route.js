const express = require("express");

const router = express.Router();

const fs = require("fs");

const foldersBL = require("../BL/folders.BL")

router.post('/createFolder', async (req, res) => {
    try {
      foldersBL.createFolder(req.body.path)
    } catch (error) {
        console.log("error : " + error);
    }
});

router.put('/renameFolder', async (req, res) => {
    console.log(req.body.oldName);
    try {
        fs
            .mkdir(req.body.oldName,req.body.newName,(err) => {
                if (err) {
                    console.log("error: " + err);
                } else {
                    res.status(200).send("done")
                }
            })
    } catch (error) {
        console.log("error : " + error);
    }
});

router.get('/readFile', async (req, res) => {

    try {
        fs
            .readFile(req.body.fileName, { entries: "utf8" }, (err, data) => {
                if (err) {
                    console.log("error: " + err);
                } else {
                    res.status(200).send(data)
                }
            })
    } catch (error) {

        console.log("error : " + error);
    }
});

router.put('/updateFile', async (req, res) => {
    try {
        fs
            .appendFile(req.body.fileName, req.body.contnt, (err, data) => {
                if (err) {
                    console.log("error: " + err);
                } else {
                    res.status(200).send("done")
                }
            })

    } catch (error) {
        console.log("error : " + error);
    }
});

router.delete('/deleteFile', async (req, res) => {
    try {
        fs
            .unlink(req.body.fileName, (err, data) => {
                if (err) {
                    console.log("error: " + err);
                } else {
                    res.status(200).send("done")
                }
            })
    } catch (error) {
        console.log("error : " + error);
    }
});

module.exports = router;