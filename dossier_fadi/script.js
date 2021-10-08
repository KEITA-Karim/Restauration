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
        console.log("Veuillez remplir les champs")
    }

    console.log(Users)
})


$("#connecter").click(function(){

    let newemail= document.getElementById("exampleInputEmail1").value
    let newpassword= document.getElementById("exampleInputPassword1").value

    for (let i = 0; i < Users.email.length && i < Users.motDePasse.length ; i++ ) {

        if (newemail== Users.email[i] && newpassword==Users.motDePasse[i]){

                 alert("Vous êtes connecté! appuyez sur ok pour accéder au site")
                window.open("./commander.html");

            }else{

            alert("Veuillez ressaisir vos données!!")
        }        
        
    }

})

})


$(document).ready(function(){
    $("#send-message").click(function(){
    let firstName = $("#recipient-Firstname").val()
    let nickName = $("#recipient-Nickname").val()
    let mail = $("#recipient-email").val()
    let message = $("#message-text").val()

        if(firstName && nickName && mail && message !== "") {
    
              alert("Nous avons réçu votre message")
              location.reload();
                    
                }else{
    
                alert("Veuillez ressaisir vos données!!")
            }        
    })


    $("#fermer").click(function(){
    
              location.reload(); 
    })
})
       



$(document).ready(function(){
    $("#valid-modif").click(function(){
    let nickName_1 = $("#recipient-Nickname_1").val()
    let firstName_1 = $("#recipient-Firstname_1").val()
    let mail_1= $("#recipient-email_1").val()
    let password_1 = $("#recipient-password_1").val()
    let mobile_1 = $("#recipient-mobile_1").val()
    let adresse_1 = $("#inputAdresse_1").val()
    let codePostal_1 = $("#inputGroupSelect01_1").val()

        if(nickName_1 && firstName_1 && mail_1 && password_1 && mobile_1 && adresse_1 && codePostal_1 !== "") {


            Users.nom.push(nickName_1)
            Users.prenom.push(firstName_1)
            Users.email.push(mail_1)
            Users.motDePasse.push(password_1)
            Users.phone.push(mobile_1)
            Users.adresse.push(adresse_1)
            Users.codePostal.push(codePostal_1)
    
              alert("Nous avons modifié vos informations")
              console.log(Users)
              location.reload();
                    
                }else{
    
                alert("Veuillez ressaisir vos données!!")
            }        
    })


    $("#annuler").click(function(){
    
              location.reload(); 
    })
})






