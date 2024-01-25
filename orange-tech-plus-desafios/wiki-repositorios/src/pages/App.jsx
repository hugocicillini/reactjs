import { useState } from "react"
import gitLogo from "../assets/github-logo.png"
import Input from "../components/Input/Input"
import ItemRepo from "../components/ItemRepo/ItemRepo"
import { Container } from "./Styles"
import Button from "../components/Button/Button"
import { api } from "../services/Api"

function App() {

  const [currentRepo, setCurrentRepo] = useState("")
  const [repo, setRepo] = useState([])

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repo.find(repo => repo.id == data.id)

      if (!isExist) {
        setRepo(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert("Repositório não encontrado!")
  }

  const handleRemoveRepo = (id) => {
    const updatedRepo = repo.filter((repoItem) => repoItem.id !== id);
    setRepo(updatedRepo);
  }

  console.log(currentRepo, setCurrentRepo)

  return (
    <>
      <Container>
        <img src={gitLogo} width={72} alt="Logo GitHub" />
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo} />
        {repo.map((repo) => (
          <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
        ))}
      </Container>
    </>
  )
}

export default App
