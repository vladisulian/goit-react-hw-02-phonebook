import PropTypes from 'prop-types';
export const FilterBar = ({ handleChange }) => {
  return (
    <>
      <h3>Find your contacts by name</h3>
      <input type="text" name="filter" onChange={handleChange} />
    </>
  );
};

FilterBar.propTypes = {
  handleChange: PropTypes.func,
};
