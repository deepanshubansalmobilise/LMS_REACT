import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import { AppSettings } from '../../../config/app-settings';
import Highlight from 'react-highlight';

function Links(){

    const context = useContext(AppSettings);

  useEffect(() => {
    context.handleSetAppTopMenu(true);
    context.handleSetAppSidebarNone(true);
		
    return () => {
      context.handleSetAppTopMenu(false);
      context.handleSetAppSidebarNone(false);
    };
		// eslint-disable-next-line
	}, []);


    return(
        <>
      
        </>

    )
}

export default Links