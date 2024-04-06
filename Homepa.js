import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the About page
        navigate('/search');
    };

    return (
        <div>  
            <h2 className='h2'>Unlimited Movies, TV shows and more</h2>
            <h3 className='h3'>Watch anytime and anywhere</h3> 
            <div className='class1'>
                <div className='class2'>
                    <button className='class3' type='button' onClick={handleClick}>WATCH HERE</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
