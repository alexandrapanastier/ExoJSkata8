//----------------------------------------------------------------------------------------------//
// EXERCICE 1
// Crée une fonction qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6 => 6 * 2 = 12

// Pour rappel pour écrire une fonction en JS on utilise la syntaxe suivante :

// const nomDeMaFonction = (paramètre) => {
//   // Code de ma fonction
// }
// console.log(nomDeMaFonction(On remplace le paramètre par ce qu'on désire)) // 

// CODE ICI

//----------------------------------------------------------------------------------------------//
// EXERCICE 2

// Crée une fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1
// Pour rappel pour accéder à un élément d'un tableau on utilise la méthode [laplaceDuNombreDeL'élément] :
// const monTableau = [1, 2, 3]
// console.log(monTableau[0]) // 1

// CODE ICI

//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Crée une fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]
// Pour rappel pour supprimer le dernier élément d'un tableau on utilise la méthode pop():
// const monTableau = [1, 2, 3]
// monTableau.pop()
// console.log(monTableau) // [1, 2]

// CODE ICI

//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Crée une fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour rappel pour parcourir un tableau on utilise la méthode for :
// const monTableau = [1, 2, 3]
// for (let i = 0; i < monTableau.length; i++) {
//   console.log(monTableau[i]) // 1, 2, 3
// }

// CODE ICI




//----------------------------------------------------------------------------------------------//

// EXERCICE 5
//Crée une fonction qui prend en paramètre une string et qui doit retourner la string inversée.
// Exemple : "Hello" => "olleH"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode reverse() qui permet d'inverser un tableau : 
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauInverse = monTableau.reverse()
// console.log(monTableauInverse) // ["o", "l", "l", "e", "H"]
//Maintenant que la string est inversée il faut la remettre en string avec la méthode join().

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 6
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3
// Pour cette exercice on va utiliser la méthode Math.max() qui permet de retourner le plus grand nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.max(...monTableau)) // 3

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 7
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1
// Pour cette exercice on va utiliser la méthode Math.min() qui permet de retourner le plus petit nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.min(...monTableau)) // 1

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 8

