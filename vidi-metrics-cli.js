var Emitter = require("vidi-metrics-emitter")
var jsonic = require("jsonic")
var isjson = require("is-json")
var minimist = require("minimist")
var readLineSync = require("readline-sync")
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
if(input == null) {
  var json = {}
  var name = readLineSync.question("Name for json? \n")
  json.name = name
  var values = readLineSync.question("Enter all values as a string in this form 'value1:a,value2:q' \n")
  var tags = readLineSync.question("Enter all tags as a string in this form 'firstTag:tagGoesHere,secondTag:anotherTagGoesHere'\n")
  var valuesArray = values.split(",")
  var tagsArray = tags.split(",")
  var localJson = {}
  for (var i = 0; i < valuesArray.length; i++) {
    localJson[valuesArray[i].substring(0,valuesArray[i].indexOf(":"))] = valuesArray[i].substring(valuesArray[i].indexOf(":")+1, valuesArray[i].length)
    json.values = localJson
  }
  localJson = {}
  for (var i = 0; i < tagsArray.length; i++) {
    json[tagsArray[i].substring(0,tagsArray[i].indexOf(":"))] = tagsArray[i].substring(tagsArray[i].indexOf(":")+1, tagsArray[i].length)
  }
  var emit = Emitter()
  emit.emit(json)
}
else {
  emit(input)
}
