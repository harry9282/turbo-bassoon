// [1,1,1,1,1,1,1,2,2,3], [1, 1, 2, 2, 3, _]

function keepOnlyUniqueAndDuplicate(nums:number[]):number{

    let x:number=2;

    for(let i:number=2;i<nums.length;i++)
    {
          if(nums[i]>nums[x-2])
          {
             
             nums[x]=nums[i];
             
             x++;   
          }
          

       

    }
     return x;  
}
let arr:number[]=[1,1,1];
console.log(keepOnlyUniqueAndDuplicate(arr));
