// devuelve un array que dice qué qubs vamos a rellenar, 
// donde el array no indique, ignoramos

function Seniority(level, loop){ // level= entre 1 y 10
    /*
    Params: 
    level => nivel de dificultad, menos estrellas más difícil, nivel 1 most diff
    loop  => cantidad de qubs del sudoku en cuestión
    */
    if(level < 0 || level > 10) return undefined
    let l = Math.floor(level / 2 * 0.1 * loop + loop * 0.25)
    let r = []

    for (let a=0; a< l; a++){
        let random = Math.ceil(Math.random()* loop)
        let cont = false
        for(let b=0; b< r.length;b++){
            if(random===r[b]){
                a--
                cont = true
            }
        }
        if(cont) continue
        r.push(random)
    }
    return r
}

function createSelect(howmuch){
    let ar=[]
    for(let a=1; a<= howmuch;a++){
        ar.push(a)
    }
    return ar
}

export {
    Seniority,
    createSelect,
}