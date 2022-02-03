
import Button from './Button'
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'

const Header = ({ title, showAdd, toggleAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && <Button label={showAdd ? 'Close' : 'Add' } color={ showAdd ? 'grey' : 'royalBlue' }
        onClick={toggleAdd} />}
    </header>
  )
};

Header.defaultProps = {
  title: 'Title'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header