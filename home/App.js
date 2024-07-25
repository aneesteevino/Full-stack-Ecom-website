const user=localStorage.getItem('users')
if(user==''){
   window.location.href="../Signup/index.html"
}


const Signout=document.getElementById('SignOut')
Signout.addEventListener('click',()=>{
    localStorage.removeItem('users')
    window.location.href='../login/index.html'

})



let profilebtn=document.getElementById('profile')

profilebtn.addEventListener('click',()=>{
    window.location.href='../user-panel/index.html'

   
})

const home=document.getElementById('home')
home.addEventListener('click',()=>{
window.location.href='../home/index.html'
})