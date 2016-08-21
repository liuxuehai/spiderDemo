module.exports =m1;
function m1(c){
  this._c=c;
}
m1.push=function(c,address,code,select,stamp) {
  var url=address+"/"+code+"?select="+select+"&_="+stamp;
  console.log("-------请求地址------"+url);
  // Queue URLs with custom callbacks & parameters
  c.queue([{
      uri: url,
      jQuery: true,

      // The global callback won't be called
      callback: function (error, result) {
           console.log("-------请求地址结果------");
           var str = JSON.parse(result.body);
           console.log(str.code);
      }
  }]);
}
