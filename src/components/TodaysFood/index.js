

export function TodaysFood(props) {
  return (
    <>
      {props.foodList.map((currentFood) => {
        return (
            <div className="box ml-6">    
          <article className="media">
            <div className="media-left">
              <div className="content">
                <p>
                  <strong>Name:{props.currentFood.name} </strong> <br />
                  <small> {props.currentFood.calories}calories.</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <figure className="image is-64x64">
                <img alt="" />
              </figure>
            </div>
          </article>
          </div>
        );
      })}
      </>
  );
}
