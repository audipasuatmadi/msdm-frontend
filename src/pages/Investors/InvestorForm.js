import React, { useEffect, useState } from 'react'
import FormDialog from '../../components/Dialogs/FormDialog'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function InvestorForm({
  isOpen,
  handleClose,
  updateData,
  onTrueClick
}) {

  const [id, setId] = useState(0)
  const [nama, setNama] = useState('');
  const [stocks, setStocks] = useState(0);

  useEffect(() => {
    if (!updateData.id) {
      setId(0);
      setNama('')
      setStocks(0)
      return;
    };
    setId(updateData.id);
    setNama(updateData.nama);
    setStocks(updateData.jml_saham);
  }, [isOpen]);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  }

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
            value={nama}
            onChange={handleChange(setNama)}
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
            value={stocks}
            onChange={handleChange(setStocks)}
          />
        </Grid>
      </Grid>
    </FormDialog>
  )
}
