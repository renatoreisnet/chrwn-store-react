import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/colleciton.component';

const ShopPage = ({ match }) => {
    console.log(match);
    return (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:colllectionId`} component={CollectionPage} />
    </div>
    )
};
    
export default ShopPage;