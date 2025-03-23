import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  return <h2>Recipe Detail Page - Recipe ID: {id}</h2>;
}

export default RecipeDetail;
