const add = (a, b) => a+b;
console.log(add(1, 2));

const student = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, i am '  + this.name);
    }
};
student.greet();