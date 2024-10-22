// Event listeners for navigation buttons
const Home = document.getElementById('Home');
Home.addEventListener('click', () => {
    window.location.href='../home/index.html';
});
const user=localStorage.getItem('user')
const Signout = document.getElementById('Signout');
Signout.addEventListener('click', () => {
    localStorage.removeItem('users')
    window.location.href='../login/index.html';
});

// Profile information elements
const profile_image = document.getElementById('profile_image');
const Username = document.getElementById('Username');
const First_Name = document.getElementById('First_Name');
const last_Name = document.getElementById('last_Name');
const email = document.getElementById('email');
const Current_Password = document.getElementById('Current_Password');
const New_Password = document.getElementById('New_Password');
const Confirm_New_Password = document.getElementById('Confirm_New_Password');
const Current_Address = document.getElementById('Current_Address');
const New_Address = document.getElementById('New_Address');
const phone = document.getElementById('phone');

const userID=localStorage.getItem('users')

async function UserAllData() {
    try {
        const res = await firebase.firestore().collection('users').doc(userID).get();
        const userData = res.data();
        console.log(userData);
        profile_image.src=userData['profileimg']
        Username.value=userData['username']
        First_Name.value=userData['First_Name']
        last_Name.value=userData['last_Name']
        email.value=userData['email']
        Current_Password.value=userData['Current_Password']
        New_Password.value=userData['New_Password']
        Confirm_New_Password.value=userData['Confirm_New_Password']
        Current_Address.value=userData['Current_Address']
        New_Address.value=userData['New_Address']
        phone.value=userData['phone']



  

        // Update profile information elements with user data
        if (userData) {
            Username.textContent = userData.username || '';
            First_Name.textContent = userData.first_name || '';
            last_Name.textContent = userData.last_name || '';
            email.textContent = userData.email || '';
            Current_Address.textContent = userData.current_address || '';
            phone.textContent = userData.phone || '';
            // Add more fields as needed
        }
    } catch (e) {
        Toastify({
            text: `Error: ${e.message}`,
            className: "info",
            style: {
                background: "#33383e",
                color: '#fcd319'
            }
        }).showToast();
    }
}

UserAllData();
