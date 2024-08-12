const formWrapper=document.querySelector("#userInform")
const name=document.querySelector("#name")
const email=document.querySelector("#email")
const contactMethod=document.querySelector("#contactMethod")

formWrapper.addEventListener("submit",generatePayload)
function eneratePayload(e){
     e.preventDefault();
    //  const checkBox=document.querySelector("input[name="age"]:checked")
     console.log(checkBox)
     const captureResponse={
        name:name.value,
        email:email.value,
        age:checkbox? checkBox.value :"Not Specified",
        contactMethod:contactMethod.value,
     };
     console.log(aptureResponse)
}