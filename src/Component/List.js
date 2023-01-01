import { useState } from 'react';
import { Container, Button, InputGroup, Form, Row, Col } from 'react-bootstrap';
import "./List.css";

const List = (props) => {
    const [enteredData, setEnteredData] = useState();


    const handleChange = (e) => {
        setEnteredData(e.target.value);
        // console.log(enteredData);
    }


    return (
        <>
            <div>
                <h1 className='center'>To-Do List</h1>
                <br />
                <InputGroup className="mb-3" >
                    <Form.Control className='Input-layout' placeholder='Enter Task Name' onChange={handleChange}
                    />
                    <Button variant="success" id="button-addon2" onClick={() => props.handleClick(enteredData)}>
                        Add
                    </Button >
                </InputGroup>
            </div>
        </>
    )
}

export default List;