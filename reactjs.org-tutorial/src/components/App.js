import React from "react";
import "./App.css";

import WarningPage from "./WarningBanner";
import ActionLink from "./ActionLink";
import Toggle from "./Toggle";
import NumberList from "./Lists";
import ControlledForm from "./ControlledForm";
import FlavorForm from "./Select";
import Calculator from "./Boiling";
import FilterableProductTable from "./FilterableProductTable/FilterableProductTable";

const JSON = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7"
  }
];

function App() {
  return (
    <div className="App">
      <ActionLink />
      <Toggle />
      <WarningPage />
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <ControlledForm />
      <FlavorForm />
      <Calculator />
      <FilterableProductTable products={JSON} />
      <div />
    </div>
  );
}

export default App;
