const Ingredients = ({ ingredients }) => {
  const halfListIndex = Math.round(ingredients.length / 2);
  const firstList = ingredients.slice(0, halfListIndex);
  const secondList = ingredients.slice(halfListIndex, ingredients.length);

  return (
    <>
    <h4 className="mt-3">Ingredients: </h4>
      <div className="col-3">
        <ul>
          {firstList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="col-3">
        {secondList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </>
  );
};
export default Ingredients;
