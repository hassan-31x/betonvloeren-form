import React from 'react'
import { client } from '../utils/client';
import Main from './components/main';

export const revalidate = 60;

async function index() {
  const homeData = await client.fetch('*[_type == "home"][0]');
  const uiData = await client.fetch('*[_type == "uiComponents"][0]');
  const variations = await client.fetch('*[_type == "variations"]');
  return (
    <Main homeData={homeData} uiData={uiData} variations={variations}/>
  )
}

export default index