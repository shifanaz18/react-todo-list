import { Container, Button, InputGroup, Form, Row, Col, Modal, ToggleButton, Alert } from 'react-bootstrap';
import { useState } from "react";
import "./List.css";

const DataList = (props) => {
    const [editKey, setEditKey] = useState(-1);
    const [show, setShow] = useState(false);
    const [editText, setEditText] = useState('');


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (key) => {
        setEditText(props.listData[key].name)
        setEditKey(key);
        //setShow(true);
    }

    return (
        <div className='list-data'>
            {props.listData.map((e, i) => {
                return <Alert variant={e.completed ? 'success' : 'secondary '} >
                    <Row className='List-item' key={e.key} >

                        <Col xs={7} >
                            {i == editKey ? <Form.Control type="text" value={editText} onChange={(e) => setEditText(e.target.value)} /> : e.name}

                        </Col>

                        <Col><Button variant="danger" onClick={() => props.handleDelete(e.key)}>Remove</Button>

                            {i == editKey ? <Button variant="success" onClick={() => {
                                props.handleSave(e.key, editText);
                                setEditKey(-1);
                            }} >Save</Button> : <Button className='btn-layout' variant="primary" onClick={() => handleEdit(i)} >Edit</Button>}

                            {/* <Form.Check className='Checkbox-layout' ria-label="option 1" checked={e.completed}
                            onChange={(ev) => props.handleChange(e.key, ev.target.checked)} /> */}
                            <ToggleButton

                                id={e.key}
                                type="checkbox"
                                variant="outline-success"
                                value={e.key}
                                checked={e.completed}
                                onChange={(ev) => props.handleChange(e.key, ev.target.checked)}
                            >
                                Completed
                            </ToggleButton>
                        </Col>

                    </Row>
                </Alert>
            })}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body onChange={(e) => props.handleEdit(e.target.value, props.listData[editKey].key)}>

                    {props.listData[editKey] ? props.listData[editKey].name : ''}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default DataList;