var Emitter = require("vidi-metrics-emitter")
var jsonic = require("jsonic")
var isjson = require("is-json")
var minimist = require("minimist")
var input = minimist(process.argv.slice(2))._[0]

function emit(inp){
  if (isjson(inp)){
    var emit = Emitter()
    inp = jsonic.stringify(inp)

    if (inp && inp !== ''){
      var input = function(inp) {
      emit.emit(jsonic(inp))
      }
      input(inp)
    }
  }
  else {
    try {
      var json = jsonic(inp)
      var emit = Emitter()
      emit.emit(json)
    }
    catch (e) {
      console.log(e)
    }
  }
}
emit(input)
