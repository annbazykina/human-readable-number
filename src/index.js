module.exports = function toReadable(number) {
    const one = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };
    const two = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    const tree = {
        0: '',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    let x = number.toString().split('');
    
    let num = '';

    if(number.toString().length === 1) {
        number === 0 ? num = 'zero' : num = one[number];
    }
    if(number.toString().length === 2) {
        (x[0] == 1) ?  num = two[number] : num = `${tree[x[0]]} ${one[x[1]]}`;
    }
    if(number.toString().length === 3) {
        if(number % 10 === 0) {
            num = `${one[x[0]]} hundred ${two[number % 100]}`;
        } 
                
        if(number % 100 === 0) {
            num = `${one[x[0]]} hundred`;
        } 
            
        if(number % 10 > 0 && number % 10 < 20) {
            num = `${one[x[0]]} hundred ${two[number % 100]}`;
        }
            
        if(number % 100 > 0 && number % 100 < 10) {
            num = `${one[x[0]]} hundred ${one[x[2]]}`;
        } 
        
        if(number % 100 > 19 && number < 1000 && number % 100 === 0) {
            num = `${one[x[0]]} hundred ${tree[x[1]]}`;
        } 
            
        if(number % 100 > 19 && number < 1000) {
            num = `${one[x[0]]} hundred ${tree[x[1]]} ${one[x[2]]}`;
        } 
            
    }
    return num.trim();
};
console.log(module.exports(898));
