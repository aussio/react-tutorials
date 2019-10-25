import React from "react";
import "./Lists.css";

function ListItem(props) {
  return (
    <li>
      <p>{props.value}</p>
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul className="List">{listItems}</ul>;
}

export default NumberList;
