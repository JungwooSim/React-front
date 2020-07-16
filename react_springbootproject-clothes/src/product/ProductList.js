import {Button, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState("에러가 발생하였습니다.");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 Boards 를 초기화
                setError(null);
                setProducts(null);

                // loading 상태를 True로 바꾼다.
                setLoading(true);
                const response = await axios.get(
                    "http://localhost:8080/api/products", {
                        headers : {
                            "Content-Type" : "application/json"
                        },
                        params : {
                            "page" : 0,
                            "size" : 10,
                            "is_deleted" : "N"
                        }
                    }
                );

                if (response.data.code !== 200) {
                    setErrorMessage("요청에 실패하였습니다.");
                }
                setProducts(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        }

        fetchProducts();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>{errorMessage}</div>;
    if (!products) return null;

    return (
        <>
            <br />
            <div>
                <Link to={"/product/create"}>
                    <Button variant="primary">상품 등록</Button>
                </Link>
            </div>
            <br />
            <Table>
                <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>카테고리</th>
                    <th>카테고리 상세</th>
                    <th>원가</th>
                    <th>판매가</th>
                    <th>등록인</th>
                    <th>상태</th>
                    <th>등록일</th>
                    <th>수정일</th>
                </tr>
                </thead>
                <tbody>
                {products.data.list.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>
                            <Link to={"/product/"+product.id}>
                                {product.name}
                            </Link>
                        </td>
                        <td>{product.category}</td>
                        <td>{product.category_detail}</td>
                        <td>{product.cost_price}</td>
                        <td>{product.selling_price}</td>
                        <td>{product.admin_name}</td>
                        <td>{product.status}</td>
                        <td>{product.created_date}</td>
                        <td>{product.modified_date}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}

export default ProductList;
