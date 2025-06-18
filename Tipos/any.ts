(()=>{
    //Se recomienda usar any lo menos posible
    let avenger: any = 123; //Acepta cualquier cosa
    let exists; // Por defecto va a ser de tipo 'any'
    let power; 

    avenger = 'Dr strange'; //Acá cambiamos el tipo de dato
    //Y como fue declarado en 'any', lo acepta
    console.log( avenger.chart(0)); // Devuelve la D del string
    //Acá hacemos un casteo sin cambiar el tipo de dato
    console.log( (avenger as string).charAt(0));
    avenger = 150.4687
    //Acá casteamos para que imprima 2 decimales
    console.log( <number>avenger.toFixed(2));



})()