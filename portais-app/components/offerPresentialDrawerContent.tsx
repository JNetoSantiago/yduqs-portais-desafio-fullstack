"use client";

import OfferType from "@/types/offer";
import { valueToCurreny } from "@/utils/monetary";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { OfferContext } from "@/contexts/offerContext";

type EnrolFormType = {
  selectedInstallmentId: number;
};

const schema = yup
  .object({
    selectedInstallmentId: yup.number().required("Parcela é obrigatória"),
  })
  .required();

export default function OfferPrentialDrawerContent({
  offer,
}: {
  offer: OfferType;
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
      sx={{
        paddingRight: "16px",
        paddingLeft: "32px",
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        sx={{
          width: "600px",
          justifyContent: "space-between",
          opacity: 1,
          paddingTop: "24px",

          paddingBottom: "24px",

          borderBottomWidth: "1px",
          borderColor: "#E0E0E0",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "32px",
            leadingTrim: "NONE",
            lineHeight: "120%",
            letterSpacing: "0%",
          }}
        >
          Mais detalhes
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontStyle: "Medium",
          fontSize: "16px",
          leadingTrim: "NONE",
          lineHeight: "135%",
          letterSpacing: "0%",
          verticalAlign: "bottom",
        }}
      >
        Qual dessas opções de parcelas você prefere?
      </Typography>
      <TableContainer component={Paper}>
        <Controller
          name="selectedInstallmentId"
          control={control}
          render={({ field }) => (
            <FormControl>
              <RadioGroup
                {...field}
                aria-labelledby="radio-button-installments"
                name="radio-buttons-group"
              >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Parcela</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {offer.installments.map((installment) => (
                      <TableRow key={installment.id}>
                        <TableCell>
                          <FormControlLabel
                            value={installment.id}
                            control={<Radio />}
                            label={`${
                              installment.deadline
                            }x de ${valueToCurreny(installment.value)}`}
                          />
                        </TableCell>
                        <TableCell align="right">
                          {valueToCurreny(installment.totalPrice)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </RadioGroup>
            </FormControl>
          )}
        />
      </TableContainer>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={() => {}}
      >
        Avançar
      </Button>
    </Box>
  );
}
