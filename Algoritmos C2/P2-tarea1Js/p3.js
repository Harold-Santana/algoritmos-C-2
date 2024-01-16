//Fibonacci
let a=0, b=0, limit=10;
let c=1;
while(limit>0){
    console.log(c);
    a=b;
    b=c;
    c=a+b;
    limit--;
}
