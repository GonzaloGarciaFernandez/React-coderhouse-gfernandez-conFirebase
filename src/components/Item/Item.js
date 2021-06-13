import React from 'react';

export const Item = ({data}) => {

    const {id, title, description, price, pictureUrl} = data;
    
    return (
        <>
            <tr key={id}>
                <td className="align-middle text-center">{id}</td>
                <td className="align-middle text-center">{title}</td>
                <td className="align-middle text-center">{description}</td>
                <td className="align-middle text-center"> $ {price}</td>
                <td className="align-middle text-center"><img src={pictureUrl} style={{width:'200px'}} className="border border-dark rounded"/></td>
                <td className="align-middle text-center">
                    <button type="button" className="btn btn-primary">Ver producto</button>
                </td>
            </tr>
        </>
    )
}
