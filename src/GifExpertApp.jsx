
import { useState } from "react";
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const elements = ['One Punch']

    const [categories, setCategories] = useState(elements);
   
    const onAddCategory = ( newCategory) => {
    
      // categories.push(newCategory);
        // setCategories([...categories, 'Demon Slayer'])
        if( categories.includes( newCategory ) ) return;
         setCategories([ newCategory, ...categories ])
    }
  return (
    <>
      <h1> GifExpertApp </h1>

      <AddCategory 
          onNewCategory={ ( event ) => onAddCategory( event )}
      />
        

        { 
            categories.map(( category ) => (
              <GifGrid 
                  key={ category } 
                  category = { category }/>
            ))
        }
           
    </>
  );
}
