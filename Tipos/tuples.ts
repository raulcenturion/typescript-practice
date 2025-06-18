(()=>{
    //Acá se pueden agregar más valores
    const hero: [string, number, boolean] = ['Dr strange', 100, true];

    //Esto que se muestra abajo no se puede hacer al reves.
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false
    console.log(hero);
    //Tupla hace referencia a 2, pero se pueden agregar más valores
    //Este formato permite controlar los datos que se están manejando


})()