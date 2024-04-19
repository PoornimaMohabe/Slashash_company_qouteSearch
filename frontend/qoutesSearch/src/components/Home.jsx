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
        
        </>
        
    );
};

export default Home;