import React from 'react';
import ProfileComponent from '../../components/Profile'
import GridBase from '@/components/Grid/GridBase'

export default function Profile() {

  return (
    <GridBase SecondChildren={ProfileComponent}/>
  );
}