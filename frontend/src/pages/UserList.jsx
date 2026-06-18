import {Button,Chip,Container,Table,TableBody,TableCell,TableHead,TableRow,Paper,Box,Typography,Breadcrumbs,Link} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { useDeleteUser, useUsers } from "../hooks/useUsers";

export default function UserList() {
  const { data, isLoading } = useUsers();
  const deleteMutation = useDeleteUser();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>

      {/* Breadcrumb */}
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          color="inherit"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
          Dashboard
        </Link>

        <Typography color="text.primary">
          Users
        </Typography>
      </Breadcrumbs>

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PeopleIcon color="primary" />
          <Typography variant="h5" fontWeight="bold">
            Users Management
          </Typography>
        </Box>

        <Button
          variant="contained"
          component={RouterLink}
          to="/create"
          startIcon={<PersonAddIcon />}
        >
          Add User
        </Button>
      </Box>

      {/* Table Card */}
      <Paper
        elevation={6}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell align="right"><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((user) => (
              <TableRow key={user._id} hover>

                <TableCell>{user.name}</TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>
                  <Chip
                    label={user.status}
                    color={
                      user.status === "Active"
                        ? "success"
                        : "error"
                    }
                    variant="outlined"
                  />
                </TableCell>

                <TableCell align="right">
                  <Button
                    component={RouterLink}
                    to={`/edit/${user._id}`}
                    size="small"
                  >
                    Edit
                  </Button>

                  <Button
                    color="error"
                    size="small"
                    onClick={() =>
                      deleteMutation.mutate(user._id)
                    }
                  >
                    Delete
                  </Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}