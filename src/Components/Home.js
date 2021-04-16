
import React from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';

function Main(){
    return(
        <section className='main'>
            <h2 className='main__heading2'> As the program is going to end soon, it's time to plan!!! </h2>
            <h2 className='main__heading3'> How are you going to reward yourselves???</h2>
            <div className = 'main__linkGroup'>
                <Link to='./books' className='link main__img main__img--1'>
                    <p className = 'main__imgTitle'>Books</p>
                </Link>
                <Link to='./movies' className='link main__img main__img--2' >
                    <p className = 'main__imgTitle'>Movies</p>
                </Link>
            </div>
        </section>
    )
}
export default Main;
