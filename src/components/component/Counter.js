import { connect } from 'react-redux';
import { increment, decrement, reset } from '../redux/counter/counter-actions';

const Counter = ({ value, onIncrement, onDecrement, onReset }) => {
  return (
    <div style={{ padding: '20px', width: '300px' }}>
      <h2 style={{ textAlign: 'center' }}>{value}</h2>
      <div style={{ textAlign: 'center' }}>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset Counter</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment(1)),
  onDecrement: () => dispatch(decrement(1)),
  onReset: () => dispatch(reset(0)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
