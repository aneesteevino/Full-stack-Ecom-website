const user=localStorage.getItem('users')
if(user==null){
   window.location.href="../Signup/index.html"
}


const Signout=document.getElementById('SignOut')
Signout.addEventListener('click',()=>{
    localStorage.removeItem('users')
    window.open('../login/index.html')

})



let profilebtn=document.getElementById('profile')

profilebtn.addEventListener('click',()=>{
    window.open('../user-panel/index.html')

   
})

const home=document.getElementById('home')
home.addEventListener('click',()=>{
open('../home/index.html')
})