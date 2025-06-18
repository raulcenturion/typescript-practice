(() => {
    // Se usa para indicar que tu función no va a retornar nada
    function callBatman(): void{
        return;

    }
    const callSuperman = (): void => {
        return;
    }
    const a = callBatman()
    console.log(a)
    //Esto va a retornar undefined


})()