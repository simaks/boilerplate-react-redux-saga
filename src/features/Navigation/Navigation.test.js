import React from "react";
import { render } from "utils/test-utils";
import Navigation from "./Navigation";
import ltMessages from "translations/lt.json";

describe("Navigation", () => {
  test("renders all the links in navigation in default locale", () => {
    const { getAllByRole } = render(<Navigation />);
    const links = getAllByRole("link");
    expect(links).toHaveLength(3);
    expect(links[0].getAttribute("title")).toBe("Home");
    expect(links[0].getAttribute("href")).toBe("/");
    expect(links[1]).toHaveTextContent("Counter (0)");
    expect(links[1].getAttribute("href")).toBe("/counter");
    expect(links[2]).toHaveTextContent("API demo");
    expect(links[2].getAttribute("href")).toBe("/npm-api");
  });

  test("renders all the links in navigation in LT locale", () => {
    const { getAllByRole } = render(<Navigation />, {
      locale: "lt",
      messages: ltMessages,
    });
    const links = getAllByRole("link");
    expect(links).toHaveLength(3);
    expect(links[0].getAttribute("title")).toBe("Pradžia");
    expect(links[0].getAttribute("href")).toBe("/");
    expect(links[1]).toHaveTextContent("Skaitiklis (0)");
    expect(links[1].getAttribute("href")).toBe("/counter");
    expect(links[2]).toHaveTextContent("API demo");
    expect(links[2].getAttribute("href")).toBe("/npm-api");
  });
});
