import { ContainerGrid } from "./Coupling.styles"
import { TextField } from "@mui/material"

interface CouplingItemProps {
  value: number;
  onChange: (newValue: number) => void;
};

export const CouplingItem = ({ value, onChange }: CouplingItemProps) => {
  return (
    <ContainerGrid>
      <TextField
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        variant="outlined"
        size="small"
      />
    </ContainerGrid>
  )
}
