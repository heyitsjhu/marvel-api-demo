import Logger from './utils/Logger';
import React, { useState, useEffect } from 'react';

import { Cell, Grid, Row } from '@material/react-layout-grid';

import ComicAPI from './api/ComicApi';
import MTopAppBar from './components/TopAppBar';
import MCard from './components/Card';
import MShareDialog from './components/ShareDialog';
import useFetch from './utils/useFetch';

import '@material/react-typography/dist/typography.css';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-layout-grid/dist/layout-grid.css';
import '@material/react-button/dist/button.css';
import '@material/react-snackbar/dist/snackbar.css';
import './App.css';

const ComicApi = new ComicAPI();

const App = () => {
  const data = useFetch(ComicApi.fetchCharacters);
  const [character, setCharacter] = useState(null);
  const [showShare, setShowShare] = useState(null);

  const handleOnShare = item => {
    setShowShare(true);
    setCharacter(item);
  };

  const resetShareAction = () => {
    setShowShare(false);
    setCharacter(null);
  };

  useEffect(() => {});

  Logger.info('data', data);

  return (
    <div className="App">
      <MTopAppBar />
      <Grid>
        <Row>
          {data &&
            data.map(character => {
              const { description, id, name, thumbnail } = character;
              return (
                <Cell key={id} columns={3}>
                  <MCard
                    content={description}
                    onShare={() => handleOnShare(character)}
                    shareable
                    thumbnail={thumbnail}
                    title={name}
                  />
                </Cell>
              );
            })}
        </Row>
      </Grid>
      {character && (
        <MShareDialog
          isOpen={showShare}
          message={`Check out this comic book! ${character.name} #marvel #comicbooks`}
          onClose={resetShareAction}
        />
      )}
    </div>
  );
};

export default App;
