/* eslint-disable react/style-prop-object */

import React, { useState } from "react";
import styles from "./intl-demo-page.module.scss";
import {
  FormattedDate,
  FormattedNumber,
  FormattedRelativeTime,
} from "react-intl";

function IntlDemoPage() {
  const currentDate = new Date();
  const today = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const [relativeDate, setRelativeDate] = useState(
    `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`
  );
  const handleDateChange = ({ target: { value } }) => {
    setRelativeDate(value);
  };

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Intl demo</h2>
      <p>
        This page is to demonstrate <code>react-intl</code> capabilities
      </p>
      <h3>FormattedDate</h3>
      <label htmlFor="date-input">Test date:</label>
      <input
        id={"date-input"}
        type="date"
        value={relativeDate}
        onChange={handleDateChange}
      />
      <br />
      Result: <FormattedDate value={relativeDate} />
      <h3>FormattedRelativeTime</h3>
      <h4>Day</h4>
      <FormattedRelativeTime value={-10} unit="day" />
      <h4>Hour</h4>
      <FormattedRelativeTime
        value={3}
        unit="hour"
        updateIntervalInSeconds={3600}
      />
      <h4>Seconds</h4>
      <FormattedRelativeTime
        value={10}
        unit="second"
        updateIntervalInSeconds={1}
      />
      <br />
      <FormattedRelativeTime
        value={10}
        unit="second"
        updateIntervalInSeconds={3}
      />
      <h3>FormattedNumber</h3>
      <FormattedNumber value={1000000} />
      <h4>Celsius</h4>
      <FormattedNumber
        value={36}
        unit="celsius"
        unitDisplay="long"
        style="unit"
      />
      <br />
      <FormattedNumber
        value={36}
        unit="celsius"
        unitDisplay="short"
        style="unit"
      />
      <h4>Meter</h4>
      <FormattedNumber
        value={17}
        unit="meter"
        unitDisplay="long"
        style="unit"
      />
      <br />
      <FormattedNumber
        value={17}
        unit="meter"
        unitDisplay="short"
        style="unit"
      />
      <h4>Day</h4>
      <FormattedNumber value={1} unit="day" style="unit" />
      <br />
      <FormattedNumber value={2} unit="day" style="unit" />
      <h4>Currency</h4>
      <FormattedNumber value={10} style="currency" currency="eur" />
      <br />
      <FormattedNumber
        value={10}
        style="currency"
        currency="eur"
        currencyDisplay="name"
      />
      <br />
      <FormattedNumber
        value={10}
        style="currency"
        currency="eur"
        currencyDisplay="code"
      />
    </article>
  );
}

export default IntlDemoPage;
