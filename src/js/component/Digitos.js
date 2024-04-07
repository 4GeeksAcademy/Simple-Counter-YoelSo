import React from 'react'

export const Digitos = ({ Seconds }) => {

    let unidad = Seconds % 10
    let decena = Math.floor(Seconds % 100 / 10);
    let centena = Math.floor(Seconds % 1000 / 100);
    let mil = Math.floor(Seconds % 10000 / 1000);
    let diezMil = Math.floor(Seconds % 100000 / 10000);
    let cienMil = Math.floor(Seconds % 1000000 / 100000);
    console.log(diezMil, mil, centena, decena, unidad)

    return (
        <React.Fragment>
            <div className='display-2 d-flex flex-row justify-content-center gap-4 bg-dark text-white fw-bold pb-2 pt-2'>
                <p className='numbers border border-white border-opacity-25 rounded pt-1 pb-2 ps-3 pe-3 mt-3' id='cienMil'><i class="fa-regular fa-clock"></i></p>
                <p className='numbers border border-white border-opacity-25 rounded pt-1 pb-2 ps-3 pe-3 mt-3' id='cienMil'>{cienMil}</p>
                <p className='numbers border border-white border-opacity-25 rounded pt-1 pb-2 ps-3 pe-3 mt-3' id='diezMil'>{diezMil}</p>
                <p className='numbers border border-white border-opacity-25 rounded pt-1 pb-2 ps-3 pe-3 mt-3' id='mil'>{mil}</p>
                <p className='numbers border border-white border-opacity-25 rounded pt-1 pb-2 ps-3 pe-3 mt-3' id='centena'>{centena}</p>
                <p className='numbers border border-white border-opacity-25 rounded pt-1 pb-2 ps-3 pe-3 mt-3' id='decena'>{decena}</p>
                <p className='numbers border border-white border-opacity-25 rounded pt-1 pb-2 ps-3 pe-3 mt-3' id='unidad'>{unidad}</p>
            </div>
        </React.Fragment>
    )
}
