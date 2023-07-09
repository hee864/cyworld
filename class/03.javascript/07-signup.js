const checkValidation=function(){
    
    let email=document.getElementById("email").value
    let pw1=document.getElementById("pw1").value
    let pw2=document.getElementById("pw2").value

    if(email&&pw1 && pw2){
        //모든 빈칸이 비어져있지 않을떄
        document.getElementById("submit").disabled=false 
    }else{
        document.getElementById("submit").disabled=true
        //모든 빈칸이 비어져있을때 
    }

}