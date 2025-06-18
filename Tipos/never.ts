(() => {
    // Se usa para indicar que la función va a terminar con error y luego ya no se va a ejecutar mas nada.
    // Una vez que se ejecuta el never, lo que venga después ya no funciona.
const error = (message: string):(never|number) => {
    if(false){
        throw new Error(message)
    }
    return 1
}
error('Auxilio');
console.log('Hola Mundo');


})()