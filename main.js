const idespañol = document.getElementById('español')
const idingles = document.getElementById('ingles')
const idfrances = document.getElementById('frances')
const contenedorC = document.getElementById('contenedorC')

const obtenerIDesp=()=>{
    console.log('hola cuento')
    contenedorC.innerHTML = '<p>Erase una vez un león con mucha hambre que vivía en el bosque. Un buen día buscando ocasión para encontrar presa fácil que llevarse al estomago se encontró con una oveja y le preguntó que le parecía su aliento.</p> <p>La oveja sin pensar mucho el riesgo o las consecuencias le respondió con sinceridad que era apestoso.Entonces el león fingió sentirse ofendido, le dio un golpe y la mató a la vez que le decía: “Por haberofendido a tu rey, eso es lo que te has ganado” y se la comió.</p> <p>Tras un rato el león volvió a hacerle la misma pregunta a una cabra que deambulaba por allí. La cabra que había visto lo que le había ocurrido a su amiga la oveja temió por su vida y le respondió que su aliento era maravilloso. El león se molestó, la mató y se la comió al tiempo que le decía “Por adularme con falsedades es lo que te mereces”.</p> <p>A continuación se dirigió a la zorra que también había observado las dos situaciones anteriores y le repitió la misma pregunta. La zorra, algo más astuta viéndose venir que podía acabar como la oveja o la cabra, se alejó de él y desde la distancia le habló: “De buena fe, le informo que no puedo responder a su pregunta puesto que el resfriado que poseo me impide percibir su aliento”. Así se salvo la  zorra de ser devorada por el león.</p>'
    
   
   
   
   
   
   
   
   
    
     
    
    

}
const obtenerIDing=()=>{
    console.log('hola cuento')
    contenedorC.innerHTML = '<p>Once upon a time there was a very hungry lion who lived in the forest. One fine day, looking for an opportunity to find easy prey to put in his stomach, he came across a sheep and asked what he thought of its breath.</p> <p>The sheep, without thinking much about the risk or the consequences, answered him honestly that it was stinky. Then the lion pretended to be offended, struck it and killed it while saying: "For having offended your king, that is what you have earned" and ate it.</p> <p>After a while the lion asked the same question again to a goat that was wandering around. The goat that had seen what had happened to her friend the sheep feared for her life and replied that her breath was wonderful. The lion got upset, killed her and ate her while telling her "For flattering me with falsehoods is what you deserve."</p> <p>He then went to the fox who had also observed the two previous situations and repeated the same question. The fox, somewhat more cunning, seeing that she could end up like a sheep or a goat, moved away from him and spoke to him from a distance: "In good faith, I inform you that I cannot answer your question since the cold I have It prevents you from perceiving your breath. This is how the fox was saved from being devoured by the lion.</p>'
    
   
   

}
const obtenerIDfra=()=>{
    console.log('hola cuento')
    contenedorC.innerHTML = "<p>Il était une fois un lion très affamé qui vivait dans la forêt. Un beau jour, cherchant une occasion de trouver une proie facile à lui mettre dans l'estomac, il croise un mouton et lui demande ce qu'il pense de son haleine.</p> <p>Le mouton, sans trop réfléchir au risque ni aux conséquences, répondit honnêtement qu'il puait. Alors le lion fit semblant d'être offensé, le frappa et le tua en disant : « Pour avoir offensé ton roi, c'est ce que je t'ai mérité. ça » et je l'ai mangé.</p> <p>Au bout d'un moment, le lion posa à nouveau la même question à une chèvre qui se promenait. La chèvre qui avait vu ce qui était arrivé à son amie la brebis craignit pour sa vie et répondit que son haleine était merveilleuse. Le lion s'est fâché, l'a tuée et l'a mangée en lui disant 'Car me flatter avec des mensonges est ce que tu mérites.'</p> <p>Il se dirigea alors vers le renard qui avait également observé les deux situations précédentes et répéta la même question. Le renard, un peu plus rusé, voyant qu'il pouvait finir comme un mouton ou une chèvre, s'éloigna de lui et lui parla à distance : « En toute bonne foi, je t'informe que je ne peux pas répondre à ta question car le froid L'avoir vous empêche de percevoir votre souffle. C'est ainsi que le renard a été sauvé d'être dévoré par le lion.</p>"
    
   
   

}

/* 





 */
idespañol.addEventListener('click',obtenerIDesp)
 idfrances.addEventListener('click',obtenerIDfra)
idingles.addEventListener('click',obtenerIDing)