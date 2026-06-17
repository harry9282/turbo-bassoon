/* https://leetcode.com/problems/second-largest-digit-in-a-string/

Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
An alphanumeric string is a string consisting of lowercase English letters and digits.
Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:

Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and digits.
*/

function secondHighestNumInString(s:string):number{

    let length=s.length;
    let largest:number=-1;
    let secondLargest:number=-1;

     
    for (let i:number=0;i<length;i++)

    {
        const digit=Number(s.charAt(i));

        if(!Number.isNaN(digit))
        {   
            if(digit===largest)
                continue;
            else if(digit>largest){
               secondLargest=largest;
               largest=digit
               
            }
            else if (digit<largest && digit>secondLargest)
            {
                secondLargest=digit;
            }

        }

    }


        return secondLargest;
 
};

const result=secondHighestNumInString("haghdha2327634274shgdhsg");

console.log("Second Largest Number in this string is "+ result);