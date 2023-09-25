import { Option, handleFieldChangeProp } from "@/types/types";
import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";

type Props = {
  value: string | Option | null;
  field: string;
  label: string;
  options: Option[];
  handleFieldChange: ({ field, value }: handleFieldChangeProp) => void;
  freeSolo?: boolean;
};

const AutoCompleteTextField = ({
  value,
  field,
  label,
  options,
  handleFieldChange,
  freeSolo = true,
}: Props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Autocomplete
      id={`${field}-autocomplete`}
      freeSolo={freeSolo}
      options={options}
      value={value}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue) => {
        setInputValue(newInputValue);
        if (freeSolo) {
          handleFieldChange({ field: field, value: newInputValue });
        }
      }}
      onChange={(
        _event: SyntheticEvent<Element, Event>,
        value: string | Option | null
      ) => {
        const prop: handleFieldChangeProp = {
          field: field,
          value:
            typeof value === "string"
              ? value
              : value != null
              ? value.value
              : null,
        };
        handleFieldChange(prop);
      }}
      sx={{ width: "90%" }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default AutoCompleteTextField;
