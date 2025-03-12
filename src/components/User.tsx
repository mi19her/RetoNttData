import React from 'react';
import '../index.css'
import { UserProps } from '../types';
import { formatDate } from '../utils';

interface UserData {
    user: UserProps;
  }
const User: React.FC<UserData> = ({ user: { name, picture, gender, location, email, dob } }) => {
    return (
      <li className='user'>
            <img className='logo' src={picture.medium} alt={`${name.first}`} />
            <p><strong>Nombre:</strong><br/> {name.first} {name.last}</p>
            <p><strong>Genero:</strong><br/> {gender}</p>
            <p><strong>Ubicación:</strong><br/> {location.country} {location.city}</p>
            <p><strong>Correo electronico:</strong><br/> {email}</p>
            <p><strong>Fecha de nacimiento:</strong><br/> {formatDate(dob.date)}</p>
      </li>
    );
};

export default User;
