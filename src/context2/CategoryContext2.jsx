import { createContext, useState } from "react";

export const CategoryContext2 = createContext({
    editId: null,
    setEditId: ()=> {}
})

const CategoryContextContainer2 = ({children})=> {
    const [editId, setEditId] = useState(null)
    return (
        <CategoryContext2.Provider value={{
            editId,
            setEditId
        }}>
            {children}
        </CategoryContext2.Provider>
    )
}
export default CategoryContextContainer2