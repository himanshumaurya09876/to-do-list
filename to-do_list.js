const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const history=document.querySelector('.history');
btn.addEventListener('click',addtodo);
input.addEventListener('keypress',addtodokey);

let btns;
let i;
let spans;
function list(){
    btns = document.querySelectorAll('.history button');
    spans = document.querySelectorAll('.history span');
};

function addtodokey(event){
    if(event.which===13){
        addtodo();
    }
}

function addtodo(){
    let todo = input.value;
    if(todo===''){
        alert('Please enter some to dos first.....');
    }
    else{
        todo=`-> ${todo}`;
        let div=document.createElement('div');
        let button=document.createElement('button');
        let span = document.createElement('span');
        let text=document.createTextNode(todo);
        button.innerHTML='x';
        span.appendChild(text);
        div.appendChild(span);
        div.appendChild(button);
        history.appendChild(div);
        input.value = '';
        function done(){
            span.classList.toggle('complete');
            button.classList.toggle('complete1');
        }

        span.addEventListener('click',done);
        //span.onclick=done;

        button.addEventListener('click',function (){
            button.classList.add('del');
            span.classList.add('del');
            div.classList.add('del');
        })
    }
}
