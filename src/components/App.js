import React, { useState, useEffect } from 'react';

import { Cell, Grid, Row } from '@material/react-layout-grid';

import ComicAPI from '../api/ComicApi';
import MTopAppBar from './TopAppBar';
import MSearchField from './SearchField';
import MCard from './Card';
import MShareDialog from './ShareDialog';

import './App.scss';

const ComicApi = new ComicAPI();

const App = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showShare, setShowShare] = useState(null);

  const fetchCharacters = async params => {
    const response = await ComicApi.fetchCharacters(params);
    setData(response);
  };

  const handleOnShare = item => {
    setShowShare(true);
    setSelectedCharacter(item);
  };

  const resetShareAction = () => {
    setShowShare(false);
    setSelectedCharacter(null);
  };

  const onSearchInputChange = e => {
    e ? setSearchTerm(e.target.value) : setSearchTerm('');
  };

  useEffect(() => {
    const query = searchTerm !== '' ? { nameStartsWith: searchTerm } : null;

    fetchCharacters(query);
  }, [searchTerm]);

  return (
    <div className="App">
      <MTopAppBar />
      <Grid>
        <Row className="mb-20">
          <Cell columns={12}>
            <MSearchField
              searchTerm={searchTerm}
              onChange={onSearchInputChange}
            />
          </Cell>
        </Row>

        {data && data.length > 0 && (
          <Row>
            {data.map(character => {
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
        )}

        {data && data.length === 0 && (
          <Row>
            <Cell columns="12">No results founds.</Cell>
          </Row>
        )}
      </Grid>
      {selectedCharacter && (
        <MShareDialog
          isOpen={showShare}
          message={`Check out this comic book! ${selectedCharacter.name} #marvel #comicbooks`}
          onClose={resetShareAction}
        />
      )}
    </div>
  );
};

export default App;
