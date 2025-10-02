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

export default function OfferPrentialDrawerContent({
  offer,
}: {
  offer: OfferType;
}) {
  return (
    <Box
      sx={{
        paddingRight: "16px",
        paddingLeft: "32px",
      }}
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
        <FormControl>
          <RadioGroup
            aria-labelledby="radion-button-installments"
            defaultValue="female"
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
                        label=""
                      />{" "}
                      {installment.deadline}x de{" "}
                      {valueToCurreny(installment.value)}
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
      </TableContainer>
      <Button
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
