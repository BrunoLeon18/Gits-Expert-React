import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    //funcion de input
    const onInputChange = (event) =>{
        setInputValue( event.target.value);
    }
    //funcion de formularios
    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        //setCategories(categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() )
        setInputValue("")
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
    
}
