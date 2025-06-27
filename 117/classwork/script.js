const btn = document.querySelector('#btn');
let p2 = document.querySelector('#p2');
let p1 = document.querySelector('#p1');


async function JK() {
    let check = document.querySelector('#chk').checked;
    p1.innerHTML = 'Loading...';
    p2.innerHTML = 'loading...';
    let link = 'https://v2.jokeapi.dev/joke/Any?type=twopart';
    if (check) {
        link += '&safe-mode';
    }
    try {
        const res = await fetch(link);
        const res2 = await res.json();
        p1.innerHTML = res2.setup;
        setTimeout(()=> {
            p2.innerHTML = res2.delivery;
        },1000);
        btn.removeEventListener('click', JK);
    } catch (error) {
        console.log('Error', error);
    }
}

setInterval(() => btn.addEventListener('click', JK),1000);