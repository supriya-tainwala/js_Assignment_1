
function sum(arr){
    var sum=0;
for(var i=0;i<arr.length;i++)
{
  var a= Number(arr[i]);
   sum+=a;
}
console.log(`sum of array is ${sum}`);

}

var arr=[1,2,3,4];
sum(arr);