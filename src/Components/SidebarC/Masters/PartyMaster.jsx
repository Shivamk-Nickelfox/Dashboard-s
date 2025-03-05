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
import { alpha } from "@mui/material/styles";

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
            variant="outlined"
            backgroundColor="Black"
          >
            <SearchIcon
              sx={{ color: "black", paddingTop: "1px", marginTop: 1 }}
            />
          </div>
          <Button
            sx={{
              color: "darkblue",
              backgroundColor: "white",
              fontWeight: 600,
            }}
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
            <TableRow sx={{ backgroundColor: "rgba(111, 92, 207, 0.7)" }}>
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
                <TableCell
                  key={header}
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "darkblue", fontWeight: "bold" }}>
                  {row.code}
                </TableCell>
                <TableCell sx={{ color: "darkblue", fontWeight: "bold" }}>
                  {row.partyName}
                </TableCell>
                <TableCell sx={{ color: "darkblue", fontWeight: "bold" }}>
                  {row.gstNumber}
                </TableCell>
                <TableCell sx={{ color: "darkblue", fontWeight: "bold" }}>
                  {row.fssaiNumber}
                </TableCell>
                <TableCell sx={{ color: "darkblue", fontWeight: "bold" }}>
                  {row.contactPerson}
                </TableCell>
                <TableCell sx={{ color: "darkblue", fontWeight: "bold" }}>
                  {row.mobileNumber}
                </TableCell>
                <TableCell sx={{ color: "darkblue", fontWeight: "bold" }}>
                  {row.location}
                </TableCell>
                <TableCell>
                  <IconButton
                    sx={{ color: "darkblue", fontWeight: "bold" }}
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      sx={{ color: "darkblue", fontWeight: "bold" }}
                      onClick={handleClose}
                    >
                      <ListItemIcon>
                        <CloseIcon fontWeight="small" />
                      </ListItemIcon>
                      Remove
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "darkblue", fontWeight: "bold" }}
                      onClick={handleClose}
                    >
                      <ListItemIcon>
                        <BlockIcon fontWeight="small" />
                      </ListItemIcon>
                      Block
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "darkblue", fontWeight: "bold" }}
                      onClick={handleClose}
                    >
                      <ListItemIcon>
                        <EditIcon fontWeight="small" />
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
