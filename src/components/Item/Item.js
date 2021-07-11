import React from 'react';
import { NavLink } from 'react-router-dom';

export const Item = ({data}) => {

    const {id, title, description, price, pictureUrl} = data;
    
    return (
        <>
            <tr key={id}>
                <td className="align-middle text-center fw-bold">{title}</td>
                <td className="align-middle text-center fw-bold">{description}</td>
                <td className="align-middle text-center fw-bold"> $ {price}</td>
                <td className="align-middle text-center"><img src={pictureUrl} style={{width:'200px'}} className="border border-dark rounded"/></td>
                <td className="align-middle text-center fw-bold">
                    <NavLink exact to={`../item/${id}`}>
                        <button type="button" className="btn btn-primary">Ver producto</button>
                    </NavLink>
                </td>
            </tr>
        </>
    )
}
