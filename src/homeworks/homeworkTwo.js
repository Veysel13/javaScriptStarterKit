
//1. soru asal sayılar
function findPrime(...numbers){

    let numberResult=[];

    numbers.forEach(number => {
        
        if (number > 1) {
            numberResult.push(true)
            for (let j = 2; j < number; j++) {
                if (number % j == 0) {
                    numberResult.pop()
                    numberResult.push(false)
                    break
                }
            }
        } else {
            numberResult.push(false)
        }
    });

    return numberResult
}

//console.log(findPrime(2,1,3,4,5,7,11));

//2.soru arkadaş sayılar
function friendNumberControl(a,b){
    let i,totalFirst=0,totalLast=0;
    for(i=1;i<=a;i++){
        if(a%i==0){
            totalFirst=totalFirst + i;
        }
    }
    
    for(i=1;i<=b;i++){
        if(b%i==0){
            totalLast=totalLast + i;
        }
    }
                
    if(totalFirst==totalLast){
        return 1;
    }else 
        return 0;

}

//console.log(friendNumberControl(220,224));

//3 mükemmel sayılar
function perfectNumbers(number){
    let perfectNumber=[];
    for(let i=1; i<=number;i++){ 
        let total=0;
        for(let j=1; j<i-1; j++){
            if(i%j==0)
            {
            total+=j;
            }
        }

        if(total==i)
        perfectNumber.push(i)
    }

 return perfectNumber
}

//console.log(perfectNumbers(1000));


//4 asal sayılar
function primenumberlist(number=1000){
    let perfectNumber=[];
    for (let i = 0; i < number; i++) {
        if(findPrime(i)[0]){
            perfectNumber.push(i)
        }
    }

    return perfectNumber
}

//console.log(primenumberlist(1000));