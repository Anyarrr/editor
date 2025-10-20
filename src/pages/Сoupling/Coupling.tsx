import { Grid} from "@mui/material"
import { CountButton, GeneralGrid } from "./Coupling.styles"
import { useState } from "react"
import { CouplingItem } from "./CouplingItem"

export const Coupling = () => {
    const [count, setCount] = useState<number[]>([])

    const hendleCoupling = () => {
        const newValue = count.length + 1;
        setCount((prev) => [...prev, newValue])
    }

    const handleChangeCoupling = (index: number, newValue: number) => {
        setCount((prev) =>
          prev.map((value, i) => (i === index ? newValue : value))
        )
      }


return(
    <Grid>
        <GeneralGrid >
        <CountButton variant="contained" onClick={hendleCoupling}>+</CountButton>
        </GeneralGrid>
        {count.length > 0 && (
        <Grid>
          {count.map((value, index) => (
            <CouplingItem
              key={index}
              value={value}
              onChange={(newValue) => handleChangeCoupling(index, newValue)}
            />
        ))}
        </Grid>
        )}
    </Grid>
)
}