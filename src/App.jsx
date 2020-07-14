import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';

const App = () => {

    const [item, setItem] = useState("");
    const [array, setArray] = useState([]);

    const Trigger = (event) => {
        setItem(event.target.value);
    };

    const listofItems = () => {
        setArray((prev)=> {
            return [...prev,item];
        });
        setItem(" ");
    };

    return (
        <div>
            <div className="main_div">
                <div className="center_div">
                    <br />
                        <h1>To Do List</h1>
                    <br />
                    <input 
                        type='text'
                        value={item}
                        placeholder='Add Items' 
                        onChange={Trigger} 
                    />
                    <Button className='newBtn' onClick={listofItems}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        { array.map((val,idx) => {
                            return <ListCom key={idx} text={val} />;
                        }) }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default App;