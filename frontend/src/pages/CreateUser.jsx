import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../hooks/useUsers";

import {Container,Paper,Typography,Box,Breadcrumbs,Link,} from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HomeIcon from "@mui/icons-material/Home";

export default function CreateUser() {
  const navigate = useNavigate();
  const mutation = useCreateUser();

  const onSubmit = async (data) => {
    await mutation.mutateAsync(data);
    navigate("/");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Breadcrumb */}
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate("/")}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
          Dashboard
        </Link>

        <Typography color="text.primary">
          Create User
        </Typography>
      </Breadcrumbs>

      {/* Main Card */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          background: "linear-gradient(to right, #ffffff, #f9f9f9)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <PersonAddIcon color="primary" fontSize="large" />

          <Box>
            <Typography variant="h4" fontWeight="bold">
              Create User
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Add a new user to your system
            </Typography>
          </Box>
        </Box>

        {/* Form */}
        <UserForm
          defaultValues={{
            name: "",
            email: "",
            status: "Active",
          }}
          onSubmit={onSubmit}
        />
      </Paper>
    </Container>
  );
}