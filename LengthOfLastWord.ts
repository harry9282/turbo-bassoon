function lengthOfLastWord(s: string): number {
   
let len:number=0;

for(let i:number=s.length-1;i>=0;i--)
{
     if(s[i]==" " && len==0){}
        //do nothing
     else if(s[i]!=" ")
     {
        len++;
     } 
     else if(s[i]==" " && len>0)
        break;
}
return len;
};

console.log("The Length Of the last word is "+lengthOfLastWord("Harsh Is doing fnatasitc boss wow!    "))