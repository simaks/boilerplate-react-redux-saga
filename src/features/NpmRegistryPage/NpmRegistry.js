import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import routes from "app/routes";
import { loadPackageDetails } from "./slice";
import styles from "./npm-registry.module.scss";
import messages from "./messages";
import { selectData, selectError, selectLoading } from "./selectors";

function NpmRegistry() {
  const intl = useIntl();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const { package: packageId } = useParams();
  const [search, setSearch] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (packageId) {
      dispatch(loadPackageDetails(packageId));
    }
  }, [dispatch, packageId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search) {
      history.push(routes.npmApiPackage.path.replace(":package", search));
      setSearch("");
    }
  };
  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>{intl.formatMessage(messages.searchForPackage)}</h2>
        <label htmlFor="package-id-input">
          {intl.formatMessage(messages.inputPackage)}
        </label>
        <input
          id="package-id-input"
          type="search"
          onChange={handleChange}
          value={search}
        />
        <p>
          <FormattedMessage
            id={messages.examplePackages.id}
            defaultMessage={messages.examplePackages.defaultMessage}
            values={{
              example: ["react", "yarn", "redux", "redux-saga"].reduce(
                (acc, ex, index) => {
                  if (index > 0) {
                    acc.push(", ");
                  }
                  acc.push(
                    <Link
                      key={ex}
                      to={routes.npmApiPackage.path.replace(":package", ex)}
                    >
                      {ex}
                    </Link>
                  );
                  return acc;
                },
                []
              ),
            }}
          />
        </p>
        <button type="submit">
          {intl.formatMessage(messages.buttonSearch)}
        </button>
      </form>

      {loading && intl.formatMessage(messages.loading)}
      {error && intl.formatMessage(messages.loading, { error })}
      {data && (
        <dl className={styles.result}>
          <dt>{intl.formatMessage(messages.name)}</dt>
          <dd>{data.name}</dd>

          <dt>{intl.formatMessage(messages.description)}</dt>
          <dd>{data.description}</dd>

          <dt>{intl.formatMessage(messages.keywords)}</dt>
          <dd>{data.keywords?.join?.(", ")}</dd>

          <dt>{intl.formatMessage(messages.homepage)}</dt>
          <dd>
            <a href={data.homepage} target="_blank" rel="noopener noreferrer">
              {data.homepage}
            </a>
          </dd>

          <dt>{intl.formatMessage(messages.creationDate)}</dt>
          <dd>
            {intl.formatDate(data.creationTime, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </dd>
        </dl>
      )}
    </div>
  );
}

export default NpmRegistry;
