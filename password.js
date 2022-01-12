$("#password-field").on("click",".eye-button",function(e) {
    e.preventDefault();
    var passwordId = $(this).find("i").attr("id");
    var inputID = (passwordId === "eye-font") ? "#pass" : "#pass2";
    console.log(passwordId, " : ", inputID)
    $("#" + passwordId).toggleClass("fa-eye fa-eye-slash");
    if($(inputID).attr("type") === "password"){
        $(inputID).attr("type","text");
    }
    else{
        $(inputID).attr("type","password");
    }
});

