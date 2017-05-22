const mongoose = require('mongoose');//引入mongoose库
mongoose.connect('mongodb://localhost:27017/mywebserver');//本地

exports.mongoose = mongoose;//导出mongoose对象

//配置需要登陆认证的访问路径
exports.needLoginUrlRegs = [
    /^(\/)+iv1(\/)+profile/,

];
