import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "./slice";
import { selectCount, selectPending, selectError } from "./selectors";
import styles from "./counter-page.module.scss";
import messages from "./messages";

function CounterPage() {
  const count = useSelector(selectCount);
  const intl = useIntl();
  const isPending = useSelector(selectPending);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label={intl.formatMessage(messages.plus)}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label={intl.formatMessage(messages.minus)}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label={intl.formatMessage(messages.setIncrementAmount)}
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
          {intl.formatMessage(messages.addAmount)}
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          {intl.formatMessage(messages.addAsync)}
        </button>
      </div>
      <div className={styles.row}>
        {!error && <p>{intl.formatMessage(messages.errorTip)}</p>}
        {error && (
          <p className={styles.error}>
            {intl.formatMessage(messages.error, { error })}
          </p>
        )}
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

export default CounterPage;
