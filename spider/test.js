var $ = require("./jq").jq();

$.get("ttp://query.sse.com.cn/infodisplay/showTradePublicFile.do?jsonCallBack=jsonpCallback42610&isPagination=false&dateTx=2016-08-19&_=1471695800448",
	"gbk", function (html) {

    console.log(html);
});
