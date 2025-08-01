import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material";

export default function Nav() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
      slotProps={{
        indicator: {
          sx: {
            backgroundColor: "red",
          },
        },
      }}
    >
      <Tab
        sx={{
          color: "#000",
          "&.Mui-selected": {
            color: "green",
          },
        }}
        label="Gon Freecss"
      />
      <Tab label="Kilua Zoldyck" />
      <Tab label="Kurapika kurta" />
      <Tab label="Leorio Paradinight" />
    </Tabs>
  );
}
