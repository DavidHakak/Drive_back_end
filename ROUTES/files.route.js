const express = require("express");
require("mongodb")
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.post('/createFile', async (req, res) => {
    const pathObj = path.parse(__dirname)
    console.log(pathObj);
    try {
        fs
            .writeFile(path.join(__dirname), (err, data) => {
                if (err) {
                    console.log("error: " + err);
                } else {
                    res.status(200).send(data)
                };
            });
    } catch (error) {
        res.status(400)
        console.log("error : " + error);
    }
});

router.post('/uploadFile', async (req, res) => {

    try {
        console.log(req.body);
        // fs
        //     .readFile(req.body.fileName, { entries: "utf8" }, (err, data) => {
        //         if (err) {
        //             console.log("error: " + err);
        //         } else {
        //             res.status(200).send(data)
        //         }
        //     })
        res.send(req.body)
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

router.put('/renameFile', async (req, res) => {
    try {
        fs.
            rename(req.body.fileName,req.body.newName, (err, data) => {
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