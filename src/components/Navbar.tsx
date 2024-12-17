import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import GithubIcon from '@mui/icons-material/GitHub'

import LangSelect from '~components/LangSelect'

const Subtitle = styled(Typography)`
  margin-left: 16px !important;
`

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6">
            TodoType
          </Typography>
          <Subtitle variant="overline">
            {t('navbar.subtitle')}
          </Subtitle>
          <LangSelect />
          <IconButton style={{color: 'white'}} href="https://github.com/Alexis-Benamar/todo-type" target="_blank">
            <GithubIcon/>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
