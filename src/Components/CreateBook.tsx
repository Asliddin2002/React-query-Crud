import React, {useState} from "react"
import axios from 'axios'
import { useMutation } from "react-query"

const CreateBook = () => {
    const[title, setTitle] = useState("")
    const[desc, setDesc] = useState("")
    const[price, setPrice] = useState<number>()

    const addUser = (data:any) => {
        return axios.post("http://localhost:3000/data", data)
    }
    const useAddBook = () => {
        return useMutation(addUser)
    }
    const {mutate} = useAddBook()

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        mutate({title, desc, price})
    
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Description</label>
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Price</label>
            <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
        </div>
            <button type = "submit">Add Book</button>
        </form>
    )
}
export default  CreateBook