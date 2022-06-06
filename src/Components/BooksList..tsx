import { useQuery, useMutation, useQueryClient } from "react-query"
import axios from "axios"

export type itemTypes = {
    id:number,
    title:string,
    price:number,
    desc:string
}


const getAllBooks = () => {
    return axios.get("http://localhost:3000/data")
}



const BooksList = () => {
const queryClient = useQueryClient()
    const {data, error, isLoading, isError } = useQuery("books", getAllBooks)
    const removeBook = async(id:number) => {
        const res = await fetch(`http://localhost:3000/data/${id}`, {
            method:"DELETE"
        })
        }
    const {mutateAsync} = useMutation(removeBook)
    console.log(data);
    
        if(isLoading) {
            return <h6>Loading...</h6>
        }
        if(isError) {
            return <h6>Oops , somthing went wrong</h6>
        }
        const handleRemove = async(id:any) => {
            await mutateAsync(id)
            queryClient.invalidateQueries("books")
        }

    return(
        <p>
            {
                data?.data.map((item:itemTypes) => (
                    <>
                        <h4>{item.title} -  {item.desc} - ${item.price}</h4>
                        <button onClick={() => handleRemove(item.id)}>remove</button>
                        <hr/>
                    </>
                ))
            }
        </p>
    )
}


export default BooksList