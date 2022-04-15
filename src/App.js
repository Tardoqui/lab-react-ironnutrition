import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import { FoodBox } from './components/FoodBox';
import { AddNewFood } from './components/AddNewFood';
import { TodaysFood } from './components/TodaysFood';
import { SearchFood } from './components/SearchFood';

function App() {
  const [foodList, setFoodList] = useState([...foods]);
  const [foodList2, setFoodList2] = useState([...foods]);

  const newFood = (newFood) => {
    const updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList);
  };

  function handleSearch(event){ 
    
    if (event === ""){
      setFoodList2(foodList);
      return;
    }
    
  
    else {
    const filteredFood = foodList.filter((elem) => {
      return elem.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFoodList(filteredFood);
  }
  }

  return (
    <div>
      <div className="m-6">
        <SearchFood handleSearch={handleSearch} />
      </div>
      <div>
        <AddNewFood addFood={newFood} />
      </div>
      <div className="is-flex m-2">
        <div>
          {foodList.map((currentFood) => {
            return <FoodBox food={currentFood} />;
          })}
        </div>
        <div>
          <TodaysFood foodList={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
