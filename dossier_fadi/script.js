const Users = {
    "nom":[],
    "prenom": [],
    "email":[],
    "motDePasse":[],
    "phone":[],
    "adresse":[],
    "codePostal":[]
}

$(document).ready(function(){

$("#inscrire").click(function(){


    let nom = $("#inputNom").val()
    let prenom = $("#inputPrenom").val()
    let email = $("#inputEmail4").val()
    let motDePasse = $("#inputPassword4").val()
    let phone = $("#inputPhone").val()
    let adresse = $("#inputAdresse").val()
    let codePostal = $("#inputGroupSelect01").val()

    if(nom && prenom && email && motDePasse && phone && adresse && codePostal !== ""){

        Users.nom.push(nom)
        Users.prenom.push(prenom)
        Users.email.push(email)
        Users.motDePasse.push(motDePasse)
        Users.phone.push(phone)
        Users.adresse.push(adresse)
        Users.codePostal.push(codePostal)

    }else{
        console.log("rempli les champs")
    }

    console.log(Users)
})

$("#connecter").click(function(){

    let newemail= document.getElementById("exampleInputEmail1").value
    let newpassword= document.getElementById("exampleInputPassword1").value
    

    for (let i = 0; i < Users.email.length && i < Users.motDePasse.length ; i++ ) {

        if (newemail== Users.email[i] && newpassword==Users.motDePasse[i]){

                // alert("bienvenue")
                window.open("./page_2.html");

            }else{

            alert("veuillez ressaisir vos données!!")
        }        
        
    }

})

})






