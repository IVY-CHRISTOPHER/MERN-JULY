import React, {useState} from "react";
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0.00);
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                <label htmlFor="title">Title</label>
                <input htmlFor="title" onChange={(e)=>setTitle(e.target.value)} type="text" />
                </div>
                <div>
                <label htmlFor="price">Price</label>
                <input htmlFor="price" onChange={(e)=>setPrice(e.target.value)} type="text" />
                </div>
                <div>
                <label htmlFor="desc">Description</label>
                <input htmlFor="desc" onChange={(e)=>setDescription(e.target.value)} type="text" />
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm;