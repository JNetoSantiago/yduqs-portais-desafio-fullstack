import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

const PhoneMask = forwardRef(function PhoneMask(props: any, ref: any) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 00000-0000"
      definitions={{
        0: /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
    />
  );
});

export default PhoneMask;
