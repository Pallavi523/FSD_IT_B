const btn1=document.getElementById("addpara");
btn1.addEventListener("click",()=>{
    const para=document.createElement("p");
    para.innerHTML="<h1>This is new Paragraph</h1><h2>  *_*  ------------START FROM HERE----------  *_*  ";
    para.style.color="White";
    para.style.backgroundColor="purple";
    document.body.append(para);
})