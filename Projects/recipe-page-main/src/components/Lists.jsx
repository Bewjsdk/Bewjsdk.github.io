
function Lists({lists}) {

  const listElements = lists.map((list,index) => {

    if(list.includes(":")) {
      // Find Strong text
      const strongText = list.slice(0, list.indexOf(":") + 1);
      const newList = list.slice(list.indexOf(":") + 1);

      return (
        <li key={index}><strong>{strongText}</strong>{newList}</li>
      )
    }

    return <li key={index}>{list}</li>
  });

  return listElements;
}
export default Lists;