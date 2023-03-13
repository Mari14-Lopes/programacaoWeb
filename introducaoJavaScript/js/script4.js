function imprimir(){
    for(let i = 0; i <= 8; i++) {
        let str = "";
        for(let j = 1; j <= i; j++){
        str += j+" ";
        }
        console.log(str);
    }
}