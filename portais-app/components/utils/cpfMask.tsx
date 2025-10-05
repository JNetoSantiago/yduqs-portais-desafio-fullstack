import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

const CpfMask = forwardRef(function CpfMask(props: any, ref: any) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000.000.000-00"
      definitions={{ 0: /[0-9]/ }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
    />
  );
});

export default CpfMask;
