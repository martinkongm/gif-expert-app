import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    const lowerCaseCategories = categories.map(cat => cat.toLowerCase())
    if(lowerCaseCategories.includes(newCategory.toLowerCase())) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={ category => onAddCategory(category) } />
      { 
        categories.map(category =>
          (
            <GifGrid key={category} category={category} />
          )
        ) 
      }
    </>
  );
};
