import React from 'react';
import TruncateMarkup from 'react-truncate-markup';
import { Button } from '@material/react-button';
import Card, {
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@material/react-card';
import MaterialIcon from '@material/react-material-icon';
import { Headline2 } from '@material/react-typography';

import './index.scss';

const MCard = props => {
  const { content, onShare, shareable, title, thumbnail } = props;
  const description =
    content && content !== '' ? content : 'No character description';
  const imageUrl =
    thumbnail.path + '/standard_fantastic.' + thumbnail.extension;

  return (
    <Card>
      <Headline2>{title}</Headline2>
      <CardMedia square imageUrl={imageUrl} />
      <TruncateMarkup lines={2}>
        <p className="mdc-typography mdc-typography--body1">{description}</p>
      </TruncateMarkup>
      <CardActions>
        <CardActionButtons>
          <Button raised>More Info</Button>
        </CardActionButtons>

        {shareable && (
          <CardActionIcons>
            <MaterialIcon icon="share" onClick={onShare} />
          </CardActionIcons>
        )}
      </CardActions>
    </Card>
  );
};

export default MCard;
