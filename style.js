

var a = [1,23,434,12,2,3,4,1,34,2,4,2,34];
var myDublicate = [];

for(var i = 0; i < a.length; i++){
    var element = a[i];
    var index = myDublicate.indexOf(element);
    if(index==-1){
        myDublicate.push(element);
    }

}
console.log(myDublicate);