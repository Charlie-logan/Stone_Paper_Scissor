let a=document.getElementById('cir1');
let d=document.getElementById('img1');
let b=document.getElementById('p1');
let c=document.getElementById('btn');

c.addEventListener('click',function(){
    b.appendChild(d);
    b.appendChild(a);
});