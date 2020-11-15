# jsonbase
简单实现jsonbase 本地数据库

目前删除数据库方法不能使用

目前只能接收post请求

参数列表：
http://127.0.0.1:8888/必需参数1/必须参数2?可选参数1=值1&可选参数2=值2...

必须参数1：动作，
必须参数2：数据库名，
可选参数：
  表名，
  记录ID，
  key，
  value
  
需要提交记录时请携带json文件

动作参数值：
createDatabase,
dropDatabase,
createTable,
dropTable,
insertRecord,
batchInsert,
getRecordById,
getRecordByKeyValue,
getRecordByObject,
getRecordsBySearch,
getAllRecords,
deleteRecordById,
updateRecordById,
updateRecordByKeyValue

其余参数名
database,
tableName,
record(json文件),
records(json文件数组),
recordId,
key,
value,
obj,
flag,
recordObj

emmm 待我想想怎么写 在写这个
https://github.com/Devs-Garden/jsonbase
