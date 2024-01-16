//Primos
let n=89, c=2;

while (n%c && n>1) {
    c++;
}
if (c==n) {
    console.log(n, "es primo");
} else {
    console.log(n, "no es primo");
}