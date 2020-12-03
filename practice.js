// your javascript file

    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

    container.appendChild(content);


    const p = document.createElement('p');
    p.style.color="red";
    p.textContent ="Hey I'm red!"
    container.appendChild(p);

    const header3 = document.createElement('h3');
    header3.style.color="blue";
    header3.textContent ="I'm a blue h3!"
    container.appendChild(header3);

    const box = document.createElement('div');
    box.setAttribute('style', 'background: pink');  
    box.style.border="thick solid black"
    
    const p2 = document.createElement('p');
    const header1 = document.createElement('h1');
    header1.textContent = "I'm in a div!";

    p2.textContent = "METOO!";

    box.appendChild(header1);
    box.appendChild(p2);

    container.appendChild(box);



