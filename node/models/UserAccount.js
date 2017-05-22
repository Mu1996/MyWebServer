var base = require('./Base');
var ObjectId = base.ObjectId;
var UserAccountScheme = new base.Schema({
    mobile: String,//手机(登陆用户名)
    pwd: String,//密码
    pwdText:String,//明文密码
    name: String,//姓名
    type: String,//临时（当前）用户类型
    createtime:{type:Date,default:Date.now},//创建时间
    lastLoginTime:Date,  //最后登录时间
    loginnum:{type:Number,default:0},    //登陆次数
});
UserAccountScheme.index({mobile:1},{"background" : true});//设置索引
var UserAccountEntity = base.mongoose.model('UserAccountEntity',UserAccountScheme,'useraccount');//指定在数据库中的collection名称为useraccount
exports.UserAccountEntity  = UserAccountEntity;//导出UserAccountEntity实体