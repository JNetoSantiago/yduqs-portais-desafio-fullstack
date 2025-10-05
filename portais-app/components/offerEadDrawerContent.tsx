"use client";

import OfferType from "@/types/offer";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { OfferContext } from "@/contexts/offerContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import CardDrawerInfo from "@/components/cardDrawerInfo";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

type EnrolFormType = {
  selectedInstallmentId: number;
};

const schema = yup
  .object({
    selectedInstallmentId: yup.number().required("Parcela é obrigatória"),
  })
  .required();

export default function OfferEadDrawerContent({
  offer,
  clearContext,
}: {
  offer: OfferType;
  clearContext: () => void;
}) {
  const router = useRouter();
  const { setSelectedInstallment } = useContext(OfferContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EnrolFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      selectedInstallmentId: 0,
    },
  });

  const onSubmit = (data: EnrolFormType) => {
    const selectedInstallment = offer.installments.find(
      (installment) => installment.id === data.selectedInstallmentId
    );

    setSelectedInstallment(selectedInstallment);

    router.push("/enroll");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: 1,

          paddingTop: { xs: "21.5px", sm: "24px" },
          paddingRight: { xs: "16px", sm: "32px" },
          paddingLeft: { xs: "16px", sm: "32px" },
          paddingBottom: { xs: "21.5px", sm: "24px" },

          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "#E0E0E0",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: "24px", sm: "32px" },
            leadingTrim: "NONE",
            lineHeight: "120%",
            letterSpacing: "0%",
          }}
        >
          Mais detalhes
        </Typography>
        <IconButton onClick={clearContext}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          opacity: "1",
          borderBottomWidth: "1px",
          backgroundColor: "primary.main",
          paddingRight: { xs: "16px", sm: "32px" },
          paddingLeft: { xs: "16px", sm: "32px" },
          paddingBottom: { xs: "16px", sm: "24px" },
          paddingTop: { xs: "16px", sm: "24px" },
          color: "white",
          fontSize: "16px",
        }}
      >
        <InfoOutlineIcon />
        <Typography
          sx={{
            fontWeight: "400px",
            fontSize: "16px",
            leadingTrim: "NONE",
            lineHeight: "133%",
            letterSpacing: "0%",
          }}
        >
          Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!
        </Typography>
      </Box>
      <Box
        sx={{
          paddingRight: { xs: "16px", sm: "32px" },
          paddingLeft: { xs: "16px", sm: "32px" },
          marginTop: { xs: "16px", sm: "24px" },
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <CardDrawerInfo title="Sobre a bolsa incentivo" />
        <CardDrawerInfo title="Resumo das suas escolhas" />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          justifyContent: "space-between",
          opacity: 1,
          paddingTop: "24px",
          paddingRight: "32px",
          paddingLeft: "32px",
          paddingBottom: "24px",

          borderTopWidth: "1px",
          borderTopStyle: "solid",
          borderTopColor: "#E0E0E0",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            width: "100%",
            height: 48,
            gap: "16px",
            paddingRight: { xs: "16px", sm: "24px" },
            paddingLeft: { xs: "16px", sm: "24px" },
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontStyle: "Medium",
              fontSize: "16px",
              leadingTrim: "NONE",
              lineHeight: "100%",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
          >
            Avançar
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
