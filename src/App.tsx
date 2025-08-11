import { useState, useEffect } from "react";
import { Button, CircularProgress, List, ListItem, ListItemText, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

import { SearchInput } from "./components/SearchInput/SearchInput";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>User Search App</h1>
      <SearchInput debounceDelay={500} />
    </div>
  );
}
