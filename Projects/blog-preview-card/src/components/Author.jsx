import PropTypes from 'prop-types';

function Author({ avatar, name }) {
  return (
    <div className="blog-card-author">
      <img src={avatar} alt={`Picture of ${name}`} />
      <p>{name}</p>
    </div>
  )
}

Author.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
}

export default Author