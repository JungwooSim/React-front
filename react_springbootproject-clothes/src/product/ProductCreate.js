import React from "react";
import {Container, Form, FormControl, InputGroup} from "react-bootstrap";

function ProductCreate() {
    return (
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>상품명</Form.Label>
                    <Form.Control type="string" placeholder="꽃무늬 신상" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>상품 상세 정보</Form.Label>
                    <Form.Control type="string" placeholder="꽃무늬 신상" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>원가</Form.Label>
                    <Form.Control type="string" placeholder="꽃무늬 신상" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>판매가</Form.Label>
                    <Form.Control type="string" placeholder="꽃무늬 신상" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>카테고리</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>카테고리 상세</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>상품 상세 정보</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
    )
}

export default ProductCreate;
