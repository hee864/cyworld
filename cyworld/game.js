const startWord=()=>{
    let myWord= document.getElementById("myWord").value
    let word=document.getElementById("word").innerText
    let lastWord=word[word.length-1]
    let firstWord=myWord[0]
    if(lastWord==firstWord){
        //정답
        document.getElementById("result").innerText="정답입니다."
        //결과에 정답입니다 출력
        document.getElementById("word").innerText=myWord
        //제시어를 내가 입력한 문자로 바꾸어준다.
        document.getElementById("myWord").value=""
        //정답 이후 빈문자열로 만들어서 다시 문자열을 입력할 수 있게 한다.
    }else{
        document.getElementById("result").innerText="땡!"
        document.getElementById("myWord").value=""
    }
    
}