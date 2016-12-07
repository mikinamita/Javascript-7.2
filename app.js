function findSum()
{

var i,s=0;

for(i=0;i<arguments.length;i++)
{
s+=arguments[i];
}

return s;
}
console.log(findSum(1,2,3));
console.log(findSum(1,2,3,4,5,6,7,8,9,10));
