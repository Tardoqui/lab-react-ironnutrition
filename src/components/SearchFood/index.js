
export function SearchFood(props) {
  return (
      
    <div className="control">
      <input  className="input" type="text" placeholder="Search your food" onChange={props.handleSearch}/>
    </div>
  );
}
