import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario')


    const handleClick = () => {
        setName('luigi')
    }

    return ( 
        <div className="home"><h2>{name}</h2>
        <button onClick={() => {handleClick('Hari')}}>Fuck me</button>
        
        </div>
     );
}
 
export default Home;