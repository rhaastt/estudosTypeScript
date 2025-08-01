import React, { useState } from "react";
import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
import BoxSx from "../src/components/BoxSx";

export default function HomePage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <Nav />
      <BoxSx />
    </>
  );
}
