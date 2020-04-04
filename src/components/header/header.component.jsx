import React from 'react';

import './header.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>LOJA</Link>
            <Link className='option' to='/shop'>CONTATO</Link>
            {
                currentUser ?
                <div className='option' onClick={ () => auth.signOut()}>SAIR</div>
                :
                <Link className='option' to="/signin">ENTRAR</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />
        }
        
        

    
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);