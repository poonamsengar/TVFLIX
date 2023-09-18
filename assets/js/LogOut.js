function Logout(){
    localStorage.removeItem("loggedIn",true);    
    window.location.href = "/" 
}