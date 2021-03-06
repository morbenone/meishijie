import Mock from 'mockjs';
const Random = Mock.Random;
Mock.mock('/getUser',{
    'data|3':[{
        'name':Random.cname(),
        'age':Random.natural(22,48),
        'date':Random.date('yyyy-MM-dd'),
        'address':Random.county(true)
    }]
})
Mock.mock('/getLogin',{
    "error_code":0,
    "data":[{
        "id":'1',
        "usertitle":"卢晓波",
        "username":'luxiaobo',
        "password":"123456789",
        "token":'648587841957819193',
        "regoName":'',
        "regoPaw":"",
        }]
    }
)
Mock.mock('/getRego',{
    "error_code":0,
    "data":[{
        "regoName":Random.regoName,
        "regoPaw":Random.regoPaw,
        }]
    }
)
