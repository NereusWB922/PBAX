import { handleFieldChangeProp } from "@/types/types";
import { Slider, Typography } from "@mui/material";
import { useEffect } from "react";

type Props = {
  title: string;
  value: [number | null, number | null];
  max_value: number;
  min_value: number;
  max_field: string;
  min_field: string;
  step: number;
  handleFieldChange: ({ field, value }: handleFieldChangeProp) => void;
};

const CustomSlider = ({
  title,
  value,
  max_value,
  min_value,
  max_field,
  min_field,
  step,
  handleFieldChange,
}: Props) => {
  const handleChange = (
    _event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      const prop: handleFieldChangeProp = {
        field: min_field,
        value: Math.min(newValue[0], value[1] ? value[1] : max_value),
      };
      handleFieldChange(prop);
    } else {
      const prop: handleFieldChangeProp = {
        field: max_field,
        value: Math.max(newValue[1], value[0] ? value[0] : min_value),
      };
      handleFieldChange(prop);
    }
  };

  useEffect(() => {
    handleFieldChange({ field: max_field, value: max_value });
    handleFieldChange({ field: min_field, value: min_value });
  }, []);

  return (
    <>
      <Typography fontWeight="600" sx={{ mb: "0.2rem" }}>
        {title}
      </Typography>
      <Slider
        value={[
          value[0] ? value[0] : min_value,
          value[1] ? value[1] : max_value,
        ]}
        step={step}
        min={min_value}
        max={max_value}
        valueLabelDisplay="auto"
        onChange={handleChange}
        sx={{}}
      />
    </>
  );
};

export default CustomSlider;
