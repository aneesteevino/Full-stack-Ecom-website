const SignUp_btn=document.getElementById('SignUp_btn')

SignUp_btn.addEventListener('click',()=>{
    window.location.href='../Signup/index.html'

})

const Email=document.getElementById('email')
const password=document.getElementById('password')







const login_btn=document.getElementById('login_btn')

login_btn.addEventListener('click',async()=>{
    if(Email.value===''||password.value===''){
        Toastify({
            text: "Please fill all the fields",
            className: "info",
            style: {
              background: "#33383e",color:'#fcd319'
            }
          }).showToast(); 
          return
        }

    try{

          const res= await firebase.auth().signInWithEmailAndPassword(Email.value, password.value)
          console.log(res.user.uid)
          localStorage.setItem("users",res.user.uid)
          Toastify({
            text: "login sucessfull",
            className: "info",
            style: {
              background: "#33383e",color:'#fcd319'
            }
          }).showToast(); 


          setTimeout(()=>{
            window.location.href="../home/index.html"
          },1500)



         }catch(e){
            Toastify({
                text: `Error:${e.message}`,
                className: "info",
                style: {
                  background: "#33383e",color:'#fcd319'
                }
              }).showToast(); 
         }
    window.location.href="../home/index.html"
}

)