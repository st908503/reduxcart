import React, { useEffect } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';


export default function App() {

    const { cart, totalQuantity } = useSelector((state) => state.allCart)

    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch( getCartTotal())
    },[cart])

    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>

                <MDBNavbarBrand>Navbar</MDBNavbarBrand>

                <Link to='/'>
                    <span>All Products</span>
                </Link>

                <Link to='cart'>
                    <MDBBtn color='dark'>Cart({totalQuantity})</MDBBtn>
                </Link>

            </MDBContainer>
        </MDBNavbar>
    );
}