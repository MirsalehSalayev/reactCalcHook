import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://northwind.vercel.app/api/categories');
                setData(response.data);
            } catch (error) {
                console.error('Error', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data ? data.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            )) : <p>Loading...</p>}
        </div>
    );
}

export default Axios;
