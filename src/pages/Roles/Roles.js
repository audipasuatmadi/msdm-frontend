import { Card, CardContent, CardHeader, createMuiTheme, Fab, ThemeProvider } from "@material-ui/core";
import { DataGrid, visibleGridColumnsLengthSelector } from "@material-ui/data-grid";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import { useState } from "react";
import { dataColumns } from "../Investors/Investor.config";
import { rolesApi } from "./Roles.api";
import { useRolesData } from "./Roles.hook";
import RolesForm from "./RolesForm";
import { red } from "@material-ui/core/colors";
import { editInvestor } from "../Investors/Investor.api";

export default function Roles() {

  const [selectedRoles, setSelectedRoles] = useState(-1);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [updateData, setUpdateData] = useState({});
  const handleCloseEdit = () => {
    setIsEditOpen(false);
  }

  const rolesData = useRolesData(refresh);

  const handleChooseClick = ({id, ...FormData}) => async () => {
    if (id === 0) {
      await rolesApi(FormData, 1);
      setRefresh(refresh+1);
    } else {
      await editInvestor({id, ...FormData});
      setRefresh(refresh+1);
    }
  }
  
  const handleAddRoles = () => {
    setUpdateData({});
    setIsEditOpen(true);
  }

  const handleUpdateRoles = () => {
    const selectedRolesData = rolesData.filter((val) => val.id === selectedRoles)[0];
    setUpdateData(selectedRolesData);
    setIsEditOpen(true);
  }

  const handleDeleteRoles = async () => {
    await rolesApi(selectedRoles , 3);
    setRefresh(refresh + 1);
  }

  return (
    <section
      style={{ height: '105vh', position: 'relative', marginBottom: '5rem'}}
    >
      <Card>
        <CardHeader 
          title="Investor"
          subheader="Tabel dan data - data jabatan"
        />
        <CardContent>
          <DataGrid 
            columns={dataColumns}
            rows={rolesData}
            pageSize={5}
            disableMultipleSelection
            autoHeight
            onSelectionModelChange={(data) => setSelectedRoles(parseInt(data.selectionModel[0]))}
            hideFooterSelectedRowCount
          />
        </CardContent>
      </Card>
      <div
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          buttom: '5rem',
          right: '5rem',
        }}
      >
        {
          selectedRoles !== -1 && (
            <>
              <ThemeProvider
                theme={createMuiTheme({ palette: { primary: red } })}
              >
                <Fab color="primary" onClick={handleDeleteRoles} >
                  <DeleteIcon />
                </Fab>
              </ThemeProvider>
              <Fab
                onClick={handleUpdateRoles}
              >
                <EditIcon />
              </Fab>
            </>
          )
        }
        <Fab
          color="primary"
          onClick={handleAddRoles}
        >
          <AddIcon style={{color: "#fff"}} />
        </Fab>
        <RolesForm 
          isOpen={isEditOpen}
          handleClose={handleCloseEdit}
          updateData={updateData}
          onTrueClick={handleChooseClick}
        />
      </div>
    </section>
  )
}