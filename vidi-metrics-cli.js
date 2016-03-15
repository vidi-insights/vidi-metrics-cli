var Emitter = require("vidi-metrics-emitter")
var emit = Emitter()
var minimist = require("minimist")
var inp = minimist(process.argv.slice(2))._[0]

var input = function(inp) {
emit.emit(inp)
}
input(inp)
setTimeout(function(){
 process.exit()
}, 300)
