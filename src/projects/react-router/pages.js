import React from 'react';
import './App.css';

export function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
}

export function About() {
  return (
    <div className="About">
      <h1>About</h1>
    </div>
  );
}

export function Search() {
  return (
    <div className="Search">
      <h1>Search</h1>
    </div>
  );
}

export function NoMatch() {
  return (
    <div className="NotFound">
      <h1>404: Not Found</h1>
    </div>
  );
}