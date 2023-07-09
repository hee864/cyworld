const changeFocus1=()=>{
    let phone1=document.getElementById("p1").value
    if(phone1.length===3){
        document.getElementById("p2").focus()
    }
}
const changeFocus2=()=>{
    let phone2=document.getElementById("p2").value
    if(phone2.length===4){
        document.getElementById("p3").focus()
    }
}
const changeFocus3=()=>{
    let phone3=document.getElementById("p3").value
    if(phone3.length===4){
        document.getElementById("sendMessage").focus()
        document.getElementById("sendMessage").disabled=false
    }
}//전화번호 마지막 4자리 입력시 인증번호 보내기 활성화
const init=()=>{
    document.getElementById("sendMessage").disabled=true
    document.getElementById("complete").disabled=true
    document.getElementById("target").innerHTML="000000"
    document.getElementById("timer").innerHTML="3:00"
    document.getElementById("sendMessage").setAttribute("style","background-color:none;")
    document.getElementById("complete").setAttribute("style","background-color:none;")
}//초기화 함수

let isStarted=false

let auth=()=>{

    //인증확인 버튼 활성화
   
    
    if(isStarted===false){
        isStarted=true;
        document.getElementById("complete").disabled=false;
        const randomNum=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
       document.getElementById("target").innerText=randomNum
        let time=10
        let timer
        timer=setInterval(function(){
            if(time>=0)
            {
                let min=Math.floor(time/60)
                let sec=String(time%60).padStart(2,"0")
                document.getElementById("timer").innerText=min+":"+sec
                time=time-1
                
            }
            else{
                document.getElementById("complete").disabled=true
                isStarted=false;//타이머 종료와 함께 if명령문 통과 가능
                console.log("타이머 작동중")
                clearInterval(timer)//setInterval 함수를 해제시킴
            }
        },1000)
    }else{
        //타이머 작동중
    }
}
const checkComplete=()=>{//문자인증이 완료되었을때
    init();
    document.getElementById("complete").innerHTML="인증완료"
    document.getElementById("SignUp").disabled=false
    document.getElementById("signUp").setAttribute("style","background-color:blue;")
}
const signupCheck=()=>{
    //회원가입 사항 체크
}