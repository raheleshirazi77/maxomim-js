
/*
#neme: **rahele shirazi**
#name project:***maxomim-js***
#use language programmer: **html**,**js**
#methode use coding:***for***, ***if***
*/

// start


let sum = [1, 2, 3, 190, 48, 76, 44, 9]; // sakht array sum baraye be dast avardan bozorg tarin adad.
let max = sum[0]; // tarif yelk motaghayer baraye barresi adad
for (let i = 1; i < sum.length; i++) { // ba estefade az for and halghe yeki yeki adad ro migirim.
    if (sum[i] > max) {  // hala baresi mikonim bbinim kodom adad bozorgtarin ast.
        max = sum[i]; // agar true bode value ro dar sum variz konada
    }
}
document.write(max); // dar akhar value be dast omade ra namayesh dahad

// va tamaaaam tammmammmmm
 