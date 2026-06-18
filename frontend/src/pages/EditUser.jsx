import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import {Container,Paper,Typography,Box,Breadcrumbs,Link} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";

import { getUserById } from "../api/userApi";
import UserForm from "../components/UserForm";
import { useUpdateUser } from "../hooks/useUsers";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const updateMutation = useUpdateUser();

  const { data, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const onSubmit = async (formData) => {
    await updateMutation.mutateAsync({
      id,
      data: formData,
    });

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
          Edit User
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
          <EditIcon color="warning" fontSize="large" />

          <Box>
            <Typography variant="h4" fontWeight="bold">
              Edit User
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Update user details and status
            </Typography>
          </Box>
        </Box>

        {/* Form */}
        <UserForm
          defaultValues={data}
          onSubmit={onSubmit}
        />
      </Paper>
    </Container>
  );
}