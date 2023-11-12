//--------Funksiya yazacaqsınız və bu funksiya parametr olaraq number qəbul edir. Əgər number cütdürsə, həmin number-i 2-yə bölürsünüz, təkdirsə 3-ə vurub üzərinə 1 gəlirsiniz. Bu prosesi həmin number 1 olana qədər təkrarlanır ( 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)----------//

const first=function(number){
    let newarray=[];
    while(number !== 1){
     newarray.push(number);
    if(number%2==0){
        number=number/2;
    }
    else{
        number=number*3+1;
    }
} 
newarray.push(number);
return newarray
}
console.log(first(3));

//---------2. Array-dəki ən böyük və ən kiçik ədədi tapın və onların fərqini console-a çıxarın.--------//

let arrays=[2,4,7,8,10,22,5]
let boyuk=arrays[0];
let kicik=arrays[0];

    for(let i=0; i<arrays.length;i++){
        if (arrays[i]>boyuk){
             boyuk=arrays[i];
        }
        else if (arrays[i]<kicik){
             kicik=arrays[i];
        }
    }

let ferq=boyuk-kicik;
console.log(ferq)


//-------3.Funksiya yazacaqsiniz və parametr olaraq array və number qəbul edəcək. Həmin number-in array-də olub-olmadığını yoxlayacaqsınız.------//

let array=[2,4,7,8,10,22,5]
let number=8;
function Func(array,number){
    for(let i=0; i<array.length;i++){
        if(array[i]===number){
            return true;
        } 
    }
    return false
}
console.log(Func(array,number))
