import React from 'react';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import './index.scss';

const MTopAppBar = () => {
  return (
    <>
      <TopAppBar fixed>
        <TopAppBarRow>
          <TopAppBarSection align="start">
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon
                hasRipple
                icon="menu"
                onClick={() => console.log('click')}
              />
            </TopAppBarIcon>
            <TopAppBarTitle>Marvel Characters</TopAppBarTitle>
          </TopAppBarSection>

          <TopAppBarSection align="end">
            <TopAppBarIcon actionItem tabIndex={0}>
              <MaterialIcon
                aria-label="account page"
                icon="person"
                onClick={() => console.log('account')}
              />
            </TopAppBarIcon>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  );
};

export default MTopAppBar;
