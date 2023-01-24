

function reverse_array(arr)
{
      for(var len=0;len<=arr.length/2;len++)
      {
        var temp=arr[len];
        arr[len]=arr[arr.length-len-1];
        arr[arr.length-len-1]=temp;
      }
      console.log("reverse of an array");
      for(var i=0;i<arr.length;i++)
      {
        console.log(arr[i]);
      }
}
var arr=[1,2,3,4,5];
console.log("  array");
for(var i=0;i<arr.length;i++){
  console.log(arr[i]);
}

reverse_array(arr);