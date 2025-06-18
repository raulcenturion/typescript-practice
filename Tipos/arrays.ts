(()=>{
    //Si lo dejo así como está, typescript lo toma como tipo number
    //Si agrego un string al arreglo, lo toma como ambos
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    numbers.push(11)
    console.log(numbers);

})()