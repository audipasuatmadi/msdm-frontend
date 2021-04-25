import { Grid, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import FormDialog from "../../components/Dialogs/FormDialog";

export default function RolesForm({
  isOpen,
  handleClose,
  updateData,
  onTrueClick,
}) {

  const [id, setId] = useState(0);
  const [nama, setNama] = useState('');

  useEffect(() => {
    if (!updateData.id) {
      setId(0);
      setNama('')
      return;
    };
    setId(updateData.id);
    setNama(updateData.nama);
  }, [isOpen]);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  }

  return (
    <FormDialog
      open={isOpen}
      handleChange={() => handleClose()}
      title="Tambah Jabatan"
      text="Tambahkan Jabatan baru, Pastikan nama yang akan ditambahkan benar :)"
      onTrueClick={onTrueClick({
        id : id,
        name : nama
      })}
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
    </FormDialog>
  )
}