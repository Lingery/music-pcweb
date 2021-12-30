import React, { memo } from 'react'
import { connect } from 'react-redux'

import { getTopBannersAction } from './store/actionCreators'

memo(function TQRecommend(props) {
    const {getBanners} = props;
    useEffect(() => {
        return () => {
            getBanners();
        }   
    }, [getBanners])

    return (
        <div>
            <h2>TQRecommend</h2>
        </div>
    )
})

const mapStateToProps = (state) => ({
    topBanners: state.recommend.topBanners
});

const mapDispatchToProps = dispatch => ({
    getBanners: () => {
        dispatch(getTopBannersAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(TQRecommend))
