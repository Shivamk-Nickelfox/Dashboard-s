import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  InputBase,
  Button,
  ListItemButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListItemIcon from "@mui/material/ListItemIcon";
import CloseIcon from "@mui/icons-material/Close";
import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import { color } from "@mui/system";

const data = Array(10).fill({
  code: "703",
  partyName: "Krishna Trading Company",
  gstNumber: "07ABCDE1234F1Z5",
  fssaiNumber: "12123456700015",
  contactPerson: "Manish Dubey",
  mobileNumber: "888334788",
  location: "SINNAR",
});

const PartyMaster = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchbutton, setsearchbutton] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: 1,
        padding: "10px 40px",
        backgroundColor: "#F0EEFF",
        opacity: 0.9,
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ pl: 2, color: "darkblue" }}
          >
            Masters
          </Typography>
          <Typography variant="body2" color="gray" sx={{ pl: 2 }}>
            <span style={{ color: "blue" }}> {" Party Master "}</span>
            <span style={{ color: "darkblue" }}> {" > Manage parties "} </span>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {searchbutton && (
              <InputBase
                placeholder="Global Search"
                sx={{
                  marginLeft: 1,
                  border: "1px solid #ccc",
                  borderRadius: 2,
                }}
              />
            )}
          </Box>
          <div
            onClick={() => setsearchbutton(!searchbutton)}
            border={1}
            borderRadius={2}
            backgroundColor="Black"
          >
            <SearchIcon
              sx={{ color: "black", paddingTop: "1px", marginTop: 1 }}
            />
          </div>
          <Button
            sx={{ color: "blue" }}
            variant="outlined"
            startIcon={<FilterListIcon />}
          >
            Filter
          </Button>
          <Button
            sx={{ backgroundColor: "darkblue" }}
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
          >
            Add Party
          </Button>
        </Box>
      </Box>

      {/* Table Section */}
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", borderRadius: 2 }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#6F5CCF" }}> 
              {[
                "Code",
                "Party Name",
                "GST Number",
                "FSSAI Number",
                "Contact Person",
                "Mobile Number",
                "Location",
                "Action",
              ].map((header) => (
                <TableCell key={header} sx={{ fontWeight: "bold" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.partyName}</TableCell>
                <TableCell>{row.gstNumber}</TableCell>
                <TableCell>{row.fssaiNumber}</TableCell>
                <TableCell>{row.contactPerson}</TableCell>
                <TableCell>{row.mobileNumber}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>
                  <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <CloseIcon fontSize="small" />
                      </ListItemIcon>
                      Remove
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <BlockIcon fontSize="small" />
                      </ListItemIcon>
                      Block
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <EditIcon fontSize="small" />
                      </ListItemIcon>
                      Edit
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PartyMaster;
