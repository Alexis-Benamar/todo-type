import styled from 'styled-components'
import { ExpansionPanelSummary } from '@material-ui/core'

const StyledTodoSummary = styled(ExpansionPanelSummary)`
  &.complete {
    background-color: #F8F8F8;
    text-decoration: line-through;
    font-style: italic;
    color: grey;
  }
`

export default StyledTodoSummary