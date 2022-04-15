import { useState } from 'react';

export function AddNewFood(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, quantity: 1, image };

    props.addFood(newFood);

    setName('');
    setCalories('');
    setImage('');
    setFormVisible(false);
  };

  return (
    <div className="box" >
      {!formVisible ? (
        <button
          className="button is-success"
          onClick={() => setFormVisible(true)}
        >
          Add Food!
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="m-4">
            <strong>Name: </strong>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameInput}
            />
          </label>

          <label className="m-4">
            <strong>Calories: </strong>
            <input
              type="number"
              name="calories"
              value={calories}
              onChange={handleCaloriesInput}
            />
          </label>

          <label className="m-4">
            <strong>Image: </strong>
            <input
              type="text"
              name="image"
              value={image}
              onChange={handleImageInput}
            />
          </label>

          <button className="button is-dark button is-small" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
