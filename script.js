let decbtn = document.getElementById("decrease")
let resetbtn = document.getElementById("reset")
let incbtn = document.getElementById("increase")
let output = document.getElementById("output")
let cnt =0;
decbtn.addEventListener('click',()=>{
    if(cnt>0){
        cnt--;
    }
    output.innerHTML=`${cnt}`   
});

incbtn.addEventListener('click',()=>{
    cnt++;
    output.innerHTML=`${cnt}`

})
resetbtn.addEventListener('click',()=>{
    cnt=0;
    output.innerHTML=`${cnt}`
})


