import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

function ProductCreate() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState("에러가 발생하였습니다.");

    const [inputs, setInputs] = useState({
        name : '',
        productInformation : '',
        costPrice : 0,
        sellingPrice : 0,
        status : 'ACTIVE',
        adminId : 1,
        categoryId : '0',
        categoryDetailId : '0'
    });

    const onChange = (e) => {
        const {value, name} = e.target;

        setInputs({
            ...inputs,
            [name]:value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        setLoading(true);
        const product = {
            "name" : inputs.name,
            "cost_price" : inputs.costPrice,
            "category" : inputs.categoryId,
            "category_detail" : inputs.categoryDetailId,
            "selling_price" : inputs.sellingPrice,
            "product_information" : inputs.productInformation
        };

        console.log(product);

        try {
            const response = await axios.post("http://localhost:8080/api/products",product,{"Content-Type" : "application/json"});
                // .then((response) => {
                //     return response;
                // }).catch((error) => {
                //    return error;
                // });

            console.log(response);

            if (response.data.code !== 200) {
                setErrorMessage("요청에 실패하였습니다.");
            } else {
                console.log("생성완료");
            }

        } catch (e) {
            setError(e);
        }

        setLoading(false);
    }

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>{errorMessage}</div>;

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formHorizontalEmail">
                <Form.Label>상품명</Form.Label>
                <Form.Control type="string" placeholder="꽃무늬 신상" name="name" value={inputs.name} onChange={onChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>원가</Form.Label>
                <Form.Control type="string" placeholder="500" name="costPrice" value={inputs.costPrice} onChange={onChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>판매가</Form.Label>
                <Form.Control type="string" placeholder="1000" name="sellingPrice" value={inputs.sellingPrice} onChange={onChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>카테고리</Form.Label>
                <Form.Control as="select" name="categoryId" value={inputs.categoryId} onChange={onChange}>
                    <option value="0">선택</option>
                    <option value="1">상의</option>
                    <option value="2">하의</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>카테고리 상세</Form.Label>
                <Form.Control as="select" name="categoryDetailId" value={inputs.categoryDetailId} onChange={onChange}>
                    <option value="0">선택</option>
                    <option value="1">긴팔</option>
                    <option value="2">짧은팔</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>상품 상세 정보</Form.Label>
                <Form.Control as="textarea" rows="3"  name="productInformation" value={inputs.productInformation} onChange={onChange}/>
            </Form.Group>

            <div style={{textAlign:'center'}}>
                <Button variant="warning">취소</Button>
                <span>&nbsp;&nbsp;</span>
                <Button variant="success" type="submit" >저장</Button>
            </div>
        </Form>
    )
}

export default ProductCreate;
