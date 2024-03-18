import PropTypes from 'prop-types';

function Button({ data }) {

  return (
    <button className="btn social">{data}</button>
  )
}

Button.propTypes = {
  data: PropTypes.string,
}

export default Button