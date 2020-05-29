import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import GithubIcon from '@material-ui/icons/GitHub'

import LangSelect from '~components/LangSelect'

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6">
            TodoType
          </Typography>
          <Typography variant="subtitle1">
            <i>&nbsp;- {t('navbar.subtitle')}</i>
          </Typography>
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
