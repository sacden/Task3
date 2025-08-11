import React, { useState } from "react";
import { TextField, InputAdornment, CircularProgress, List, ListItem, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchInput.module.css";
import { SearchInputProps } from "./SearchInputProps";
import { useGetUsersQuery } from "../../redux/services/searchApi";
import { useDebounce } from "../../hooks/useDebounce";
import { User } from "../../types/types";

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Search...", debounceDelay = 500, className = "" }) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, debounceDelay);

  const { data = [], isFetching } = useGetUsersQuery(debouncedValue, {
    skip: !debouncedValue.trim(),
  });

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {isFetching && <CircularProgress size={24} style={{ marginTop: 10 }} />}

      {!isFetching && debouncedValue && data.length === 0 && <div>Nothing found</div>}

      {data.length > 0 && (
        <List>
          {data.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.name} secondary={user.email} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
