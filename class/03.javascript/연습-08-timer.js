// ㅣet time=10
// setInterval(function(){
    // if(time>=0){
        // console.log(time) 
    // time=time-1
//    }
// },1000)
//타이머
let time=180
setInterval(function()
            {
                if(time>=0){
                    let min=Math.floor(time/60)
                    let sec=String(time%60).padStart(2,"0")
                    console.log(min+":"+sec)
                    time=time-1
                }
            },1000)
            // 3:00
            // VM1176:7 2:59
            // VM1176:7 2:58
            // VM1176:7 2:57