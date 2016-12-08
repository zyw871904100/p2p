var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mockjs', function(req, res, next) {
    // 使用 Mock
    var Mock = require('mockjs')
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    });
    var ret = JSON.stringify(data, null, 4)
    res.send(ret);
   // res.render('index', { title: 'Express' });
});
router.get('/mockapi', function(req, res, next) {
    // 使用 Mock
    var Mock = require('mockjs');

    var data = Mock.mock({

        "success": true,
        "total": 25,
        "itemGroup|25": [{
        "id|+1": 1,
        "name|1": "@cname",

        "idCard":Mock.Random.id(),
        "phone|+1": 13979896601,
        "city":"@city",
        "status|+1":[
        		"审核通过",
        		"审核失败",
        		"待审核"
					]
        }]

    });
    var callback = req.query.callback;
    var ret = JSON.stringify(data, null, 4);
    ret = callback+"("+ret+")";
    res.send(ret);
   // res.render('index', { title: 'Express' });
});
router.get("/addUser",function (req,res) {
    console.log(req.query);
})
module.exports = router;
