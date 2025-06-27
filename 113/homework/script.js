class Text {
    static arr = [];
    constructor(text){
        this.text = text;
        Text.arr.push(this)
    }
    get txt() {
        return `<p>${this.text}</p><br>`;
    }
    static render() {
        let main = document.querySelector('main');
        for (let i = 0; i<Text.arr.length; i++) {
            let txt1 = Text.arr[i];
            main.innerHTML += txt1.txt;

        }
    }
}

new Text("hello");
new Text("hi");
Text.render()