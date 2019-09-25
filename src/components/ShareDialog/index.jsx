import React from 'react';
import { useState, useEffect } from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from '@material/react-dialog';
import { Snackbar } from '@material/react-snackbar';
import { Body1 } from '@material/react-typography';

import './index.scss';

const cancel = 'cancel';
const share = 'share';
const snackbarMessage = 'Your message has been shared!';

const MShareDialog = props => {
  const { isOpen, message, onClose } = props;
  const [open, setOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleDialogOnClose = action => {
    action === share ? setShowSnackbar(true) : onClose();
  };

  const handleSnackbarOnClose = () => {
    setShowSnackbar(false);
    onClose();
  };

  // handle isOpen prop change
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <Dialog open={open} onClose={action => handleDialogOnClose(action)}>
        <DialogTitle>Share Comic?</DialogTitle>
        <DialogContent>
          <Body1>"{message}"</Body1>
        </DialogContent>
        <DialogFooter>
          <DialogButton action={cancel}>Cancel</DialogButton>
          <DialogButton action={share} isDefault>
            Share
          </DialogButton>
        </DialogFooter>
      </Dialog>
      {showSnackbar && (
        <Snackbar
          actionText="dismiss"
          closeOnEscape
          message={snackbarMessage}
          onClose={handleSnackbarOnClose}
        />
      )}
    </>
  );
};

export default MShareDialog;
