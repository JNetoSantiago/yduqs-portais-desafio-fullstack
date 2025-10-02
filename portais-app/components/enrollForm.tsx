"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    cpf: yup.string().required("CPF é obrigatório"),
    birthdate: yup.string().required("Data de Nascimento é obrigatório"),
    phone: yup.string().required("Telefone é obrigatório"),
    yearConclusionSchool: yup
      .string()
      .required("Ano de conclusão é obrigatório"),
    acceptTerms: yup.boolean().oneOf([true], "É necessário aceitar os termos"),
  })
  .required();

type EnrolFormType = {
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
  phone: string;
  yearConclusionSchool: string;
  acceptTerms: boolean;
  allowReceiveNotifications: boolean;
};

export default function EnrolForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EnrolFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      birthdate: "",
      phone: "",
      yearConclusionSchool: "",
      acceptTerms: false,
      allowReceiveNotifications: false,
    },
  });

  const onSubmit = (data: EnrolFormType) => console.log(data);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "50%",
        margin: "auto",
        mt: 5,
      }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nome"
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name="cpf"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="CPF"
            variant="outlined"
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
          />
        )}
      />

      <Controller
        name="birthdate"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Data de Nascimento"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            error={!!errors.birthdate}
            helperText={errors.birthdate?.message}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Telefone"
            variant="outlined"
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        )}
      />

      <Controller
        name="yearConclusionSchool"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Ano de Conclusão"
            type="number"
            variant="outlined"
            error={!!errors.yearConclusionSchool}
            helperText={errors.yearConclusionSchool?.message}
          />
        )}
      />

      <Controller
        name="acceptTerms"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Li e concordo com os termos do edital, bem como com o tratamento dos meus dados para fins de prospecção dos serviços educacionais prestados pela Estácio e demais instituições de ensino do mesmo Grupo Econômico, de acordo com a nossa política de privacidade."
          />
        )}
      />
      {errors.acceptTerms && (
        <FormHelperText error>{errors.acceptTerms?.message}</FormHelperText>
      )}

      <Controller
        name="allowReceiveNotifications"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Aceito receber atualizações sobre minha inscrição pelo WhatsApp."
          />
        )}
      />

      <Button type="submit" variant="contained" color="secondary">
        Enviar
      </Button>
    </Box>
  );
}
