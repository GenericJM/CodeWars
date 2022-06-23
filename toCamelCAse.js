"usestrict"
const str="The-stealth-warrior";
const regex=/(-|_)[a-z]/g
const match=str.replace(regex,(a)=>a[1].toUpperCase());
const match1=str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
console.log(match," ",match1)  