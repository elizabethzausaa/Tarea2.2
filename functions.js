const sayHi = (name) => { //function
    console.log(`Hola, ${name}`);
   };
   const double = (number) => { //function
    console.log(number * 2);
   };
   module.exports = { //export default
    sayHi,
    double
   };