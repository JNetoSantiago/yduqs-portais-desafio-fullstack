"use client";

import { enrollInCourse } from "@/actions/enroll";
import { OfferContext } from "@/contexts/offerContext";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Link,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import CpfMask from "@/components/utils/cpfMask";
import PhoneMask from "@/components/utils/phoneMask";

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
    acceptTerms: yup
      .boolean()
      .oneOf([true], "É necessário aceitar os termos")
      .required(),
    allowReceiveNotifications: yup.boolean().default(false),
  })
  .required();

export type EnrolFormType = yup.InferType<typeof schema>;

export default function EnrolForm() {
  const { selectedInstallment, selectedOffer } = useContext(OfferContext);
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | undefined>(
    undefined
  );

  const router = useRouter();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isValid },
  } = useForm<EnrolFormType>({
    resolver: yupResolver(schema),
    mode: "onChange",
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

  const onSubmit = async (data: EnrolFormType) => {
    setLoading(true);

    if (
      !selectedOffer ||
      (selectedOffer.modality == "PRESENCIAL" && !selectedInstallment)
    ) {
      setLoading(false);
      console.error("Oferta ou parcela selecionada não encontrada.");
      return;
    }

    const jsonData = {
      ...data,
      offerId: selectedOffer.id,
      installmentId: selectedInstallment?.id,
    };

    try {
      const result = await enrollInCourse(jsonData);

      setLoading(false);

      if (result.id) {
        router.push("/success");
      } else {
        if (result.statusCode == 409) {
          setGeneralError(undefined);

          setError(result.field, {
            type: "manual",
            message: result.message,
          });
        } else {
          setGeneralError(result.message);
        }
      }
    } catch (error) {
      setGeneralError(
        "Ocorreu um erro inexperado! Entre em contato com o administrador."
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      !selectedOffer ||
      (selectedOffer?.modality == "PRESENCIAL" && !selectedInstallment)
    ) {
      router.replace("/");
    }
  }, [selectedOffer, router]);

  const isDisabled = () => {
    if (!selectedOffer || !isValid) {
      return true;
    }

    if (selectedOffer?.modality == "PRESENCIAL" && !selectedInstallment) {
      return true;
    }

    if (loading) {
      return true;
    }

    return false;
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        margin: "auto",
        mt: 5,
        paddingBottom: "40px",
      }}
    >
      {generalError && <Alert severity="error">{generalError}</Alert>}
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nome"
            variant="outlined"
            error={!!errors.name}
            helperText={
              errors.name
                ? errors.name?.message
                : "Preencha seu nome completo, sem abreviações, igual ao seu documento de identificação. Confira o exemplo. "
            }
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
            fullWidth
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
            InputProps={{
              inputComponent: CpfMask as any,
            }}
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
        name="phone"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Celular para contato"
            variant="outlined"
            fullWidth
            error={!!errors.phone}
            helperText={errors.phone?.message}
            InputProps={{
              inputComponent: PhoneMask as any,
            }}
          />
        )}
      />

      <Controller
        name="yearConclusionSchool"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Ano de conclusão do ensino ..."
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
            sx={{ alignItems: "flex-start", mt: 1 }}
            label={
              <Box component="span">
                Li e concordo com os{" "}
                <Link
                  href="/termos-edital"
                  target="_blank"
                  underline="always"
                  sx={{ color: "primary.main" }}
                >
                  termos do edital
                </Link>
                , bem como com o tratamento dos meus dados para fins de
                prospecção dos serviços educacionais prestados pela Estácio e
                demais instituições de ensino do mesmo{" "}
                <Link
                  href="/grupo-economico"
                  target="_blank"
                  underline="always"
                  sx={{ color: "primary.main" }}
                >
                  Grupo Econômico
                </Link>
                , de acordo com a nossa{" "}
                <Link
                  href="/politica-privacidade"
                  target="_blank"
                  underline="always"
                  sx={{ color: "primary.main" }}
                >
                  política de privacidade
                </Link>
                .
              </Box>
            }
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

      <Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isDisabled()}
          disableElevation
        >
          {loading ? "Aguarde..." : "Avançar"}
        </Button>
      </Box>
    </Box>
  );
}
