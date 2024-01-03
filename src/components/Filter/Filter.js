import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled } from './FilterStyled';
import { filtering } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.name);
  return (
    <FilterStyled
      type="text"
      value={name}
      onChange={evt => dispatch(filtering(evt.target.value))}
    />
  );
};
