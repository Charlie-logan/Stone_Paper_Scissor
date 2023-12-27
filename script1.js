let rules=document.getElementById('btn5');
let rules1=document.getElementById('c1');
rules.addEventListener('click',function(){
    // count++;
    // console.log(count);
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