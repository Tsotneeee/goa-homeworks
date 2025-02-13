let btn = document.getElementById("btn");
async function fetcher() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/");
        let data = await res.json();
        console.log(data[1]);
        let map1 = new Map();
        let j = 0;
        for ( let i = 0 ; i < data.length ; i++){
            map1.set(data[i].id, [data[i].title, data[i].body]);
        }

        btn.addEventListener("click", () => {
            if (j < data.length - 1){
                document.body.appendChild(document.createElement("h1")).innerText = data[j].title;
                document.body.appendChild(document.createElement("p")).innerText = data[j].body;
                document.body.appendChild(document.createElement("br"));
                j++;
            } else {
                console.log("no more posts");
            }
        });
        console.log(map1);
    } catch (error) {
        console.log(error);
    }

}

fetcher();