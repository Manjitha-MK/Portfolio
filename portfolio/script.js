var typed = new Typed(".text", {
    strings: ["Fronted Developer", "YouTuber", "Web Developer"],
    typeSpeed: 100,
    BackSpeed: 100,
    backDelay: 1000,
    loop: true
})

function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("sub").value,
        message: document.getElementById("msg").value
    };
    
const serviceID= "service_he94ekh";
const templateID = "template_amx30ik";

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("sub").value = "";
        document.getElementById("msg").value = "";
        console.log(res);
        alert("Your message sent successfully");

    })
    .catch((err) => console.log(err));
}


