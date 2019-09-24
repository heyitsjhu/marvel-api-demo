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

import '@material/react-dialog/dist/dialog.css';
import './index.css';

const CANCEL = 'cancel';
const SHARE = 'share';

const MShareDialog = props => {
  const { isOpen, message, onClose } = props;
  const [open, setOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleOnClose = action => {
    action === SHARE ? setShowSnackbar(true) : onClose();
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <Dialog open={open} onClose={action => handleOnClose(action)}>
        <DialogTitle>Share Comic?</DialogTitle>
        <DialogContent>
          <Body1>"{message}"</Body1>
        </DialogContent>
        <DialogFooter>
          <DialogButton action={CANCEL}>Cancel</DialogButton>
          <DialogButton action={SHARE} isDefault>
            Share
          </DialogButton>
        </DialogFooter>
      </Dialog>
      {showSnackbar && (
        <Snackbar
          message="Your message has been shared!"
          closeOnEscape
          onClose={() => {
            setShowSnackbar(false);
            onClose();
          }}
          actionText="dismiss"
        />
      )}
    </>
  );
};

export default MShareDialog;
