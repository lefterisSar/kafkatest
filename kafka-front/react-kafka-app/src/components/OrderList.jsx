import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get("/api/orders");
            setOrders(response.data);
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.customerName} - {order.product} - {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
