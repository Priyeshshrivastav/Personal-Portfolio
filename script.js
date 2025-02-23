document.querySelector(".arrow").style.display="none";
document.querySelector(".hambar").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebargo");
    if(document.querySelector(".sidebar").classList.contains("sidebargo")){
        document.querySelector(".ham").style.display="inline"
        document.querySelector(".arrow").style.display="none"

    }else{
        document.querySelector(".ham").style.display="none"
        setTimeout(()=>{
            document.querySelector(".arrow").style.display="inline"
        },300)

    }


})