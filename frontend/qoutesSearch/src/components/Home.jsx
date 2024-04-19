import axios from 'axios';
import { useEffect } from 'react';

import Card from 'react-bootstrap/Card';


function Home() {
   
    const handleAdd = async () => {
      
        const data = await axios.get("http://localhost:2500/");
    };

    useEffect( () => {
        handleAdd();
    }, [])

    return (
        <>
        <div>
            <p> </p>
          <h3></h3>
            <p></p>
        </div>
        </>
        
    );
};

export default Home;