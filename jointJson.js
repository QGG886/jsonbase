
function jointJson(options, obj) {
    for (var key in obj) {
        // console.log(key);
        options[key] = obj[key];
    }
    return options;
}

module.exports = jointJson;