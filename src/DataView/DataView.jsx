import React, {useState} from 'react';

function DataView({db}) {
    const [dropDown, setDropDown] = useState(false)
    const [dropDropDown, setDropDropDown] = useState(false)
    function dropOne(event){
        event.stopPropagation()
        setDropDown(!dropDown)
    }
    function dropSecond(event){
        event.stopPropagation()
        setDropDropDown(!dropDropDown)
    }
    return (
        <>
                {db.map((user)=>{
                    return <ul>
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.age}</li>
                        <li>{user.phone}</li>
                        <li>{user.email}</li>
                        <li onClick={dropOne}>address
                            {dropDown ? <ul>
                                <li>{user.address.city}</li>
                                <li>{user.address.street}</li>
                                <li>{user.address.suite}</li>
                                <li>{user.address.zipcode}</li>
                                <li onClick={dropSecond}>
                                    geo
                                    {dropDropDown && dropDown?<ul>
                                        <li>{user.address.geo.lat}</li>
                                        <li>{user.address.geo.lng}</li>
                                    </ul>:""}
                                </li>
                            </ul>:""}
                        </li>
                    </ul>
                })}
        </>
    );
}

export default DataView;