import { useEffect, useState } from "react";

import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import useFetch from "./components/useFetch";

export default function App() {
  const { data, isPending, error, setData } = useFetch("http://localhost:4000/items")

  return (
    <div className="app">
      <Logo />
      <Form onAddData={setData} items={data} />
      <PackingList items={data} onDeleteData={setData} />
      <Stats />
    </div>
  );
}