const fs = require('fs');
const basePath = "root";

async function createFolder (path){
if(fs.existsSync(basePath+path)) throw "Folder exists";
    fs.mkdirSync (basePath+path)  
}

async function getAllFilesInThisFolder (path){
    if(!fs.existsSync(basePath+path)) throw "Folder not exists"
        fs.readdirSync (basePath+path)  
}

async function moveFolderToNewLoctionOrChangeHisName (oldPath, newPath){
    if(!fs.existsSync(basePath+oldPath)) throw "Folder not exists"
        fs.renameSync (basePath+oldPath, basePath+newPath)  
}

async function deleteFolder (path){
    if(!fs.existsSync(basePath+path)) throw "Folder not exists"
    //מחזיר שגיאה אם התיקיה לא ריקה
        fs.rmdirSync (basePath+path)  
}






//renameFolder()


module.exports = {createFolder,}