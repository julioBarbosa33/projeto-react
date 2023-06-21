import React, { useState } from 'react';
import Login from '../appDecal/components/Login/login'
import Menu from "../appDecal/components/Menu/menu"

 

export default function App() {
  const [user, setUser] = useState(null);

 

  //verifica se existe um usuário logado, se não houver chama a
  //tela de login
  if (!user) {
    return <Login changeStatus={(user) => setUser(user)} />
  }

    return <Menu/>

}