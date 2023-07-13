import React from 'react';
import'./profile.css';

const ProfilePage = ({ onGoBack, onViewCart }) => {
  const userProfile = {
    nome: 'Fulano de Tal',
    dataNascimento: '1 de Janeiro de 1990',
    cpf: '000.000.000-00',
    endereco: 'Rua Principal, 123, Cidade, Estado'
  };

  return (
    <div className="profile-page">
      <h2>Perfil do Usuário</h2>
      <p><strong>Nome:</strong> {userProfile.nome}</p>
      <p><strong>Data de Nascimento:</strong> {userProfile.dataNascimento}</p>
      <p><strong>CPF:</strong> {userProfile.cpf}</p>
      <p><strong>Endereço:</strong> {userProfile.endereco}</p>
      <button onClick={onViewCart}>Meu Carrinho</button>
      <button onClick={onGoBack}>Página Principal</button>
    </div>
  );
};

export default ProfilePage;










