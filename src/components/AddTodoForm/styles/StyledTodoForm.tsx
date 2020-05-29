import styled from 'styled-components'

const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }

  .MuiButton-root {
    margin: 0 auto;
  }
`

export default StyledTodoForm