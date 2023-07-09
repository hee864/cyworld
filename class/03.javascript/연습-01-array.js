let classmates=["철수", "영희","훈이"]
undefined
classmates
(3) ['철수', '영희', '훈이']
classmates[0]
'철수'
classmates
(3) ['철수', '영희', '훈이']
classmates[2]
'훈이'
classmates.includes("훈이")
true
classmates.includes("맹구")
false
classmates
(3) ['철수', '영희', '훈이']
classmates.length
// 3
classmates.push("맹구")
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.include("맹구")
// VM645:1 Uncaught TypeError: classmates.include is not a function
    // at <anonymous>:1:12
// (익명) @ VM645:1
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']