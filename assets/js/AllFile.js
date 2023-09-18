const show = () =>{
    const LoggedIn = localStorage.getItem("loggedIn")
    if(LoggedIn){
        // alert("true")
        console.log("true")
    }
    else{
        window.location.href = "/"
        // alert("false")
    }
}
show()