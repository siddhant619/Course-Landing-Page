const instructorImgs=document.querySelectorAll('.instructor-img');
/* instructorImgs.forEach(function(img){
    /* img.addEventListener('mouseover',function(){
        console.log(this);
    }) 
    
}) */

for(img of instructorImgs){
    img.addEventListener('mouseover',function(){
        instructorImgs[0].classList.toggle('instructor-img-active');
        this.classList.toggle('instructor-img-active');
        let txt=this.nextElementSibling.innerHTML;
        document.getElementById("instructor-text").innerHTML=txt;
    })
}
for(img of instructorImgs){
    img.addEventListener('mouseleave',function(){
        instructorImgs[0].classList.toggle('instructor-img-active');
        this.classList.toggle('instructor-img-active');
        document.getElementById("instructor-text").innerHTML=instructorImgs[0].nextElementSibling.innerHTML;
        //this.nextElementSibling.classList.toggle('hidden');
    })
}
document.addEventListener("scroll", function(){
    if(window.scrollY>100){
        console.log('boo');
        document.getElementById('back-to-top').style.display="inline";
    }
    if(window.scrollY<100){
        console.log('boo');
        document.getElementById('back-to-top').style.display="none";
    }
})
const scrollbtn=document.getElementById('back-to-top');
scrollbtn.addEventListener('click',function(){
    document.documentElement.scrollTop = 0;
})

/* function fun(id){
    let txt=document.getElementById(id).innerHTML;
    //alert(txt);
    document.getElementById("instructor-text").innerHTML=txt;
} */