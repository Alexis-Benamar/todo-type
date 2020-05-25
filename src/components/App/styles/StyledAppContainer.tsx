import styled from 'styled-components'

import StyledContainer from '~components/StyledContainer'

const StyledAppContainer = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 400px;

  ${StyledContainer},
  .TodoList {
    margin-top: 12px;
  }
`

export default StyledAppContainer