(() => {
    // Se usa para notaciones numéricas que sean semánticamente fácil de leer
    // Se usa para manejar numeraciones
    enum AudioLevel{
        min = 1,
        medium,
        max = 10,
    }
    let currentAudio: AudioLevel = AudioLevel.max
    console.log(AudioLevel);



})()