import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  const { getAllByRole } = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const links = getAllByRole("link");
  expect(links).toHaveLength(2);
  expect(links[0]).toHaveTextContent("Home");
  expect(links[0].getAttribute("href")).toBe("/");
  expect(links[1]).toHaveTextContent("Counter");
  expect(links[1].getAttribute("href")).toBe("/counter");
});
