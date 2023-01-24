var arr1=[],j=0;

function modification(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        arr1[j++]=arr[i]*8
        else
        arr1[j++]=arr[i]*7
    }
    return arr1;
}
var arr=[1,2,3,4,5];
var modified_array=modification(arr);
console.log(modified_array);