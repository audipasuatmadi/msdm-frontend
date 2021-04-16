import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

export default ({open, handleClose, title, text, children, onTrueClick}) => {
  const localHandleTrueClick = () => {
    handleClose();
    onTrueClick();
  }

  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={localHandleTrueClick} color="primary">Daftarkan</Button>
        <Button onClick={handleClose} color="default">Batal</Button>
      </DialogActions>
    </Dialog>
  )
}