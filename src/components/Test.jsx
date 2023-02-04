import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'redux/myValue/slice';
import {  add, remove } from 'redux/items/slice';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  const items = useSelector(state => state.items);
    console.log(value);
    console.log(items);

  return (
    <>
      <nav>{value}</nav>
      <button onClick={() => dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(100))}>Decrement</button>

      <div>
              {items.map(item => { return (<div>ToDo</div>)})}
        <div>{items.length}</div>
        <button onClick={() => dispatch(add())}>Add</button>
        <button onClick={() => dispatch(remove())}>Remove</button>
      </div>
    </>
  );
};
