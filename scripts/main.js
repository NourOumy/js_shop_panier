let count = document.querySelector(".count")
let boutons = document.querySelectorAll(".add")
let price
let Totalitems = 0
let somme = 0

boutons.forEach(function(bouton){
  bouton.addEventListener("click", function(){
    somme++
    count.innerHTML = somme

    price=bouton.previousElementSibling.innerText
    // console.log(parseInt(price.slice(0, -1)));
    Totalitems += parseInt(price.slice(0, -1))
    console.log(Totalitems);
    document.querySelector("h3").setAttribute("title", `Montant total du panier : ${Totalitems}€`)
    })
})
