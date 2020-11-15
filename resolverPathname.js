
let pathname = "/createDatabase/Mydatabase?可选参数1=值1&可选参数2=值2"//  /数据库名称/操作/可选参数
// /createTable/Mydatabase?tablename=users&recorID=3

// 默认生成全局空options
let options = {};

// 解析pathname，分割“/”，分配前两个必须参数（动作，数据库名称），并将可选参数丢给可选参数处理器
function ResolverPathame(pathname) {
    options = {};
    // 获取“/”位置
    let gap = GetGap(pathname);
    // 声明数组只有三个元素，【动作，数据库名称，可选参数】
    let parameters = [];
    for (let i = 0; i < (gap.length - 1); i++) {
        parameters.push(pathname.substring(gap[i] + 1, gap[i + 1]));
    }
    options["func"] = parameters[0];

    if (parameters.length == 3)
        options["database"] = parameters[1];
    else if (parameters.length == 2)
        options["name"] = parameters[1];

    if (parameters.length == 3) {
        GetOptionalParameters(parameters[2])
    }
    return options;
}

//获取“/"位置
function GetGap(pathname) {
    let gap = [];
    let i = 0;
    while (i < pathname.length) {
        if (pathname[i] == '/' || pathname[i] == "?") {
            gap.push(i);
        }
        i++;
    }
    gap.push(pathname.length);
    // 返回gap数组
    return gap;
}
// 分割可选参数，执行解析单条可选参数
function GetOptionalParameters(optPar) {
    //optPar = 'key=name&value=zeq'
    let gap = [];
    // let optPars = {};
    gap.push(0);
    let i = 0;
    while (i < optPar.length) {
        if (optPar[i] == '&') {
            gap.push(i);
        }
        i++;
    }
    gap.push(optPar.length);
    // console.log(gap);
    for (let i = 0; i < gap.length - 1; i++) {
        if (i == 0) {
            ResolverOptionalParameters(optPar.substring(gap[i], gap[i + 1]));
        }
        else {
            ResolverOptionalParameters(optPar.substring(gap[i] + 1, gap[i + 1]));
        }
    }
}
// 解析单条可选参数，返回一条json
function ResolverOptionalParameters(parameter) {
    let gap;
    // let optPars = {};
    let i = 0;
    while (i < parameter.length) {
        if (parameter[i] == '=') {
            gap = i;
        }
        i++;
    }
    options[parameter.substring(0, gap)] = parameter.substring(gap + 1, parameter.length);
    // return optPars;
}

// console.log(options);

module.exports = ResolverPathame;

