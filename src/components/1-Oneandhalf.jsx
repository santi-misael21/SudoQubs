import { useState } from "react"
import { Vertex } from "../functions/10-Estructures"
import { updateEvery } from "../functions/14-Global"
import { updateQubsBy } from "../functions/16-UpdateQubsBy"
import { create3 } from "../functions/17-Create"
import Two from "./2-Two"
import '../styles/ask.css';
import { kill } from "../functions/25-Generate"
import { Seniority } from "../functions/7-Seniority"

export default function Auxiliar({sizing}){

    // let[sudoku, setSudoku] = useState(undefined)
    let siz= parseInt(sizing)
    let sudoku
    let[react, setReact] = useState()
    let[state, setState] = useState({mood: undefined})

    console.log({siz, react, mood:state.mood})
    // console.log(equal(size,s1,u1))

    function equal(size,c1_s,s1){
        for(let pp=0; pp<size;pp++){
            if(!c1_s.rows[pp].every(function(v,i) { return v === s1.rows[pp][i] } )) return false;
        }
        return true
    }

    function generate(){

        //Próximamente: create3() tendrá adentro suyo las siguientes 4 líneas:
        var size= 0; size= parseInt(sizing)
        var s1= {}; s1= Vertex(size) //Estructuras
        var u1= {}; u1= updateEvery(size*size, s1.rows, s1.cols, s1.boxs, s1.qubs) //Con 0s
        var c1_s= {}; c1_s= create3(size, s1.rows, s1.cols, s1.boxs, s1.qubs) //Con el sudoku lleno
        c1_s.qubs = updateQubsBy('rows', s1.rows) //Qubs actualizados
        console.log({before:c1_s})

        let killed= Seniority(5,siz*siz) 

        let ready= kill(killed, c1_s.qubs)

        updateEvery(siz*siz,c1_s.rows,c1_s.cols,c1_s.boxs,c1_s.qubs)

        console.log({after:c1_s})
        console.log('lo que estás buscando',equal(size,c1_s,s1))

        sudoku= (c1_s) // acá se cambia y listo
        setReact(sudoku)
        setState({mood: 'generated'})
    }

    function del(){
        sudoku= (undefined)
        setReact(sudoku)
        setState({mood: 'deleted'})
    }

    // if(sudoku && !react)setReact(sudoku)
    // if(!sudoku && react)setReact(undefined)

    return (
        <div>
            <div>
                {sizing &&
                <button onClick={generate}>
                    Generate
                </button>}
                <button onClick={del}>
                    Delete
                </button>
                {react && 
                <Two rows={react.rows} sizing={siz} cols={react.cols} qubs={react.qubs} boxs={react.boxs}/>
                }
            </div>
        </div>
    )
}