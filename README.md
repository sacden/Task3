# React + TypeScript + Vite Project

This project is a simple **Search Box** component built with React, where you can type a user’s name and get live search results fetched from a server.

## Features

- **Search Box component** with debounce functionality to avoid excessive API calls
- Fetches user data from a backend using **Redux Toolkit Query (RTK Query)**
- Built with **React**, **TypeScript**, and **Vite** for fast development and hot module replacement
- UI components styled using **Material UI**
- State management powered by **Redux Toolkit**
- Unit tests written with **Jest** and **React Testing Library**

## Technologies Used

- **Vite** — build tool and dev server
- **React** — UI library
- **TypeScript** — static typing
- **Material UI** — React UI components
- **Redux Toolkit + RTK Query** — state and data fetching management
- **Jest + React Testing Library** — testing framework and utilities

## How It Works

- The Search Box allows the user to type a query
- The input value is debounced to delay the search request until typing stops
- Once debounced, the query is sent to the backend via RTK Query
- Results are displayed in a list with user names and emails
- Loading and empty states are handled gracefully

## Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```
