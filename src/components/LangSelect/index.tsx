import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  MenuItem
} from '@material-ui/core'

import { StyledSelect } from './styles'

const LangSelect = () => {
  const { i18n } = useTranslation()

  const langOptions = [
    {
      'id': 'en',
      'isSelected': i18n.language === 'en'
    },
    {
      'id': 'fr',
      'isSelected': i18n.language === 'fr'
    }
  ]

  const selectedOption = langOptions.find(option => option.isSelected);

  const handleChange = (event: any) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <StyledSelect
      disableUnderline
      onChange={handleChange}
      defaultValue={selectedOption ? selectedOption.id : langOptions[0].id}
    >
      {langOptions.map(option => (
        <MenuItem key={option.id} value={option.id}>
          {option.id.toUpperCase()}
        </MenuItem>
      ))}
    </StyledSelect>
  )
}

export default LangSelect
