
const changeFocus1=()=>{
    let phone1=document.getElementById("p1").value
    document.getElementById("p1").addEventListener("input", function(e) {
        if (e.target.value.length > 3) {
            e.target.value = e.target.value.slice(0, 3);
        }
    });
    if(phone1.length===3){
        document.getElementById("p2").focus()
        
    }
    
}
const changeFocus2=()=>{

    let phone2=document.getElementById("p2").value
    document.getElementById("p2").addEventListener("input", function(e) {
        if (e.target.value.length > 4) {
            e.target.value = e.target.value.slice(0, 4);
        }
    });
    if(phone2.length===4){
        document.getElementById("p3").focus()
    }
}
const changeFocus3=()=>{
    let phone3=document.getElementById("p3").value
    document.getElementById("p3").addEventListener("input", function(e) {
        if (e.target.value.length > 4) {
            e.target.value = e.target.value.slice(0, 4);
        }
    });
    if(phone3.length===4){
        document.getElementById("sendMessage").focus()
        document.getElementById("sendMessage").disabled=false
    }
}//전화번호 마지막 4자리 입력시 인증번호 보내기 활성화


var timer;
let isStarted=false

let auth=()=>{

    //인증확인 버튼 활성화
   
    
    if(isStarted===false){
        isStarted=true;
        document.getElementById("complete").disabled=false;
        const randomNum=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
       document.getElementById("target").innerText=randomNum
       document.getElementById("sendMessage").disabled=true
        
       let time=180
        
       timer=setInterval(function(){
            if(time>=0)
            {
                if(document.getElementById("complete").clicked==true)
                {
                    checkComplete()

                }
                
                let min=Math.floor(time/60)
                let sec=String(time%60).padStart(2,"0")
                document.getElementById("timer").innerText=min+":"+sec
                time=time-1
                
            }
            else{
                document.getElementById("complete").disabled=true
                document.getElementById("target").innerText="000000"
                document.getElementById("timer").innerText="3:00"
                isStarted=false;//타이머 종료와 함께 if명령문 통과 가능
                
                clearInterval(timer)//setInterval 함수를 해제시킴
            }
        },1000)
    }else{
        //타이머 작동중
    }
    
}
const checkComplete=()=>{//문자인증이 완료되었을때
    
    alert("인증이 확인되었습니다.");
    document.getElementById("complete").innerText="인증완료"
    document.getElementById("signUp").disabled=false

    document.getElementById("sendMessage").disabled=true
    document.getElementById("complete").disabled=true

    document.getElementById("target").innerText="000000"
    document.getElementById("timer").innerText="3:00"
    clearInterval (timer)

    isStarted=false;
   
}
const checkValue=()=>{
    var email=document.getElementById("email").value;
    

    var name=document.getElementById("name").value;
    
    
    var password=document.getElementById("password").value;
    var passwordCheck=document.getElementById("passwordCheck").value;
    

    var regionSelect=document.getElementById("area");
    var selectOption=regionSelect.options[regionSelect.selectedIndex];

    
    var gender_woman=document.getElementById("gender_woman");
    var gender_man=document.getElementById("gender_man"); 
    
    var value=true
    
    if(!email  ){
        document.getElementById("emailError").style="block";
        value=false
       
    } else if(!email.includes("@")){
        document.getElementById("emailError").style="block";
    }
    if(!name){
        document.getElementById("nameError").style="block";
        value=false
    } 
   
    if(!password){
        document.getElementById("passwordError").style="block";
        value=false
    }
   
    if((!passwordCheck)||(password!==passwordCheck) ){
        document.getElementById("passwordCheckError").style="block";
        value=false
    }
    if(selectOption.value==="지역을 선택하세요"){
        
        document.getElementById("areaError").style="block";
        value=false
    }
    if(!gender_man.checked &&!gender_woman.checked){
        document.getElementById("genderError").style="block";
        value=false
    }

    if(value===true){
        alert("회원가입축하")
    }
    
    
   
}
