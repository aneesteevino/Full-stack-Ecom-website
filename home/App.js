const user=localStorage.getItem('user')
if(user==null){
    window.open('../login/index.html')
}


const Signout=document.getElementById('SignOut')
Signout.addEventListener('click',()=>{
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