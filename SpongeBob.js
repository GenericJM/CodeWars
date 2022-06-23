"use strict"
let sentence="stop Making spongebob Memes!"

/* sentence=sentence.toLowerCase();
let result=sentence[0].toUpperCase();
for(let i=1;i<sentence.length;i++){
result+=i%2===0 ? sentence[i].toUpperCase():sentence[i];
}
sentence=result; */
console.log(sentence.split('').map((v,i)=>i%2 ? v.toLowerCase():v.toUpperCase()).join(""))

