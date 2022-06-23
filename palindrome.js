"use estrict"
const palindrome=(str)=>{
    let upper=str.toUpperCase();
    let regex=/[A-Z0-9]/g;
    let match=upper.match(regex);
    
    for(let i=0;i<match.length;i++){
        if(!(match[i]===match[((match.length-1)-i)])){
            return false
            // console.log(`${match[i]}${i}===${match[((match.length-1)-i)]}${((match.length-1)-i)}`);
        }
    }
    return true
}
console.log (palindrome("eye"));
console.log (palindrome("_eye"));
console.log (palindrome("race car"));
console.log (palindrome("not a palindrome"));
console.log (palindrome("A man, a plan, a canal. Panama"));
console.log (palindrome("never odd or even"));
console.log (palindrome("nope"));
console.log (palindrome("almostomla"));
console.log (palindrome("My age is 0, 0 si ega ym."));
console.log (palindrome("1 eye for of 1 eye."));
console.log (palindrome("0_0 (: /-\ :) 0-0"));
console.log (palindrome("five|\_/|four"));