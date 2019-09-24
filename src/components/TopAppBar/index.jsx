import React from 'react';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-top-app-bar/dist/top-app-bar.css';

const MTopAppBar = props => {
  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align="start">
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon
                hasRipple
                icon="menu"
                onClick={() => console.log('click')}
              />
            </TopAppBarIcon>
            <TopAppBarTitle>Marvel Comics</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align="end">
            <TopAppBarIcon actionItem tabIndex={0}>
              <MaterialIcon
                aria-label="print page"
                icon="person"
                onClick={() => console.log('print')}
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
