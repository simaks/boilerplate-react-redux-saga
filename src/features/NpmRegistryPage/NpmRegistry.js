import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useParams, useHistory } from "react-router-dom";
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
        <label htmlFor="package-id-input">
          {intl.formatMessage(messages.inputPackage)}
        </label>
        <input
          id="package-id-input"
          type="search"
          onChange={handleChange}
          value={search}
        />
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
            {intl.formatDate(data.time?.created, {
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
