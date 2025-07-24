let ciwaan = document.createElement('h1');
let body = document.querySelector('body');
let ciwaan2 = document.createElement('h3');
let p = document.createElement('p');


ciwaan.innerHTML = "FrontEnd Roadmap."
ciwaan2.innerHTML = "Learn HTML, CSS, JavaScript"
p.innerHTML = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
`
body.appendChild(ciwaan);
body.appendChild(ciwaan2)
body.appendChild(p)

body.style.backgroundColor = 'black'
ciwaan.style.color = 'white'
ciwaan2.style.color = 'white'
p.style.color = 'white'
ciwaan.style.backgroundColor = 'orange'
ciwaan.style.textAlign = 'center';
ciwaan.style.padding = '10px'
ciwaan.style.borderRadius = '50px'
