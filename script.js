function sayHello() {
    let userName = prompt("What is your name?");
    if (userName) {
        alert("Hello, " + userName + "!");
    } else {
        alert("Hello!");
    }
}
