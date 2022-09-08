import React, {useState} from 'react';
import '../style.css'
function DataView({item}) {
    const [isDropCompany, setIsDropCompany] = useState(false)
    const [isDropAddress, setIsDropAddress] = useState(false)
    const [isNestedDropDown, setIsNestedDropDown] = useState(false)
    function dropCompany(event){
        event.stopPropagation()
        setIsDropCompany(!isDropCompany)
    }
    function dropAddress(event){
        event.stopPropagation()
        setIsNestedDropDown(false)
        setIsDropAddress(!isDropAddress)
    }
    function nestedDropDown(event){
        event.stopPropagation()
        setIsNestedDropDown(!isNestedDropDown)
    }
    return (
                      <ul>
                        <li>Անուն {item.firstName}</li>
                        <li>Ազգանուն {item.lastName}</li>
                        <li>Տարիք {item.age}</li>
                        <li>Հեռախոսահամար {item.phone}</li>
                        <li>Email {item.email}</li>
                        <li role='button'  onClick={dropCompany}>company
                            <ul className={`drop ${isDropCompany?"viscomp":"hidcomp"}`} onClick={e=>e.stopPropagation()}>
                                <li>Ընկերության անուն {item.company.name}</li>
                                <li>Փաշտոն {item.company.catchPhrase}</li>
                            </ul>
                        </li>
                        <li role='button' onClick={dropAddress}>Address
                            <ul className={`drop ${isDropAddress?"visad":"hidad"}`} onClick={e=>e.stopPropagation()}>
                                <li>Քաղաք {item.address.city}</li>
                                <li>Փողոց {item.address.street}</li>
                                <li>Թաղամաս {item.address.suite}</li>
                                <li>ՓոստԿոդ {item.address.zipcode}</li>
                                <li role='button' onClick={nestedDropDown}>geo
                                    <ul className={`drop ${isNestedDropDown?"nested-vis":"nested-hide"}`} onClick={e=>e.stopPropagation()}>
                                        <li>կորդինատ 1 {item.address.geo.lat}</li>
                                        <li>կորդինատ 2 {item.address.geo.lng}</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
    );
}

export default DataView;