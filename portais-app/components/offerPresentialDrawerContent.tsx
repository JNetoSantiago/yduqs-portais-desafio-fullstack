"use client";

import OfferType from "@/types/offer";
import { valueToCurreny } from "@/utils/monetary";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import CardDrawerInfo from "@/components/cardDrawerInfo";
import { OfferContext } from "@/contexts/offerContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

type EnrolFormType = {
  selectedInstallmentId: number;
};

const schema = yup
  .object({
    selectedInstallmentId: yup
      .number()
      .positive()
      .integer()
      .required("Parcela é obrigatória"),
  })
  .required();

export default function OfferPrentialDrawerContent({
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
    formState: { isValid },
  } = useForm<EnrolFormType>({
    resolver: yupResolver(schema),
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
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            paddingRight: { xs: "16px", sm: "32px" },
            paddingLeft: { xs: "16px", sm: "32px" },
            marginTop: { xs: "16px", sm: "24px" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontStyle: "Medium",
              fontSize: "16px",
              leadingTrim: "NONE",
              lineHeight: "135%",
              letterSpacing: "0%",
              verticalAlign: "bottom",
              marginBottom: "16px",
            }}
          >
            Qual dessas opções de parcelas você prefere?
          </Typography>
          <Controller
            name="selectedInstallmentId"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <RadioGroup
                  {...field}
                  aria-labelledby="radio-button-installments"
                  name="radio-buttons-group"
                >
                  <TableContainer
                    component={Paper}
                    sx={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      borderStyle: "solid",
                      borderColor: "primary.main",
                      borderWidth: "1px",
                    }}
                    elevation={0}
                  >
                    <Table
                      sx={{
                        width: "100%",
                        borderCollapse: "collapse",
                      }}
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow sx={{ backgroundColor: "primary.main" }}>
                          <TableCell
                            sx={{
                              color: "white",
                              fontWeight: 400,
                              fontSize: { xs: "14px", sm: "16px" },
                              leadingTrim: "NONE",
                              lineHeight: "171%",
                              letterSpacing: "0%",
                              verticalAlign: "bottom",
                              padding: { xs: "8px", sm: "16px" },
                              border: "none",
                            }}
                          >
                            Parcelas
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              fontWeight: 400,
                              fontSize: { xs: "14px", sm: "16px" },
                              leadingTrim: "NONE",
                              lineHeight: "171%",
                              letterSpacing: "0%",
                              verticalAlign: "bottom",
                              padding: { xs: "8px", sm: "16px" },
                              border: "none",
                            }}
                          >
                            Total
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {offer.installments.map((installment) => (
                          <TableRow
                            key={installment.id}
                            sx={{
                              "&:not(:last-child)": {
                                borderBottom: "1px solid",
                                borderBottomColor: "primary.main",
                              },
                              "& td": {
                                borderLeft: "none",
                                borderRight: "none",
                                borderTop: "none",
                                borderBottom: "none",
                                padding: { xs: "8px", sm: "16px" },
                              },
                            }}
                          >
                            <TableCell>
                              <FormControlLabel
                                value={installment.id}
                                control={
                                  <Radio
                                    sx={{
                                      width: 24,
                                      height: 24,
                                      padding: 0,
                                    }}
                                  />
                                }
                                sx={{
                                  marginLeft: "8px",
                                  gap: { xs: "8px", sm: "16px" },
                                  color: "#121212",
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: { xs: "13px", sm: "14px" },
                                  },
                                }}
                                label={`${
                                  installment.deadline
                                }x de ${valueToCurreny(installment.value)}`}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  leadingTrim: "NONE",
                                  lineHeight: "171%",
                                  letterSpacing: "0%",
                                  verticalAlign: "bottom",
                                }}
                              >
                                {valueToCurreny(installment.totalPrice)}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </RadioGroup>
              </FormControl>
            )}
          />
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
          disabled={!isValid}
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
