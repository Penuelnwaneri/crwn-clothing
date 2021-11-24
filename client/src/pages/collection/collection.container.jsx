import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';

import {compose} from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionPage from './collection.component';


const mapStateToProps = createStructuredSelector({
    isLoading:state => !selectIsCollectionLoaded(state)
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionContainer;


