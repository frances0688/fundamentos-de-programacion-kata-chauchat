let cargador = [
    "pium!",
    "pium!",
    "pium!",
    "pium!",
    "pium!",
    "pium!",
    "pium!"
];

function chauchat(arr){
    let ramita = Math.random();
    if (ramita > 0.8) {
        return console.log("Illo, me he quedao pillá!");
    }
    for (i=0; i<arr.length; i++) {
        if(i%3==0){
            console.log('');
        }
        console.log(arr[i])
    }
}



