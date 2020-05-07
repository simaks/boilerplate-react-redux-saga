import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  const { getByText, getByRole } = render(
    <BrowserRouter>
      <Layout>layout content</Layout>
    </BrowserRouter>
  );
  const children = getByText(/layout content/i);
  const nav = getByRole("navigation");
  expect(children).toBeInTheDocument();
  expect(nav).toBeInTheDocument();
});
