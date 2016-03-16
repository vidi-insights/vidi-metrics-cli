var Emitter = require("vidi-metrics-emitter")
var jsonic = require("jsonic")
var emit = Emitter()
var minimist = require("minimist")
var inp = minimist(process.argv.slice(2))._[0]
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
