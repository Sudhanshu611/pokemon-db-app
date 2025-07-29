# Pokémon App

A simple full-stack web application to manage a Pokémon database. Users can add, view, and delete Pokémon using a modern web interface and a SQLite database.

## Features

- Add Pokémon by name (fetches data from [PokeAPI](https://pokeapi.co/))
- View all Pokémon in a table with sprites
- Delete Pokémon from the database
- Persistent storage using SQLite

## Project Structure

pokemon-app/
│
├── 📁 backend/
│   ├── 📁 routes/
│   │   └── pokemon.js         # All Pokémon-related API routes (GET, POST, DELETE)
│   ├── 📁 db/
│   │   └── db.js              # SQLite DB connection and setup
│   ├── server.js              # Main Express server entry point
│   └── .env                   # Environment variables (e.g., PORT)
│
├── 📁 frontend/
│   ├── index.html             # Main HTML interface
│   ├── style.css              # CSS styles
│   └── script.js              # Frontend logic (fetching, rendering, events)
│
├── 📁 public/                 # Optional: store static assets if needed (images, etc.)
│
├── .gitignore                 # Ignore node_modules, .env, etc.
├── package.json               # Project dependencies and metadata
├── README.md                  # Project description and usage
└── 📄 init.sql (optional)     # DB schema init file


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd pokemon-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file (already present) and set the port if needed:
    ```
    PORT=5000
    ```

4. Start the server:
    ```sh
    npm run dev
    ```

5. Open your browser and go to [http://localhost:5000](http://localhost:5000)

## Usage

- **Add Pokémon:** Enter a Pokémon name and click "Add the pokemon". The app fetches data from PokeAPI and stores it in the local database.
- **View Pokémon:** All Pokémon in the database are listed in a table with their ID, name, and sprite.
- **Delete Pokémon:** Click the "Delete" button next to a Pokémon to remove it from the database.

## Backend

- Built with [Express](https://expressjs.com/)
- Uses [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) for SQLite database operations
- API endpoints:
    - `GET /pokemon` - Get all Pokémon
    - `POST /pokemon` - Add a new Pokémon
    - `DELETE /pokemon/:id` - Delete a Pokémon by ID

## Frontend

- Simple HTML/CSS/JS interface
- Uses Fetch API to interact with backend

## License

ISC

---

*Created for learning
