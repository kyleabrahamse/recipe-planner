function RecipeList({ title, items }) {
  return (
    <div>
      <p>{title}</p>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.name} - {item.count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList
