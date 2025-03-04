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
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ padding: 2 }}>
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
          <Typography variant="h6" fontWeight="bold" sx={{ pl: 2 }}>
            Masters
          </Typography>
          <Typography variant="body2" color="gray" sx={{ pl: 2 }}>
           {" Party Master>Manage parties "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: 2,
              paddingX: 1,
            }}
          >
            <SearchIcon sx={{ color: "gray" }} />
            <InputBase placeholder="Global Search" sx={{ marginLeft: 1 }} />
          </Box>
          <Button variant="outlined" startIcon={<FilterListIcon />}>
            Filter
          </Button>
          <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
            + Add Party
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
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
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
                    <MenuItem onClick={handleClose}>Remove</MenuItem>
                    <MenuItem onClick={handleClose}>Block</MenuItem>
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
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
