import { useDispatch } from 'react-redux';
import { FilterStyled } from './FilterStyled';
import { filtering } from '../../redux/store';




export const Filter = ({ name}) => {
  const dispatch = useDispatch();
  return (
    <FilterStyled
      type="text"
      value={name}
      onChange={evt =>dispatch(filtering(evt.target.value))}
    />
  );
};
