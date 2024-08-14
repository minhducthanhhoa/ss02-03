import React from 'react'
import Header from './header/Header'
import Input from './baitap/bt1/Input'
import Select from './baitap/bt2/Select'
import FormLogin from './baitap/bt3/FormLogin'
import Popup from './baitap/bt5/Popup'
import Navigation from './baitap/bt6/Navigation'
import BaseButton from './baitap/bt7/BaseButton'

export default function page() {
  return (
    <div>
      <Header></Header> <br />
      <Input></Input> <br />
      <Select></Select> <br />
      <FormLogin></FormLogin> <br />
      <Popup></Popup> <br />
      <Navigation></Navigation> <br />
      <div className="grid grid-cols-4 gap-4">
          <BaseButton variant="success">Success</BaseButton>
          <BaseButton variant="warning">Warning</BaseButton>
          <BaseButton variant="danger">Danger</BaseButton>
          <BaseButton variant="primary">Primary</BaseButton>
      </div>
    </div>
  )
}
