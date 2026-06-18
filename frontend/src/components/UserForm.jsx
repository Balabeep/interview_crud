import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

import {Button,MenuItem,Stack,TextField} from "@mui/material";

export default function UserForm({
  defaultValues,
  onSubmit,
}) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      status: "",
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {/* NAME */}
        <TextField
          label="Name"
          {...register("name")}
          error={!!errors.name}
        />

        {/* EMAIL */}
        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
        />

        {/* STATUS - FIXED */}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <TextField
              select
              label="Status"
              {...field}
            >
              <MenuItem value="Active">
                Active
              </MenuItem>

              <MenuItem value="Inactive">
                Inactive
              </MenuItem>
            </TextField>
          )}
        />

        <Button type="submit" variant="contained">
           Save
        </Button>
      </Stack>
    </form>
  );
}