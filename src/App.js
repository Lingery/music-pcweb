import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';

import {HashRouter} from 'react-router-dom';
import TQAppHeader from '@/components/app-header';
import TQAppFooter from '@/components/app-footer';

export default memo(function App() {
    return (
        <HashRouter>
            <TQAppHeader />
            {renderRoutes(routes)}
            <TQAppFooter />
        </HashRouter>
    )
})
