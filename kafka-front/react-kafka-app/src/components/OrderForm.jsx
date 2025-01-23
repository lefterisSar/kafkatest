import React, { useState } from "react";
import axios from "axios";

const OrderForm = () => {
    const [formData, setFormData] = useState({
        customerName: "",
        product: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("/api/orders", formData);
        console.log(response.data);
        setFormData({ customerName: "", product: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Customer Name"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            />
            <input
                type="text"
                placeholder="Product"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            />
            <button type="submit">Place Order</button>
        </form>
    );
};

export default OrderForm;
