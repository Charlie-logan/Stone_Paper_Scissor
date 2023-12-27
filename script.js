// let a=document.getElementById('ch');
// a.innerHTML=1;
let landing_page=document.getElementsByClassName('scndprt0')[0];

console.log(landing_page);
// a.classList.add('hidden');
// let btn1=document.getElementById('btn1');
let count=0;
// btn1.addEventListener("click",function (){
//     count++;
//     // a.innerHTML=c;
//     landing_page.classList.add('hidden');
//     // a.classList.add('show');
//     console.log(count);
// });
let compScore = document.getElementById('cosc');
let userScore = document.getElementById('ussc');

// Retrieve scores from localStorage on page load
window.addEventListener('DOMContentLoaded', function() {
  let computer = parseInt(window.localStorage.getItem('comp')) || 0;
  compScore.innerHTML = computer;

  let user = parseInt(window.localStorage.getItem('us')) || 0;
  userScore.innerHTML = user;
});

function computer(){
    let computer =          parseInt(window.localStorage.getItem('comp')) || 0;
  computer++;
  window.localStorage.setItem('comp', computer);
  compScore.innerHTML = computer;
}
function UseR(){
    let user = parseInt(window.localStorage.getItem('us')) || 0;
  user++;
  window.localStorage.setItem('us', user);
  userScore.innerHTML = user;
}

let reset=document.getElementById('bo3');
reset.addEventListener('click',function(){
    localStorage.clear();
    let computer = parseInt(window.localStorage.getItem('comp')) || 0;
  compScore.innerHTML = computer;

  let user = parseInt(window.localStorage.getItem('us')) || 0;
  userScore.innerHTML = user;
})

let m1=document.getElementById('img4');
let m2=document.getElementById('img5');
let m3=document.getElementById('img6');

let other=document.getElementById('other');
let new_arr=[];
function appendAll(){
   let b1=document.getElementById('b1');
   let b2=document.getElementById('b2');
   let b3=document.getElementById('b3');
    let arr=[];
    arr.push(b1,b2,b3);
    return arr;
}
function rand(){
    let m=Math.floor(Math.random()*3+1);
    let rd=[];
    // console.log(a);
    if(m==1){
        clone1 = m1.cloneNode(true);
        let c1=img1.dataset.value;
        rd.push(clone1,c1);
    }
    else if(m==2){
        clone1 = m2.cloneNode(true);
        let c2=img2.dataset.value;
        // m1=document.getElementById('img2');
        rd.push(clone1,c2);
    }
    else if(m==3){
        // m1=document.getElementById('img3');
        clone1 = m3.cloneNode(true);
        let c3=img3.dataset.value;
        rd.push(clone1,c3);
    }

    return rd;
}


let spiral=document.getElementById('cir1');
function win(img,clone1){
    UseR();
    count++;
    landing_page.classList.add('hidden');
    other.classList.remove('hidden');
    let d=appendAll();
    // console.log(d[0],d[1],d[2]);
    // let cir=document.getElementById('cir1');
    // cir.classList.remove('hidden');
    // cir.classList.add('cir_win');
    img.style.zIndex = 2;
    spiral.style.zIndex = 1;
    d[0].appendChild(spiral)
    d[0].appendChild(img);
    console.log(img);
    console.log(spiral);
    img.classList.add('mar');
    let c=document.getElementById('win');
    d[1].appendChild(c);
    // d[2]=3;
    d[2].appendChild(clone1);
    clone1.classList.add('mar');
    let i = document.getElementById('bo1');
    i.classList.add('rightsh');
    let j = document.getElementById('bo2');
    j.classList.remove('hidden');
    j.classList.add('show');
    console.log(count);
    other.classList.add('show');
    new_arr.push(img,c,clone1);
}
function lose(img,clone1){
    computer();
    count++;
    img.style.zIndex = 2;
    spiral.style.zIndex = 1;
    landing_page.classList.add('hidden');
    other.classList.remove('hidden');
    other.classList.add('show');
    let d=appendAll();
    // console.log(d[0],d[1],d[2]);
    // let cir=document.getElementById('cir1');
    // cir.classList.remove('hidden');
    // cir.classList.add('cir_los');
    d[0].appendChild(img);
    console.log(img);
    console.log(spiral);
    img.classList.add('mar');
    let c=document.getElementById('lost');
    d[1].appendChild(c);
    // d[2]=3;
    d[2].appendChild(spiral);
    d[2].appendChild(clone1);
    clone1.classList.add('mar');
    console.log(count);
    new_arr.push(img,c,clone1);
}

function tie(img,clone1){
    let cir=document.getElementById('cir1');
    cir.classList.add('hidden');
    count++;
    landing_page.classList.add('hidden');
    other.classList.remove('hidden');
    other.classList.add('show');
    let d=appendAll();
    // console.log(d[0],d[1],d[2]);
    d[0].appendChild(img);
    console.log(img);
    console.log(spiral);
    img.classList.add('mar');
    let c=document.getElementById('tie');
    d[1].appendChild(c);
    // d[2]=3;
    d[2].appendChild(clone1);
    clone1.classList.add('mar');
    console.log(count);
    new_arr.push(img,c,clone1);
}
let img4=document.getElementById('img4');
let img5=document.getElementById('img5');
let img6=document.getElementById('img6');
let k1=img1.dataset.value; //hand
let k2=img2.dataset.value; //rock
let k3=img3.dataset.value; //scissors

