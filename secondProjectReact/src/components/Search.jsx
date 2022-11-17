import { useEffect, useState } from "react";
import Axios from 'axios'

export function Search() {
    const [repositorios, setReposFromApi] = useState([])
    const [termoBuscado, setTermoBuscado] = useState('')
    const [repositoriosFiltrados, setRepositoriosFiltrados] = useState([])

    const baseURL = 'https://api.github.com/users/claudiadejesusdantas/repos'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setReposFromApi(response.data)
        }
        getData()
    }, [])

    function handleSearch(event){
        setTermoBuscado(event.target.value)
    }

    useEffect(()=> {
        const filtered = repositorios.filter(repositorio => {
            return repositorio.name.includes(termoBuscado)
        })
        setRepositoriosFiltrados(filtered)
    }, [repositorios, termoBuscado])

    return (
        <div>
        <input placeholder="Digite o repositório" type="text" onChange={handleSearch} />
            {repositoriosFiltrados.map((item) => {
                return (
                    <div key={item.id}>
                        <p className="nameRepo">{item.name}</p>
                        <a className="link" href={item.html_url} target={"_blank"}>Link</a>
                    </div>
                )
                })}
        </div>
    )
}