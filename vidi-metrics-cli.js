var Emitter = require("vidi-metrics-emitter")
var jsonic = require("jsonic")
var isjson = require("is-json")
var minimist = require("minimist")
var inp = minimist(process.argv.slice(2))._[0]
if (isjson(inp)){
  var emit = Emitter()
  inp = jsonic.stringify(inp)

  if (inp && inp !== ''){
    var input = function(inp) {
    emit.emit(jsonic(inp))
    }
    input(inp)
    setTimeout(function(){
     process.exit()
    }, 300)
  }
}
else {
  try {
    var json = jsonic(inp)
    var emit = Emitter()
    emit.emit(json)
    setTimeout(function(){
     process.exit()
    }, 300)
  }
  catch (e) {
    console.log(e)
  }
}
