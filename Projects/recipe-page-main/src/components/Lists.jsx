
function Lists({lists}) {

  const listElements = lists.map((list,index) => {
    return <li key={index}>{list}</li>
  });

  return listElements;
}
export default Lists;