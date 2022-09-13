
import React from 'react';
import loader from '../../assets/loader.png'



const Spinner=()=>{
    return(
        <section className='container fluid'>
        <img src={loader}  width="60%" alt="Cargando"></img>
        </section>
    )
}
export default Spinner
