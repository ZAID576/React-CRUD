// Lexical scoping JS question

let a = 90;

let print = () => {
    console.log(a);
}

let ab = () => {
    let a = 80;

    print()
};

ab();