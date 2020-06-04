import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import {
  MenuItem,
  Select
} from '@material-ui/core'

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
  const defaultLang = selectedOption ? selectedOption.id : langOptions[0].id
  const [lang, setLang] = useState(defaultLang)

  const handleChange = (event: any) => {
    i18n.changeLanguage(event.target.value)
    setLang(event.target.value)
  }

  return (
    <StyledSelect
      disableUnderline
      onChange={handleChange}
      value={lang}
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
