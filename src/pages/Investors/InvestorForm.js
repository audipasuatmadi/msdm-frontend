import React, { useEffect } from 'react'
import FormDialog from '../../components/Dialogs/FormDialog'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function InvestorForm({
  isOpen,
  handleClose,
  updateData,
  onTrueClick
}) {

  useEffect(() => {
    console.log('auu');
  }, [isOpen]);

  return (
    <FormDialog
      open={isOpen}
      handleClose={() => handleClose()}
      title='Daftarkan Investor'
      text='Daftarkan Investor anda dengan cara mengisi form dibawah. Pastikan seluruh form terisi.'
      onTrueClick={onTrueClick}
    >
      <Grid container spacing={2}>
        <Grid xs={12}>
          <TextField
            label='Nama'
            required
            fullWidth
            variant='filled'
            // value={nama}
            // onChange={handleInput(setNama)}
          />
        </Grid>
      </Grid>
      <Grid container style={{marginTop: '1rem'}} spacing={2}>
        <Grid xs={6}>
          <TextField
            label='Jumlah Saham'
            required
            variant='filled'
            type='number'
            fullWidth
            // value={jamKerja}
            // onChange={handleInput(setJamKerja)}
          />
        </Grid>
      </Grid>
    </FormDialog>
  )
}
