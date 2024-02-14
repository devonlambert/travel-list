import { useEffect, useState } from "react";

import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

export default function App() {

  const apiURL = "http://localhost:4000/items"

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(items => setItems(items))
      .catch(err => console.log(err.message))
  }, [])

  const [items, setItems] = useState([])

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} apiEndpoint={apiURL} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}