var Emitter = require("vidi-metrics-emitter")
var jsonic = require("jsonic")
var isjson = require("is-json")
var minimist = require("minimist")
var readLineSync = require("readline-sync")
var input = minimist(process.argv.slice(2))._[0]
var ascii = "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKOkxdoolllllodxkO0XWMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMX0xocccodxkOOOOOOkxdolccldOKWMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMWKkocldk0XNMMMMMMMMMMMMMMWNKOxlclxONMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMNkoclx0NMMMMMMMMMMMMMMMMMMMMMMMMWXkoclxKMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMXxlcd0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXxlco0WMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMWOccdKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNkccdNMMMMMMMMMMMMMM\nMMMMMMMMMMMMMNdclOWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXdcl0MMMMMMMMMMMMM\nMMMMMMMMMMMMXocoXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWxcc0MMMMMMMMMMMM\nMMMMMMMMMMMNocoNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWkccOMMMMMMMMMMM\nMMMMMMMMMMWdcoNMMNKKKKKKKKKKXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMkccKMMMMMMMMMM\nMMMMMMMMMMOcc0MMMKccccccccccxMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNlcdWMMMMMMMMM\nMMMMMMMMMWocoWMMMKccccccccccxMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMkcc0MMMMMMMMM\nMMMMMMMMMKcckMMMMKccccccccccxMMMMMMMMMMMMNkkkkkkkkkkKMMMMMMMMMMKccxMMMMMMMMM\nMMMMMMMMMOccOMMMMKccccccccccxMMMMMMMMMMMMKcccccccccckMMMMMMMMMMXccoWMMMMMMMM\nMMMMMMMMMOccldddO0ccccccccccxMMMMMMMMMMMMKcccccccccckMMMMMMMMMMXccoWMMMMMMMM\nMMMMMMMMMKccccccxKccccccccccxMMMMMMMMMMMMKcccccccccckW0OOOOOOOOkccxMMMMMMMMM\nMMMMMMMMMWocccccxKccccccccccxMWWWWWWWWWWWKcccccccccckXlccccccccccc0MMMMMMMMM\nMMMMMMMMMMOcccccxKccccccccccx0llllllllllxKcccccccccckXlccccccccccdWMMMMMMMMM\nMMMMMMMMMMWdccccxKccccccccccx0ccccccccccxKcccccccccckXlccccccccccKMMMMMMMMMM\nMMMMMMMMMMMNocccxKccccccccccx0ccccccccccxKcccccccccckXlcccccccccOMMMMMMMMMMM\nMMMMMMMMMMMMXoccx0ccccccccccx0ccccccccccxKcccccccccckXlcccccccc0MMMMMMMMMMMM\nMMMMMMMMMMMMMNdcldccccccccccx0ccccccccccxKcccccccccckXlccccccl0MMMMMMMMMMMMM\nMMMMMMMMMMMMMMWOccccccccccccx0ccccccccccxKcccccccccckXlcccccdNMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMXxlcccccccccx0ccccccccccxKcccccccccckXlccco0WMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMNOocccccccx0ccccccccccxKccccccccccloclxKMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMWKkoccccokccccccccccxKccccccccccldONMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMN0xoccccccccccccodccccccldOKWMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKOkxdoolllllodxkO0XWMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"

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
  console.log(ascii)
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
    localJson[tagsArray[i].substring(0,tagsArray[i].indexOf(":"))] = tagsArray[i].substring(tagsArray[i].indexOf(":")+1, tagsArray[i].length)
    json.tags = localJson
  }
  var emit = Emitter()
  emit.emit(json)
}
else {
  emit(input)
}
