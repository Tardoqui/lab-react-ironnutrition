export function TodaysFood(props) {
  return (
    <>
      {props.foodList.map((currentFood) => {
        return (
          <div className="media-left">
            <div className="content">
              <p>
                <strong>Name:{props.currentFood.name} </strong> <br />
                <small> {props.currentFood.calories}calories.</small>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
