emailjs.init("zCQGk7ZbWNBfazZrW");

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.sendForm('service_txal9sm', 'template_uo3baxd', this)
        .then(function(){
            console.log('ok')
        })
        .catch(function(error){
            console.log(error);
        })


});
