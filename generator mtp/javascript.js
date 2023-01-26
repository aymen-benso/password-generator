
var passwordoutput =  document.getElementById('passwordoutput');
var tableauminuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
var tableaumajuscule = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
var tableaunumero = [1,2,3,4,5,6,7,8,9,0];
var tableausymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];


function generateur() {
	

  var tableauxregroupé = [].concat( 
    lower.checked ? tableauminuscule : [], 
    upper.checked ? tableaumajuscule : [],
    numbers.checked ? tableaunumero : [],
    symbols.checked ? tableausymbole : []);
	


  var passwordLength = parseInt(document.getElementById('taille').value);
  var mdp = ''; 
  

  if (tableauxregroupé.length<1) {

    alert('Tu dois séléctionner au moins un critère');
	
  }else if(passwordLength< 1)
 { alert('Le minimum est de 1 caractères');
}
   else if (tableauxregroupé.length>=1 && passwordLength> 16) {
   
    alert('Le maximum est de 16 caractères');  
  } 
 
  else {

	  for (i = 0; i < passwordLength; i++) {
		mdp+= tableauxregroupé[Math.floor(Math.random() * tableauxregroupé.length)]; 
	  }
   passwordoutput.value = mdp; 
  }

}
 function copie(){
	 
	 if (document.getElementById('passwordoutput').value==0) {
		 
		 alert('Case vide , il n y a rien à copier')
	 }
	 else {
passwordoutput.select();
  document.execCommand('copy');
  alert('Copié')
 }
      }
 function best() {
document.getElementById('taille').value=16;
 
	document.getElementById('lower').checked =true;
	document.getElementById('upper').checked =true;
	document.getElementById('numbers').checked =true;
	document.getElementById('symbols').checked =true;

generateur();
 }
