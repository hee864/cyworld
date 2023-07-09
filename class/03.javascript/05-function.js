let auth=()=>{
    const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    // const colorCode="#"+Math.round(Math.random()*0xffffff).toString(16)
    
    document.getElementById("number").innerText=token
    document.getElementById("number").style.color="#"+token
}

