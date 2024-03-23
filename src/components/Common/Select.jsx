
import { Select,MenuItem } from '@mui/material'
import React from 'react'

const SelectItems = ({value,onChange,style}) => {
  return (
    <Select
          value={value}  onChange={onChange}  style={style}
            >
          {[...Array(10).keys()].map((num) => (
                <MenuItem key={num + 1} value={num + 1}>
                  {num + 1}
                </MenuItem>
              ))}
            </Select>
  )
}

export default SelectItems

// const SelectItems = ({ value, onChange, style }) => {
//     return (
//       <Select
//         value={value}
//         onChange={onChange}
//         style={style}
//       >
//         {[...Array(10).keys()].map((num) => (
//           <MenuItem key={num + 1} value={num + 1}>
//             {num + 1}
//           </MenuItem>
//         ))}
//       </Select>
//     );
//   }
//   export default SelectItems