function hand(element){
    let d=rand();
    let k=d[1];
    console.log('hand is selected');
    if(k==k2){
        console.log('1',k,k1,k2,k3);
        win(img4,d[0]);
    }
    else if(k==k3){
        console.log('2',k,k1,k2,k3);
        lose(img4,d[0]);
    }
    else if(k==k1){
        console.log('3',k,k1,k2,k3);
        tie(img4,d[0]);
    }
    else{
        console.log('4',k,k1,k2,k3);
    }
}
function rock(element){
    let d=rand();
    let k=d[1];
    console.log('rock is selected');
    if(k==k3){
        console.log('1',k,k1,k2,k3);
        win(img5,d[0]);
    }
    else if(k==k1){
        console.log('2',k,k1,k2,k3);
        lose(img5,d[0]);
    }
    else if(k==k2){
        console.log('3',k,k1,k2,k3);
        tie(img5,d[0]);
    }
    else{
        console.log('4',k,k1,k2,k3);
    }
}

function scissors(element){
    let d=rand();
    let k=d[1];
    console.log('scissors is selected');
    if(k==k1){
        console.log('1',k,k1,k2,k3);
        win(img6,d[0]);
    }
    else if(k==k2){
        console.log('2',k,k1,k2,k3);
        lose(img6,d[0]);
    }
    else if(k==k3){
        console.log('3',k,k1,k2,k3);
        tie(img6,d[0]);
    }
    else{
        console.log('4',k,k1,k2,k3);
    }
}

let rules=document.getElementById('btn5');
let rules1=document.getElementById('c1');
rules.addEventListener('click',function(){
    count++;
    console.log(count);
    let r1=document.getElementById('r1');
    r1.classList.remove('hidden');
    r1.classList.add('show');
})

function close1(element){
    let r1=document.getElementById('r1');
    r1.classList.add('hidden');
    r1.classList.remove('show');
    console.log(r1);
}

function play_again(element){
    console.log("play again has been clicked ");
    // landing_page.classList.remove('hidden');
    // other.classList.remove('show');
    // other.classList.add('hidden');
    // d=appendAll();
    // d[0].parentNode.removeChild(new_arr[0]);
    // d[1].parentNode.removeChild(new_arr[1]);
    // d[2].parentNode.removeChild(new_arr[2]);
    // other.innerHTML="";
    
    // landing_page.classList.add('show');

}
// let btn2=document.getElementById('btn2');
// btn2.addEventListener('click',function(){
//     count++;
//     landing_page.classList.add('hidden');
//     other.classList.remove('hidden');
//     let d=appendAll();
//     d[2].appendChild(d[0]);
//     d[0].classList.add('mar');
//     let c=document.getElementById('win');
//     d[3].appendChild(c);
//     // d[2]=3;
//     d[4].appendChild(d[1]);
//     d[1].classList.add('mar');
//     let i = document.getElementById('bo1');
//     i.classList.add('rightsh');
//     let j = document.getElementById('bo2');
//     j.classList.remove('hidden');
//     j.classList.add('show');
//     console.log(count);
//     other.classList.add('show');
// });

// let btn3=document.getElementById('btn3');
// btn3.addEventListener('click',function(){
//     count++;
//     landing_page.classList.add('hidden');
//     other.classList.remove('hidden');
//     other.classList.add('show');
//     let d=appendAll();
//     d[2].appendChild(d[0]);
//     d[0].classList.add('mar');
//     let c=document.getElementById('lost');
//     d[3].appendChild(c);
//     // d[2]=3;
//     d[4].appendChild(d[1]);
//     d[1].classList.add('mar');
//     console.log(count);
// });

// let btn4=document.getElementById('btn4');
// btn4.addEventListener('click',function(){
//     count++;
//     landing_page.classList.add('hidden');
//     other.classList.remove('hidden');
//     other.classList.add('show');
//     let d=appendAll();
//     d[2].appendChild(d[0]);
//     d[0].classList.add('mar');
//     let c=document.getElementById('tie');
//     d[3].appendChild(c);
//     // d[2]=3;
//     d[4].appendChild(d[1]);
//     d[1].classList.add('mar');
//     console.log(count);
// });



// let compScore=document.getElementById('cosc');
// let userScore=document.getElementById('ussc');

// let btn6=document.getElementById('btn6');
// let btn7=document.getElementById('btn7');
// let computer=0;let user=0;
// // let obj={};
// btn6.addEventListener('click',function(){
//     computer++;
//     window.localStorage.setItem('comp',computer);
//     let i=window.localStorage.getItem('comp');
//     compScore.innerHTML=i;
// })

// btn7.addEventListener('click',function(){
//     user++;
//     window.localStorage.setItem('us',user);
//     let i=window.localStorage.getItem('us');
//     userScore.innerHTML=i;
// })


// let btn6 = document.getElementById('btn6');
// let btn7 = document.getElementById('btn7');
// let btn8 = document.getElementById('btn8');

// // Update and store scores on button clicks
// btn6.addEventListener('click', function() {
//   let computer = parseInt(window.localStorage.getItem('comp')) || 0;
//   computer++;
//   window.localStorage.setItem('comp', computer);
//   compScore.innerHTML = computer;
// });

// btn7.addEventListener('click', function() {
//   let user = parseInt(window.localStorage.getItem('us')) || 0;
//   user++;
//   window.localStorage.setItem('us', user);
//   userScore.innerHTML = user;
// });

// btn8.addEventListener('click',function(){
//     localStorage.clear();
//     let computer = parseInt(window.localStorage.getItem('comp')) || 0;
//   compScore.innerHTML = computer;

//   let user = parseInt(window.localStorage.getItem('us')) || 0;
//   userScore.innerHTML = user;
// })

