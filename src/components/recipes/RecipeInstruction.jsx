const RecipeInstruction = ({ instructions }) => {
  return (
    <>
    <h4 className="mt-3">Instructions: </h4>
      <div className="col-12">
        <ul>
          {instructions.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default RecipeInstruction;
