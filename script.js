//je créé le message qui sera renvoyé lorsque l'utilisateur click sur le bouton "Send"
const message = "Thanks for your message, we will get back to you as soon as possible"

//lorsque l'utilisateur clique sur le bouton "Send", un message d'alerte s'affiche 
document
.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert(message);
});