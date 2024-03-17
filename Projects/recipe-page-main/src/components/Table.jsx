import PropTypes from 'prop-types';

function Table({items}) {

  const tableDataElements = items.map((item,index) => (
      <tr key={index}>
        <td>{Object.keys(item)}</td>
        <td>{Object.values(item)}</td>
      </tr>
  ));

  return (
    <>
      <p>
        The table below shows nutritional values per serving 
        without the additional fillings.
      </p>
      <table>
        <tbody>
          {tableDataElements}
        </tbody>
      </table>
    </>
  )
}

Table.propTypes = {
  items: PropTypes.array,
}

export default Table