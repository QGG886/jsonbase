var jsonDB = require('@syamdanda/json-base');
const fs = require('fs').promises; //node 10+ 版本
// const fs = require('mz/fs')  // 低于 node 10.0.0 版本
const path = require('path');

function transFunc(options) {
    // let options = jointOptions();
    switch (options.func) {
        // 创建库
        case "createDatabase":
            return createDatabase(options);
            break;
        // 删除库
        case "dropDatabase":
            dropDatabase(options);
            break;
        // 创建表
        case "createTable":
            createTable(options);
            break;
        // 删除表
        case "dropTable":
            dropTable(options);
            break;
        // 单条添加数据
        case "insertRecord":
            insertRecord(options);
            break;
        // 批量添加数据
        case "batchInsert":
            batchInsert(options);
            break;
        // 根据ID获取数据
        case "getRecordById":
            getRecordById(options);
            break;
        // 根据键值对获取数据
        case "getRecordByKeyValue":
            getRecordByKeyValue(options);
            break;
        // 根据多条键值对获取数据
        case "getRecordByObject":
            getRecordByObject(options);
            break;
        // 不太懂
        case "getRecordsBySearch":
            getRecordsBySearch(options);
            break;
        // 获取所有数据
        case "getAllRecords":
            getAllRecords(options);
            break;
        // 根据ID删除数据
        case "deleteRecordById":
            deleteRecordById(options);
            break;
        // 根据ID更新数据
        case "updateRecordById":
            updateRecordById(options);
            break;
        // 根据键值对更新数据
        case "updateRecordByKeyValue":
            updateRecordByKeyValue(options);
            break;

    }
}

//创建数据库
function createDatabase(options) {
    jsonDB.createDatabase(options, function (response) {
        console.log(JSON.stringify(response));
        return (JSON.stringify(response));
    });
}

// 删除数据库，目前不能用
// function dropDatabase(optipns) {
//     jsonDB.dropDatabase(options, function (response) {
//         console.log(JSON.stringify(response));
//     });
// }

async function dropDatabase(options) {
    let filePath = options["name"];
    let stat = await fs.stat(filePath)
    if (stat.isFile()) {
        await fs.unlink(filePath)
    } else {
        let dirs = await fs.readdir(filePath)
        dirs = dirs.map(dir => dropDatabase(path.join(filePath, dir)))
        await Promise.all(dirs)
        await fs.rmdir(filePath)
    }
}
// 创建表
function createTable(options) {
    jsonDB.createTable(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// 删除表，目前不能用
function dropTable(options) {
    jsonDB.dropTable(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}

// 插入数据
function insertRecord(options) {
    jsonDB.insertRecord(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// 批量插入
function batchInsert(options) {
    jsonDB.batchInsert(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// 根据记录ID获取记录
function getRecordById(options) {
    jsonDB.getRecordById(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// 根据键与键值获取记录
function getRecordByKeyValue(options) {
    jsonDB.getRecordByKeyValue(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// 根据键与键值获取记录，另一种写法
function getRecordByObject(options) {
    jsonDB.getRecordByObject(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// ？？？
function getRecordsBySearch(options) {
    jsonDB.getRecordsBySearch(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// 获取所有记录
function getAllRecords(options) {
    jsonDB.getAllRecords(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// 根据记录ID删除记录
function deleteRecordById(options) {
    jsonDB.deleteRecordById(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// 根据记录ID更新记录
function updateRecordById(options) {
    jsonDB.updateRecordById(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}
// 根据键与键值更新记录
function updateRecordByKeyValue(options) {
    jsonDB.updateRecordByKeyValue(options, function (response) {
        // console.log(JSON.stringify(response));
        return JSON.stringify(response);
    });
}

module.exports = transFunc;