const text = [{"firstname": "bro","lastname": "s","email": "bro@frsh.com","phno": 97908,"designation": "GT","salary": "40000"},{"firstname": "sharon","lastname": "LU","email": "sharon@frsh.com","phno": 9790,"designation": "GT","salary":"40000"}];
var valarr=[];
    for(var i in text){
        var obj = (Object.values(text[i]));
        valarr.push(obj)
    }
console.log(valarr);