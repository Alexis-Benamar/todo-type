import styled from 'styled-components'
import { Select } from '@material-ui/core'

const StyledSelect = styled(Select)`
  margin-left: auto;

  .MuiSelect-root,
  .MuiSelect-icon {
    color: white;
  }

  &:before,
  &:after {
    border-bottom-color: white !important;
  }
`

export default StyledSelect