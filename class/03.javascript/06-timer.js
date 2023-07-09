let isStarted=false;


let auth=()=>{
    if(isStarted===false){

        //타이머가 작동중이 아닐때
        isStarted=true
        document.getElementById("finish").disabled=false
        const randomNum=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("target").innerText=randomNum
        
        let time=10
        let timer
        
        timer=setInterval(function(){//timer라는 변수에 할당될 때 작동
            if(time>=0)
            {
                let min=Math.floor(time/60)
                let sec=String(time%60).padStart(2,"0")
                document.getElementById("timer").innerText=min+":"+sec
                time=time-1
                
            }
            else{
                document.getElementById("finish").disabled=true
                isStarted=false;//타이머 종료와 함께 if명령문 통과 가능
                console.log("타이머 작동중")
                clearInterval(timer)//setInterval 함수를 해제시킴
            }
           
        },1000)
        
        
    }
    else{
        //타이머가 작동중일때
    }
}

