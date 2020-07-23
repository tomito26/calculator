// Business(or backend) logi:
let add = function(number1,number2){
    return number1 + number2;
};
let subtract = function(number1,number2){
    return number1 - number2;
};
let multiply = function(number1,number2){
    return number1 * number2;
};
let divide= function(number1,number2){
    return number1 / number2;
};
// Everything below this line is the user interface(or front-end) logic:
$ (document).ready(function(){
    $('form#add').submit(function(event){
        event.preventDefault();
        let number1 = parseInt($('#add1').val());
        let number2 = parseInt($('#add2').val());
        let result =add(number1,number2)
        $('#output').text(result);
    });
});
