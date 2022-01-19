import "./App.css"
import React from "react";
import ComFilhos from './component/basicos/ComFilhos'
import Card from './component/Layout/Card'
import Primeiro from './component/basicos/Primeiro'
import ComParametro from './component/basicos/ComParametro'
import Repecicao from "./component/basicos/Repecicao"
import Condicional from "./component/basicos/Condicional"
import CondicionalComIf from "./component/basicos/CondicionalComIf"
export default (props) =>
    <div className="App">
        <Card titulo="Primeiro" >
            <Primeiro />
        </Card>
        <Card titulo="Componentes com parâmetros" >
            <ComParametro titulo="Isso é um titulo" subtitulo="Isso é um subtitulo" />
            <ComParametro titulo="Isso é outro titulo" subtitulo="Isso é outro subtitulo" />
        </Card>
        <Card titulo="Componentes com filhos" >
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Beatriz</li>
                    <li>Carol</li>
                    <li>Daniela</li>
                    <li>Elena</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Repeticao" >
            <Repecicao/>
        </Card>
        <Card titulo="Condicional v1" >
            <Condicional numero={10}/>
        </Card>
        <Card titulo="Condicional Com If" >
            <CondicionalComIf numero={11}/>
        </Card>
    </div >