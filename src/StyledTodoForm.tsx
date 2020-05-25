import styled from 'styled-components'
import {Button} from '@material-ui/core'

import AddTodoForm from './AddTodoForm'

const StyledTodoForm = styled(AddTodoForm)`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }

  .MuiButton-root {
    width: 150px;
    margin: 0 auto;
  }
`

export default StyledTodoForm