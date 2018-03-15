var offUn= document.getElementById("off-1")






function choixUn (){
    offUn.style.display="block";
    document.getElementById("one").style.display="none"; 
   
 }

 function choixDe (){
    document.getElementById("off-3").style.display="block"; 
    document.getElementById("one").style.display="none";    
   
 }


 function choixTr (){
    document.getElementById("off-2").style.display="block"; 
    document.getElementById("one").style.display="none"; 
       
 }


 function choixQu (){
    document.getElementById("off-4").style.display="block"; 
    document.getElementById("one").style.display="none";
    
 }





 var téléconseiller = "Téléconseiller/Télévendeur"
 var manutentionnaire = "Manutentionnaire"
 var web = "Intégrateur web"
     
 

// Affichage dommaine //    

document.getElementById("choix1").innerHTML=web
document.getElementById("choix2").innerHTML=téléconseiller
document.getElementById("choix3").innerHTML=manutentionnaire
var selectElmt = document.getElementById("form");




    function test (){
           choix = textselectionne = selectElmt.options[selectElmt.selectedIndex].text;


           if (choix === téléconseiller) {
            
            document.getElementById("off-2").style.display="block"
            document.getElementById("one").style.display="none"
            
            
           }

           else if (choix === manutentionnaire){

            document.getElementById("off-3").style.display="block"
            document.getElementById("one").style.display="none"


           }

           else if (choix === web){

            document.getElementById("off-1").style.display="block"
            document.getElementById("one").style.display="none"


           }
         

}



