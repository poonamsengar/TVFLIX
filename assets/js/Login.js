//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value !== storedName){
        alert('Email Error ');

    }else if(userPw.value !== storedPw){
        alert('Password Error ');
    }else {
        localStorage.setItem("loggedIn",true);    
        window.location.href = "Home.html" 
        alert('You are logged in.');
        
    }
}
