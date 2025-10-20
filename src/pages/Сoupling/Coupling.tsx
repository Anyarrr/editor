import { Grid} from "@mui/material"
import { CountButton, GeneralGrid } from "./Coupling.styles"
import { useState } from "react"
import { CouplingItem } from "./CouplingItem"

export const Coupling = () => {
    const [count, setCount] = useState<number[]>([])//1

    const hendleCoupling = () => {
        setCount((prev) => [...prev, count.length + 1])
    }

    // const handleChangeCoupling = (index: number, newValue: number) => {
    //     setCount((prev) =>
    //       prev.map((value, i) => (i === index ? newValue : value))
    //     )
    //   }


return(
    <Grid>
        <GeneralGrid >
        <CountButton variant="contained" onClick={hendleCoupling}>+</CountButton>
        </GeneralGrid>
        {count.length > 0 && (
        <Grid>
          {count.map((value) => (
            <CouplingItem
              key={value}
              value={value}
              // onChange={(newValue) => handleChangeCoupling(index, newValue)}
            />
        ))}
        </Grid>
        )}
    </Grid>
)
}