// Pages lettre de motivation // 

            var selectElmtUn = document.getElementById("form2");
            var web = "Intégrateur web"
            post1 = ("Expérimenté dans le domaine de la télévente avec ou sans script, j’ai pu développer les techniques commerciales, un sens de l’argumentation, une aisance dans la communication et dans l’écoute nécessaires pour exercer le métier <br> dans des conditions optimales. Par ailleurs, j’ai acquis une bonne connaissance de la législation en vigueur relative à la vente à distance, ce qui me permet de travailler en toute sécurité pour mon entreprise et pour ses clients. <br>    J’ai pu acquérir un regard juste sur  fonctionnement, des pratique et des exigences. Ainsi,  je suis certain de pouvoir m’adapter rapidement au sein de l’entreprise et aux cadences données. Attentif, organisé et rigoureux, <br> je saurai être au plus proche des attentes de vos clients tout en étant efficace et respectueux du règlement.  D’autre part, fort d’une première expérience au sein même de votre entreprise, <br> j’ai pu acquérir un regard juste sur votre fonctionnement, vos pratiques et vos exigences. Ainsi, je suis certain de pouvoir m’adapter rapidement au sein de l’entreprise et aux cadences données.")
            merci = "Je vous remercie par avance de l’intérêt que vous porterez à ma demande. <br> <br> Je suis disponible de suite pour vous rencontrer lors d’un entretien au cours duquel je vous préciserai mes motivations de vive voix.Dans l’attente d’un retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées."

    // Poste 2 // 
    post2= ("Une bonne basse dans le domaine de l’intégration Web avec les langages suivant HTML-5 CSS3- JavaScript recherche un poste ou un stage pour compléter met connaissances dans domaine J’utilise régulièrement l’outil suivants GIT VISUAL STUTIO CODE   sous des système d’exploitation t’elle que Windows 7, 8,10 met aussi sous Linux Ubuntu et Debian sous linux métrise du terminal. <br> <br> Attentif, organisé et rigoureux, j’aime le travaillé en équipe ")
    post3= ("Actuellement à la recherche d’un emploi, je viens par cette présente lettre, vous proposer ma candidature pour un poste de manutentionnaire. <br> <br> Ma motivation, mon sérieux, le désir de m’impliquer et réussir dans ce métier, constitue pour moi des challenges que je m’engage à accomplir et qui pourrait s’exprimer au sein de votre établissement.  ")



                    function compar () {
                        choixUn = textselectionne = selectElmtUn.options[selectElmtUn.selectedIndex].text;


                        if (choixUn === téléconseiller){
                            
                            document.getElementById("corp").innerHTML=post1;
                            document.getElementById ("test").style.display="none";
                            document.getElementById("adresses").style.display="block";
                            document.getElementById("merci").style.display="block";
                            document.getElementById("objets").style.display="block";
                            document.getElementById("attentions").style.display="block";
                            document.getElementById("merci").innerHTML=merci;
                            document.getElementById("lettre-form").style.display="none"; 
                            document.getElementById("poste").innerHTML= téléconseiller ; 
                            document.getElementById("nom").innerHTML= non ; 
                            alert("Vous pouvez imprimé votre lettre avec CTRL - P de votre clavier ! ")

                        }

                        else if (choixUn === web){
                            document.getElementById("corp").innerHTML=post2;
                            document.getElementById ("test").style.display="none";
                            document.getElementById("adresses").style.display="block";
                            document.getElementById("merci").style.display="block";
                            document.getElementById("objets").style.display="block";
                            document.getElementById("attentions").style.display="block";
                            document.getElementById("merci").innerHTML=merci;
                            document.getElementById("lettre-form").style.display="none"
                            document.getElementById("poste").innerHTML= web; 
                            document.getElementById("nom").innerHTML= non ; 

                            alert("Vous pouvez imprimé votre lettre avec CTRL - P de votre clavier ! ")



                        }

                        else if (choixUn === manutentionnaire ){
                            document.getElementById("corp").innerHTML=post3;
                            document.getElementById ("test").style.display="none";
                            document.getElementById("adresses").style.display="block";
                            document.getElementById("merci").style.display="block";
                            document.getElementById("objets").style.display="block";
                            document.getElementById("attentions").style.display="block";
                            document.getElementById("merci").innerHTML=merci;
                            document.getElementById("lettre-form").style.display="none"; 
                            document.getElementById("poste").innerHTML= manutentionnaire;
                            document.getElementById("nom").innerHTML= non ; 

                            alert("Vous pouvez imprimé votre lettre avec CTRL - P de votre clavier ! ") 



                        }
                        


                    }





                    //Fuction pages Tléconseiller// 


                    var btnTl1 = 0;
                    var btnTl2= 0;
                    var btnTl3 = 0; 

               




                    function xpTl () {

                        document.getElementById("xptl").style.display="block"
                        document.getElementById("compTl").style.display="none"
                        document.getElementById("btnTl3").className="0"
                        document.getElementById("btnTl1").className=" fa fa-mouse-pointer"
                        document.getElementById("btnTl2").className="0"
                        document.getElementById("motivationTl").style.display="none"

                    }


                    
                    function compTl () {
                        document.getElementById("compTl").style.display="flex"
                         document.getElementById("xptl").style.display="none"
                         document.getElementById("btnTl3").className=" fa fa-mouse-pointer"
                         document.getElementById("btnTl1").className="0"
                         document.getElementById("btnTl2").className="0"
                         document.getElementById("motivationTl").style.display="none"


                    }



                    function motivTl () {
                        document.getElementById("motivationTl").style.display="block"
                        document.getElementById("compTl").style.display="none"
                        document.getElementById("xptl").style.display="none"
                        document.getElementById("btnTl1").className="0"
                        document.getElementById("btnTl3").className="0"
                        document.getElementById("btnTl2").className="fa fa-mouse-pointer"

                    }

// Fuction Pages Web // 

                 function wB1(){
                     document.getElementById("wbPro").style.display="flex"
                     document.getElementById("wbMotiv").style.display="none"
                     document.getElementById("wbcomp").style.display="none"

                 }



                 function wB2 ()
                 {
                    document.getElementById("wbPro").style.display="none"
                    document.getElementById("wbMotiv").style.display="flex"
                    document.getElementById("wbcomp").style.display="none"
                 }

                 function wB3 ()
                 {
                    document.getElementById("wbPro").style.display="none"
                    document.getElementById("wbMotiv").style.display="none"
                    document.getElementById("wbcomp").style.display="flex"
                 }