
"use strict"

              const rot13=(str)=>{
                const Alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
                "W","X","Y","Z"];
                 Object.freeze(Alphabet)
                  console.log(Alphabet[0]);
                //  let n=  x<13 ? x+13:x-13;
                 return str;
              }
           
console.log(rot13("SERR PBQR PNZC"));
// console.log(vars[0].key);
// Fuente: https://www.iteramos.com/pregunta/81025/como-crear-un-diccionario-y-anadir-pares-de-valores-clave-dinamicamente-en-javascript