"use strict";
var teamVenture = {

  brothers : ['Hank Venture','Dean Venture'],
  father:'Dr. Thaddeus "Rusty" Venture',
  bodyguard:'Brock Samson',
  archNemesis:'The Monarch',
  robot:'H.E.L.P.eR.',
  theme:'Failure',
  progenitor:'Johny Quest',
  jets:5,
  labs:7,
  neighbor:'Dr. Byron Orpheus',

  printBio:function(){
    var message = 'The Brothers ' + teamVenture.brothers[0]+' and '+teamVenture.brothers[1]+ ' are dragged around on dangerous adventures by their father, '
    +teamVenture.father+'. Escorted by their bodyguard ' + teamVenture.bodyguard + " the team travels around the world avoidin the grasp of  "
    +teamVenture.archNemesis +"the teams arch-nemesis.\n" +"The Venture's hav lost "+teamVenture.jets+ " jets and "+teamVenture.labs+" labs." ;
    console.log(message);
  }


}

teamVenture.printBio();
