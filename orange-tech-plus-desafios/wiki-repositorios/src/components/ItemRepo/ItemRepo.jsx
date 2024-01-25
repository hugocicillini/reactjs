import React from 'react'
import { ItemContainer } from './Styles'

export default function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer >
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank'>Ver Repositório</a> <br />
      <a className='remove'onClick={handleRemove} href="#">Remover</a>
      <hr />
    </ItemContainer>
  )
}
