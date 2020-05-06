import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "./slice";
import { selectCount, selectPending, selectError } from "./selectors";
import styles from "./Counter.module.scss";

function Counter() {
  const count = useSelector(selectCount);
  const isPending = useSelector(selectPending);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
      <div className={styles.row}>
        {!error && (
          <p>To get an error try adding &quot;0&quot; asynchronously.</p>
        )}
        {error && <p className={styles.error}>Error: &quot;{error}&quot;</p>}
      </div>
      <div className={styles.row}>
        <code className={styles.debug}>
          {JSON.stringify(
            {
              count,
              isPending,
              error,
            },
            null,
            2
          )}
        </code>
      </div>
    </div>
  );
}

export default Counter;