// Crée une fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode filter() qui permet de filtrer un tableau :
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauFiltre = monTableau.filter((element) => {
//   return element !== "e" && element !== "o"
// })

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 9

// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]
// Pour cette exercice on va utiliser la méthode sort() qui permet de trier un tableau :
// const monTableau = [1, 3, 2]
// console.log(monTableau.sort()) // [1, 2, 3]

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 10

// Crée une fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Pour cette exercice on va utiliser une boucle for et la méthode push() qui permet d'ajouter un élément à un tableau :
// const maString = "Hello"
// const monTableau = []
// for (let i = 0; i < maString.length; i++) {
//   const maStringRotate = maString.substring(i) + maString.substring(0, i)
//   monTableau.push(maStringRotate)
// }
// console.log(monTableau) // ["Hello", "elloH", "lloHe", "loHel", "oHell"]

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 11

// Crée une fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = [1, 2, 3]
// const monTableauAddition = monTableau.map((element) => {
//   return element + 1
// })

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 12

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = ["Hello", "World"]
// const monTableauLongueur = monTableau.map((element) => {
//   return element.length
// })

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 13

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau. 
// Et la méthode charAt() qui permet de récupérer un caractère à une position précise :
// const monTableau = ["Hello", "World"]
// const monTableauPremiereLettre = monTableau.map((element) => {
//   return element.charAt(0)
// })

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 14

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]
// Indice regarde l'exercice 13, c'est exactement la même chose sauf qu'il faut récupérer la dernière lettre et non la première.


// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 15

// Crée une fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la longueur de la string. Incice : la méthode length() permet de récupérer la longueur d'une string.

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 16

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner la somme de tout les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour cette exercice on va utiliser la méthode reduce() qui permet de réduire un tableau en un seul élément :
// const monTableau = [1, 2, 3]
// const somme = monTableau.reduce((accumulateur, element) => {
//   return accumulateur + element
// }, 0)

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 17

// Crée une fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]
// Pour cette exercice on va utiliser la méthode concat() qui permet de concaténer deux tableaux :
// const monTableau1 = ["Hello", "World"]
// const monTableau2 = ["Test", "Salut"]
// const monTableauConcat = monTableau1.concat(monTableau2)
// console.log(monTableauConcat) // ["Hello", "World", "Test", "Salut"]

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 18

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les string qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la présence de la lettre "e". Indice : la méthode includes() permet de savoir si une string contient une lettre ou un mot.

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 19

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner tout les nombres qui sont pairs par ordre croissant.
// Exemple : [ 2, 9, 6, 5, 6] => [2, 6, 6]
// Indice : il y a plusieurs façon de faire, soit avec un for, soit avec la méthode filter() une fois ça fait utilise la méthode sort() qui permet de trier un tableau.

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 20

// Vous avez réussi à passer le premier niveau des algos, bravo ! Maintenant on va passer au niveau 2.

// Crée une fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.
// Exemple : 
// findShort("Prachett is the best author in the world ") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

// Indice : la méthode split() permet de transformer une string en tableau en fonction d'un séparateur :
// const maString = "Hello World"
// const monTableau = maString.split(" ")
// console.log(monTableau) // ["Hello", "World"]
// Indice 2 :  Oublie pas de boucler sur le tableau pour récupérer la longueur de chaque mot. Que soit avec un for ou avec la méthode map().
// Indice 3 : Pour récupérer le mot le plus court tu dois voir la longueur de chaque mot, quel méthode permet de récupérer la longueur d'une string ? 
// Indice 4 : Pour récupérer le mot le plus court tu dois le trier, quel méthode permet de trier un tableau ? Si tu as utilisé la méthode map() pour récupérer la longueur de chaque mot, tu peux utiliser la méthode sort() directement sur le tableau que tu as récupéré avec la méthode map().
// Indice 5 : Le .sort() trie les nombres en fonction de leur valeur unicode, pour trier des nombres il faut utiliser une fonction de comparaison :
// const monTableau = [1, 2, 3, 4, 5]
// const monTableauTri = monTableau.sort((a, b) => {
//   return a - b
// })
// Indice 6 : Pour récupérer le premier élément d'un tableau tu peux utiliser la notation crochet : monTableau[0]





// CODE ICI









//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const findShort = (phrase) => {
//   let tableau = phrase.split(" ");
//     let tableauLongueur = tableau.map((element) => {
//         return element.length
//         }
//     )
//     let tableauTri = tableauLongueur.sort((a, b) => {
//         return a - b
//     }
//     )   
//     return tableauTri[0]
// }

// console.log(findShort("Prachett is the best author in the world"))


//----------------------------------------------------------------------------------------------//

// EXERCICE 21 

 //Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre. Deux chaînes sont des anagrammes l'une de l'autre si elles contiennent les caractères, quel que soit l'ordre des caractères. Par exemple, "listen" et "silent" sont des anagrammes l'une de l'autre

 // Indice : Oubliez pas de transformer les string en tableau pour pouvoir les trier et les comparer. Utilisez la méthode split() pour transformer une string en tableau et la méthode sort() pour trier un tableau. Puis comparez les deux tableaux avec la méthode join() qui permet de transformer un tableau en string.


// CODE ICI







//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//


// const anagram = (string1, string2) => {
//     let tableau1 = string1.split("")
//     let tableau2 = string2.split("")
//     let tableau1Tri = tableau1.sort()
//     let tableau2Tri = tableau2.sort()
//     if (tableau1Tri.join("") === tableau2Tri.join("")) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(anagram("listen", "silent"))


//----------------------------------------------------------------------------------------------//

// EXERCICE 22

//Ecrivez une fonction qui enlève les doubles lettres d'une chaîne donnée. Par exemple, "google" deviendrait "gogle"
// Par exemple : 
// removeDoubleLetters("google") // "gogle"
// removeDoubleLetters("Hello World!") // "Helo World!"
//Indice : Afin de supprimer les doubles lettres, vous devez parcourir la chaîne et comparer chaque caractère avec le caractère suivant. Si les deux caractères sont identiques, vous devez supprimer le deuxième caractère. Donc pour pouvoir comporaer chaque caractère avec le suivant, vous devez transformer la string en tableau. 
// Indice 2 : Pour supprimer un élément d'un tableau vous pouvez utiliser la méthode splice() combiné à une boucle ou la méthode filter() qui permet de filtrer un tableau en fonction d'une condition.


// CODE ICI







//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const removeDoubleLetters = (string) => {
//     let tableau = string.split("")
//     let tableauFiltre = tableau.filter((element, index) => {
//         return element !== tableau[index + 1]
//     })
//     return tableauFiltre.join("")
// }


// console.log(removeDoubleLetters("google"))

// const removeDoubleLetters = (string) => {
//     let tableau = string.split("")
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i] === tableau[i + 1]) {
//             tableau.splice(i, 1)
//         }
//     }
//     return tableau.join("")
// }
// console.log(removeDoubleLetters("google"))

//----------------------------------------------------------------------------------------------//

// EXERCICE 23

 //Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme d'un numéro de téléphone.
// Exemple :
// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) // "(123) 456-7890"
// Indice : Utilisez la méthode slice() pour découper le tableau en plusieurs morceaux. Puis utilisez la méthode join() pour transformer un tableau en string.

// CODE ICI





//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const createPhoneNumber = (tableau) => {
//     let tableau1 = tableau.slice(0, 3)
//     let tableau2 = tableau.slice(3, 6)
//     let tableau3 = tableau.slice(6, 10)
//     return `(${tableau1.join("")}) ${tableau2.join("")}-${tableau3.join("")}`
// }    

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

//----------------------------------------------------------------------------------------------//





// EXERCICE 24

//Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres (en tant que chaînes de caractères) et qui renvoie la lettre manquante de la série. Si aucune lettre n'est manquante, la fonction doit renvoyer "undefined".
// Exemple :
// findMissingLetter(["a","b","c","d","f"]) // "e"
// findMissingLetter(["O","Q","R","S"]) // "P"
// Indice : Oubliez pas de boucler et vous pouvez utiliser la méthode charCodeAt() pour récupérer le code unicode d'un caractère. 
// Indice 2 : Vous pouvez utiliser la méthode fromCharCode() pour récupérer un caractère à partir de son code unicode.  Exemple : String.fromCharCode(65) renvoie "A". Mais attention à refaire la boucle dans l'autre sens pour pouvoir comparer les codes unicode des caractères du tableau avec les codes unicode des caractères manquants.
// Indice 3 : Il y a plus cas comparer les codes unicode des caractères du tableau avec les codes unicode des caractères manquants pour trouver le caractère manquant avec une condition if. Et retourner le caractère manquant avec un return et la méthode fromCharCode().

// CODE ICI







//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
// const findMissingLetter = (tableau) => {
//     let tableauUnicode = tableau.map((element) => {
//         return element.charCodeAt()
//     })
//     for (let i = 0; i < tableauUnicode.length; i++) {
//         if (tableauUnicode[i] !== tableauUnicode[i + 1] - 1) {
//             return String.fromCharCode(tableauUnicode[i] + 1)
//         }
//     }
// }

// console.log(findMissingLetter(["a","b","c","d","f"]))

//----------------------------------------------------------------------------------------------//


// EXERCICE 25

 //Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple :
// sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]
// sortString(["lait", "beurre", "fromage", "yaourt"]) // ["beurre", "fromage", "lait", "yaourt"]

//Indice : Vous pouvez utiliser la méthode sort() pour trier un tableau. Mais attention, par défaut la méthode sort() trie les éléments d'un tableau par ordre alphabétique en se basant sur les codes unicode des caractères. Donc si vous utilisez la méthode sort() sur un tableau de string, les éléments seront triés par ordre alphabétique en se basant sur les codes unicode des caractères. Par exemple, "Banana" sera considéré comme plus petit que "Orange" car le code unicode de "B" est plus petit que le code unicode de "O". Pour trier un tableau de string par ordre alphabétique en se basant sur l'ordre alphabétique des lettres, vous devez utiliser une fonction de comparaison en paramètre de la méthode sort().
// Indice 2 : Pour trier un tableau de string par ordre alphabétique en se basant sur l'ordre alphabétique des lettres, vous devez utiliser une fonction de comparaison en paramètre de la méthode sort(). Cette fonction de comparaison prend deux paramètres (a et b) et renvoie un nombre négatif si a est plus petit que b, un nombre positif si a est plus grand que b et 0 si a est égal à b.

// CODE ICI






//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//





// const sortString = (tableau) => {
//     return tableau.sort((a, b) => {
//         if (a.toLowerCase() < b.toLowerCase()) {
//             return -1
//         }
//         if (a.toLowerCase() > b.toLowerCase()) {
//             return 1
//         }
//         return 0
//     })
// }

// console.log(sortString(["Banana", "Orange", "Apple", "Mango"]))

//----------------------------------------------------------------------------------------------//

// EXERCICE 26
// Écris une fonction qui étant donné deux angles d'un triangle renvoie la mesure du troisième angle.
// ( Rappel : la somme des trois angles d'un triangle est toujours égale à 180 degrés )
// Exemple :
// otherAngle(30, 60) // 90
// otherAngle(60, 60) // 60
// Indice : Pour trouver le troisième angle, tu dois soustraire la somme des deux angles donnés à 180 degrés.

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 27
// Écris une fonction qui peut déterminer si une année est une année bissextile ou non. Elle doit renvoyer true si c'est le cas, sinon false.
// ( Rappel : Une année bissextile est une année contenant 366 jours au lieu de 365. Elle est donc plus longue qu'une année normale. Une année bissextile a lieu tous les 4 ans. )
// Exemple :
// isLeapYear(2020) // true
// isLeapYear(2021) // false
// Indice : Pour savoir ça tu peux utiliser le modulo. Si une année est divisible par 4 et que le reste de la division est égal à 0, alors c'est une année bissextile.

// CODE ICI

//----------------------------------------------------------------------------------------------//

// EXERCICE 28

// Voici un example de tableau d'animaux. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renvoie un nouveau tableau qui lui même contient deux sous-tableaux. Le premier sous-tableau doit contenir les animaux domestiques et le second les animaux sauvages. Les animaux domestiques doivent être triés par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé.

const animals = [
  { name: "Panda", type: "Wild" },
  { name: "Cat", type: "Domestic" },
  { name: "Turtle", type: "Domestic" },
  { name: "Dog", type: "Domestic" },
  { name: "Crocodile", type: "Wild" },
  { name: "Eagle", type: "Wild" },
  { name: "Donkey", type: "Domestic" },
  { name: "Pigeon", type: "Domestic" },
  { name: "Monkey", type: "Wild" }
]

// Exemple :
// sortAnimals(animals) // [["Cat", "Dog", "Donkey", "Pigeon", "Turtle"], ["Eagle", "Monkey", "Panda", "Crocodile"]]
// Indice : Oubliez pas que tu peux créer des variables qui contiennent des tableaux vides et que tu peux ajouter des éléments à un tableau avec la méthode push(). Mais vu que tu dois analyser le tableau d'animaux pour le trier, tu dois utiliser une boucle et faire des conditions if pour savoir si l'animal est domestique ou sauvage. Et tu dois trier les animaux domestiques par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé. Pour trier un tableau par ordre alphabétique tu peux utiliser la méthode sort(). Pour trier un tableau par ordre alphabétique inversé tu peux utiliser la méthode reverse().

// CODE ICI





//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const sortAnimals = (animals) => {
//     let tableauDomestic = []
//     let tableauWild = []
//     let tableauFinal = []
//     for (let i = 0; i < animals.length; i++) {
//         if (animals[i].type === "Domestic") {
//         tableauDomestic.push(animals[i].name)
//         } else {
//         tableauWild.push(animals[i].name)
//         }
//     }
//     tableauDomestic.sort()
//     tableauWild.sort()
//     tableauWild.reverse()
//     tableauFinal.push(tableauDomestic)
//     tableauFinal.push(tableauWild)
//     return tableauFinal
//     }

// console.log(sortAnimals(animals))

//----------------------------------------------------------------------------------------------//




// EXERCICE 29

// Un employé de théatre souhaite obtenir la liste de tous les sièges de sa salle principal. Dans la salle les places sont réparties comme suit : 
// - Il y a 26 colonnes de sièges, numérotées de "1" à "26".
// - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

// Complète la function theatreSieges() qui doit renvoyer un tableau où chaque sous-tableau répertorie les positions des siègnes dans une rangée. 
// Exemple  du résultat attendu :
// [
    // ["1-1", "1-2", "1-3", ..., "1-99", "1-100"],
    // ["2-1", "2-2", "2-3", ..., "2-99", "2-100"],
    // ["3-1", "3-2", "3-3", ..., "3-99", "3-100"],
    // ...
    // ["26-1", "26-2", "26-3", ..., "26-99", "26-100"]
// ]

// Indice : Tu dois utiliser deux boucles imbriquées pour créer les sous-tableaux. La première boucle doit parcourir les colonnes et la seconde boucle doit parcourir les sièges de chaque colonne. 

// CODE ICI



















//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const theatreSieges = () => {
//     let tableau = []
//     for (let i = 1; i <= 26; i++) {
//         let tableau2 = []
//         for (let j = 1; j <= 100; j++) {
//             tableau2.push(`${i}-${j}`)
//         }
//         tableau.push(tableau2)
//     }
//     return tableau
// }

// console.log(theatreSieges())

//----------------------------------------------------------------------------------------------//

// EXERCICE 30

/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.

["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/
//Indice : Tu dois utiliser une boucle for pour parcourir le tableau et une condition if pour savoir si notre équipe a gagné, perdu ou fait match nul. Et tu dois ajouter les points de chaque match à une variable score qui doit être initialisée à 0. Et tu dois retourner la variable score à la fin de la fonction.

// CODE ICI


















//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const footballPoints = (tableau) => {
//     let score = 0
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i][0] > tableau[i][2]) {
//             score += 3
//         } else if (tableau[i][0] === tableau[i][2]) {
//             score += 1
//         }
//     }
//     return score
// }
// console.log(footballPoints(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]))

//----------------------------------------------------------------------------------------------//


// EXERCICE 31

/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

//Indice : Tu dois utiliser une boucle for pour parcourir les tableaux et une condition if pour savoir si un élément est vide. Si un élément est vide tu dois le remplacer par 0. Et tu dois ajouter les éléments des deux tableaux à une variable tableau3 qui doit être initialisée à un tableau vide. Et tu dois retourner le tableau3 à la fin de la fonction.

// CODE ICI











//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const sumArr = (tableau1, tableau2) => {
//     let tableau3 = []
//     for (let i = 0; i < tableau1.length; i++) {
//         if (tableau1[i] === "") {
//             tableau1[i] = 0
//         }
//         if (tableau2[i] === "") {
//             tableau2[i] = 0
//         }
//         tableau3.push(parseInt(tableau1[i]) + parseInt(tableau2[i]))
//     }
//     return tableau3
// }

// console.log(sumArr(["1", "2", "3"], ["2", "4", "1"]))

//----------------------------------------------------------------------------------------------//

// EXERCICE 32

// Écris une fonction generatedCharacter qui crée de manière aléatoires des personnages donjon et dragon avec une classe et des noms de personnages. La fonction doit renvoyer un tableau de personnages.
// Exemple du résultat attendu :
// [
//   ["Aldric", "barbarian"],
//   ["Dolgrin", "bard"],
//   ["Ernst", "cleric"],
//   ["Gellius", "druid"],
//   ["Gorstag", "fighter"]
// ]

// Indice : Tu dois créer un tableau vide et le remplir avec des tableaux qui contiennent un nom et une classe. Pour créer un nom aléatoire tu dois créer un tableau de noms et utiliser la méthode Math.random() pour récupérer un nom aléatoire dans le tableau de noms. Pour créer une classe aléatoire tu dois créer un tableau de classes et utiliser la méthode Math.random() pour récupérer une classe aléatoire dans le tableau de classes. Et tu dois faire une boucle pour créer 10 personnages.

// CODE ICI

let tableauName = ["Aldric", "Dolgrin", "Ernst", "Gellius", "Gorstag", "Hagar", "Jozan", "Kef", "Leve", "Morn", "Perrin", "Reed", "Rulf", "Shandar", "Taman", "Urth"]
let tableauClass = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"]












//-----------------------------------------------SOLUTIONS-----------------------------------------------//
// const generatedCharacter= () => {
//     let tableau = []
//     for (let i = 0; i < 10; i++) {
//         let tableau2 = []
//         let randomName = tableauName[Math.floor(Math.random() * tableauName.length)]
//         let randomClass = tableauClass[Math.floor(Math.random() * tableauClass.length)]
//         tableau2.push(randomName)
//         tableau2.push(randomClass)
//         tableau.push(tableau2)
//     }
//     return tableau
// }

// console.log(generatedCharacter())


//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// Explication ici nous allons résoudre l'algo avec un .map(). Pourquoi ? Car le .map() permet de parcourir un tableau et de retourner un nouveau tableau avec les éléments modifiés. Donc ici nous allons parcourir le tableauName avec un .map() et pour chaque élément du tableauName nous allons créer un tableau avec un nom aléatoire et une classe aléatoire. Et nous allons retourner ce tableau. Donc le .map() va créer un nouveau tableau avec des tableaux qui contiennent un nom aléatoire et une classe aléatoire. Et nous allons stocker ce nouveau tableau dans une variable tableau. Et nous allons retourner ce tableau à la fin de la fonction.

// Comme vous pouvez le voir il y a plusieurs façon de réussir à avoir le résultat attendu d'un algo. Il y a pas de bonne ou de mauvaise façon de faire. Il y a juste des façons plus optimisées que d'autres. Et il y a des façons plus simples que d'autres. Mais le plus important c'est de réussir à trouver une solution qui fonctionne. Et si vous avez réussi à trouver une solution qui fonctionne, c'est déjà très bien. 

// const generatedCharacter = () => {
//     let tableau = []
//     tableauName.map((element) => {
//         let tableau2 = []
//         let randomClass = tableauClass[Math.floor(Math.random() * tableauClass.length)]
//         tableau2.push(element)
//         tableau2.push(randomClass)
//         tableau.push(tableau2)
//     })
//     return tableau
// }

// console.log(generatedCharacter())

//----------------------------------------------------------------------------------------------//

// EXERCICE 33

//Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres (en tant que chaînes de caractères) et qui renvoie la lettre manquante de la série. Si aucune lettre n'est manquante, la fonction doit renvoyer "undefined".
// Exemple :
// findMissingLetter(["a","b","c","d","f"]) // "e"
// findMissingLetter(["O","Q","R","S"]) // "P"

//Indice : Oubliez pas la méthode charCodeAt() est utile pour récupérer le code unicode d'un caractère.
//Le unicode est une norme informatique qui permet de représenter des caractères de toutes les langues du monde. Chaque caractère possède un code unicode qui lui est propre. Par exemple, le code unicode de "A" est 65, le code unicode de "B" est 66, le code unicode de "C" est 67, etc. Pour récupérer le code unicode d'un caractère vous devez utiliser la méthode charCodeAt(). Cette méthode prend en paramètre l'index du caractère dans la string. Par exemple, si vous voulez récupérer le code unicode du premier caractère de la string vous devez utiliser la méthode charCodeAt(0). Si vous voulez récupérer le code unicode du deuxième caractère de la string vous devez utiliser la méthode charCodeAt(1). Et ainsi de suite.



// CODE ICI













//-----------------------------------------------SOLUTIONS-----------------------------------------------//


// const findMissingLetter = (tableau) => {
//     let tableauUnicode = tableau.map((element) => {
//         return element.charCodeAt()
//     })
//     for (let i = 0; i < tableauUnicode.length; i++) {
//         if (tableauUnicode[i] !== tableauUnicode[i + 1] - 1) {
//             return String.fromCharCode(tableauUnicode[i] + 1)
//         }
//     }
// }

// console.log(findMissingLetter(["a","b","c","d","f"]))