fetch("https://www.el-tiempo.net/api/json/v2/home")
.then(res => console.log(res.json()))