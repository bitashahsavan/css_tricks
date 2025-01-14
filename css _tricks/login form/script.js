const Email=document.getElementById('email');
const PassWord=document.getElementById('password');
const Form=document.getElementById('form');
const errorEmail=document.getElementById('error-email');
const errorPassword=document.getElementById('error-password');

Form.addEventListener('submit' ,(e)=>{
   e.preventDefault();

   if(Email.value === ''){
    errorEmail.innerHTML="email cannot be blank";
    Email.style.border="2px solid red";
   }else{
    errorEmail.innerHTML="";
    Email.style.border="2px solid green";
   }
   if(PassWord.value === ''){
    errorPassword.innerHTML="PassWord cannot be blank";
    PassWord.style.border="2px solid red";
   }else{
    errorPassword.innerHTML="";
    PassWord.style.border="2px solid green";
   }   
})