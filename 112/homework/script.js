class math {
    constructor(PI, E, DEFAULT_PRECISION ) {
        this.PI = PI;
        this.E = E;
        this.DEFAULT_PRECISION = DEFAULT_PRECISION;
    }
    
    factorial(n) {
        let res = 1;
        if (n >= 0) {
            for (let i = 1; i <= n; i++) {
            res *= i;
        }
        }
        
        return res;
    }
    ends(a) {
        let b = String(a)
        let c = b.length;
        if (b[c-1] == 5 || b[c-1] == 0) {
            return true;
        }
        return false;
    }
}

class stringa {
    constructor(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }

    reversa(str) {
        let newstr = "";
        for (let i = str.length; i > 0; i--) {
            newstr += str[i-1];
        }
        return newstr;
    }
    get compare(){
        let sum = 0;
        for (let i = 0; i < this.str1.length; i++) {
            sum += (this.str1[i] == this.str2[i]) ? 1 : 0;
        }
        return sum;
    }
    latinos(str1) {
        let newstr = "";
        for (let i = 0 ; i < str1.length; i++) {
            let sssttrr = str1.charCodeAt(i);
            if ((sssttrr >= 65 && sssttrr <= 90) || (sssttrr >= 97 && sssttrr <= 122)) {
                newstr += str1[i];
            }
        }
        return newstr;
    }
}

const string = new stringa("hello", "hello");
console.log(string.reversa("hello"));
console.log(string.compare);
console.log(string.latinos("hello522435h1434"));

const mathh = new math(3.14 , 2.71 , 10);
console.log(mathh.factorial(5));
console.log(mathh.ends(460));