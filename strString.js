var str5 = '这是一段原始文本，需要替换的内容"3c这要替换4d"！';
var newStr = str5.replace( /([0-9])([a-z])/g,function (arg){
    console.warn(arg);
} );