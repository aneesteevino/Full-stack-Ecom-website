const login_btn=document.getElementById('login_btn')

login_btn.addEventListener('click',()=>{
    window.location.href='../login/index.html'
})

// const SignUp_btn=document.getElementById('SignUp_btn')

// SignUp_btn.addEventListener('click',()=>{
//     window.open('../home/index.html')
// })



const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const SignUp_btn=document.getElementById('SignUp_btn')
let userID=''
console.log(firebase.firestore())
SignUp_btn.addEventListener('click',async()=>{

    if(username.value===''||email.value===''||password.value===''){
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
              SignUp_btn.disabled=true
              SignUp_btn.innerHTML=`<img src="https://bestanimations.com/Animals/Mammals/Dogs/Wolves/wolf-animated-gif-20.gif"        width="50px",height="20px"    />`
            const  res = await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
            console.log(res.user.uid)
            userID=res.user.uid
            Toastify({
                text: 'SignUp Sucessfull',
                className: "info",
                style: {
                  background: "#33383e",color:'#fcd319'
                }
              }).showToast(); 
              
              SignUp_btn.disabled=false
              SignUp_btn.innerHTML=`SignUp`


          }catch(e){
            SignUp_btn.disabled=false
             SignUp_btn.innerHTML=`SignUp`
            Toastify({
                text: `Error:${e.message}`,
                className: "info",
                style: {
                  background: "#33383e",color:'#fcd319'
                }
              }).showToast(); 
          }
            localStorage.setItem(`users`,userID)

            const userData={
                username:username.value,
                First_Name:'',
                last_Name:'',
                email:email.value,
                Current_Password:password.value,
                // New_Password :Current_Password.value.up,
                Confirm_New_Password:password.value,
                userID:userID,
                
                phone:'+92...',
                Current_Address:'',
                New_Address:'',
                profileimg:"https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png"
            }
          try{
           const res = await firebase.firestore().collection('users').doc(userID).set(userData)
           console.log(res)
           Toastify({
            text: "user data saved sucessfully",
            className: "info",
            style: {
              background: "#33383e",color:'#fcd319'
            }
          }).showToast(); 

          }catch(e){
            Toastify({
                text: `Error:${e.message}`,
                className: "info",
                style: {
                  background: "#33383e",color:'#fcd319'
                }
              }).showToast(); 

          }
          window.location.href='../home/index.html'
         
})


