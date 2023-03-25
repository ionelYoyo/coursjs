 // commentaire JS sur une ligne
 //<!-- --> commentaire html sur une ligne ou plusieurs

 /* 
 commentaire JS sur plusieurs ligne
 */

 // Boite de dialogue 

 //alert('Bonne annee les gars!!'); // permet d'afficher un message d'utilisateur
 //confirm('Etes Vous Sur?'); //permet de recuperer une confirmation utilisateur
 //prompt('Quel age avez vous'); //permet de recuperer une saisie utilisateur

 //ces boites de dialogues sont utilisés pour delivrer une information de l'utilisateur

 //const prenom = prompt('quel est votre prenom?'); //on va recuperer la saisir dans une variable
 //document.write("Bonjour" + " " + prenom);

 // Affichage dans la console du navigateur
 // Outils de debuggage qui premettent de controler les donnee , le contenue d'une variable, d'un objet , d'un tableau, etc...
 //console.log('Affichage dans la console');
 //console.info('Attention au erreur de syntaxe');
 //console.dir('attention aux erreurs de syntaxe'); 

 /*
 DOM: DOCUMENT OBJET MODEL
 Le DOM est un programmme interne à notre navigateur qui fait en sorte que chaque element de notre document HTML
 soit recuperable, manipulable par un langage de programmation
 */
 document.write('<h1>Variables  : declaration / affectation </h1>');

 //Declaration avec const ou VAR
 // le mot cle VAR permet de declarer une variable, caractere autorises : 0-9, A-Z, a-z, $ et _
 // Attention JAVASCRIPT est sensible a la casse : var A n'est pas la meme chose que var a
 // il n'est pas possible de declarer une variable commencant par une chiffre



 document.write('<h2>Affectation</h2>');



 // le signe = : simple signe egal qui permet d'affecter une valeur a une variable
 //const maBoite = 'Bonne Vacance!!!'; // affectation de la valeur numeriaue 10 dans la variable 'maBoite'
 //console.log(maBoite);

 

 //Declaration avec 'let'
 /*
 une variable declaree avec let n'existe que dans le bloc ou elle a ete declaree un bloc en javascript est a l'interieur des accolades {}
 if(condition) {//bloc}
    function true() {//bloc}
         while(condition) {//bloc}
 */



 //DECLARATION avec CONST 
 // Une constante tout comme une variable permet de conserver une valeur sauf aue nous ne pourrons pas modifier la valeur de la constante durant l'execution du code


 document.write("<h4> La concatenation</h4>");

 
 const prenom = "Ionel"
 nom = "Condor";
 // + : concatenation , que l'on peut traduire pas 'suivi de'
 document.write(prenom + ' ' + "<strong>" + nom + "</strong>");
 document.write("<br>");
 document.write("<br>");
 document.write("<br>");

 
 
 let rouge = "rouge";
 document.write("<font color = red>" + rouge + "</font>");
 document.write("<br>");
 let jaune = "jaune";
 document.write("<font color = yellow>" + jaune + "</font>");
 document.write("<br>");
 let bleu = "bleu";
 document.write("<font color = blue>" + bleu + "</font>");
 document.write("<br>");// il est possible de declarer 2 variables du meme nom avec var 
 var test1 = 123;
 var test1 = 356;
 console.log(test1);



 // ce n'est pas possible avec let dans le meme bloc
 // Il est plutot a la mode de dire qu'il faut utiliser let plutot que var
 // ce sont deux outils du langage et c'est aux developpeurs de faire les bons choix



 /*
 OPERATEUR DE COMPARAISON
 * affectation
 == comparaison de la valeur
 === comparaison de la valeur et du type
 < strictement inferieur a
 > strictement superieur a
 <= inferieur ou egal a
 >== superieur ou egal a
 AND && ET
 OR || OU
 ! n'est pas
  !=different de
 */


 
 document.write("<h1>IF et ELSE</h1>");
 // On declare la condition dans les parantheses du IF
 // Si la condition renvoie TRUE, si elle est verifiée, on entre dans les accolades et le code est exécuté
 
 
 let a = 9
 b = 5,
 c = 2;

 
 if (a > b)  {
     document.write("A est suerieur à B <br>")
  }else{
     document.write(" <h1> NOn c'est B qui est superieur à A <br>")
 }
 // le cas ELSE n'est pas indispensabler


 // If and AND
 //Il est possible de declarer plusieurs condition dans le IF grace a des operateurs
 // Avec AND && il faut que les 2 conditions soient verifiées entre les acolades
 
 if ( a > b && b > c) {
    document.write(' ok pour les 2 conditions') ;
 }
 
 //IF avec OR
 
 if (a == 9 || b > c) {
    document.write("ok pour au moins l'une des 2 conditions <br>");
 }
 // IF/ ELSEIF / ELSE

 if (a== 8) {
    document.write("A est egale a B <br>");
 }else if (a >c) {
    document.write("B est superieur a C <br>");
 }else if (c == 2){
    document.write("C est egale a 2 <br>");
 } else {
  document.write("toutle monde a faux <br>");    
 }

 // ELSE IF permet d'ajouter des cas supplementaires a une condition IF
 // SI un des cas est vérifié, tout les cas suivant ne sont pas évalués

 let sale = false;
 if(!sale){
    document.write('<h1>Time to buy</h1>')
 }
 else {
    document.write('<h1>Not yet</h1>')
 }

 // Exercice 2 
 
 let huntingLevel = 8
 if (huntingLevel > 7) {
    document.write('<h1>You have to eat</h1>')
 }
 else {
    document.write('<h1>We can eat later</h1>')
 }


 document.write("<h4>Condition SWITCH </h4>");


 let personnage = 'Mario';
 let bestPersonnage = 'Mario'
 // switch (personnage) {
 //   case " Luigi":
 //   document.write("Vous avez choisi " + personnage + "<br/>");
 //   break;
 //   case "Toad":
 //       document.write("Vous avez choisi " + personnage + "<br/>");
 //       break;
 //       case "Browser":
 //           document.write("Vous avez choisi " + personnage + "<br/>");
 //       break;
 //       default:
 //           document.write("Vous êtes completement fou c'est " + personnage + " le meilleur" +"<br/>");
 // }

 if(personnage = "Donky Kong") {
    document.write("Vous avez choisi le personnage : " + personnage + "<br/>" )
    document.write("Vous êtes completement fou c'est " + bestPersonnage + " le meilleur" +"<br/>");
 } else if (personnage = "Toad"){
    document.write("Vous avez choisi le personnage : " + personnage + "<br/>" )
    document.write("Vous êtes completement fou c'est " + bestPersonnage + " le meilleur" +"<br/>");
 } else if (personnage = "Browser"){
    document.write("Vous avez choisi le personnage : " + personnage + "<br/>" )
    document.write("Vous êtes completement fou c'est " + bestPersonnage + " le meilleur" +"<br/>");
 } else if (personnage = "Luigi"){
    document.write("Vous avez choisi le personnage : " + personnage + "<br/>" )
    document.write("Vous êtes completement fou c'est " + bestPersonnage + " le meilleur" +"<br/>");
 } else if (personnage = "Mario"){
    document.write("Bravo " + personnage + " c'est le meilleur!!!!" + "<br/>")
 }
 else {
    document.write("Choisissez un personnage svp!" )
 }



 document.write("<h4>Les boucle</h4>");


 // initialisation / condition / incrementation



 for(let i =0; i <= 5; i++) {
    document.write(i + "---"); // instruction pour chaque tour de boucle
 }
 

 // exercice 1 sur les boucles
 let vacationSpots = ['CapEsterel','Miami','Japon'];
 document.write("<br/>");
 document.write(vacationSpots[0]);
 document.write("<br/>");
 document.write(vacationSpots[1]);
 document.write("<br/>");
 document.write(vacationSpots[2]);
 
 document.write("<br/>");
 for(let g= 0; g<vacationSpots.length; g++) {
    document.write("J'adorerai visiter " + vacationSpots[g] + "<br/>")
 }