let button = document.querySelector('button');
let body = document.querySelector('body')
let b = document.querySelector('b');
let counter =0
button.addEventListener('click',()=>{
    if(counter >=11){
        // alert("Niyow wuu dhamaaday bas dee naga hadh.")
        body.style.backgroundColor = 'indigo'
        b.innerHTML = disabled
    }
    b.innerHTML = counter ++
})

