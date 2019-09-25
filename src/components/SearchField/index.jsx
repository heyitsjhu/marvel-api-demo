import React from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import './index.scss';

const MSearchField = props => {
  const { onChange, searchTerm } = props;

  return (
    <TextField
      className="demo-search-field"
      label="Search for character"
      onTrailingIconSelect={() => onChange()}
      trailingIcon={<MaterialIcon role="button" icon="close" />}
    >
      <Input value={searchTerm} onChange={onChange} />
    </TextField>
  );
};

export default MSearchField;
