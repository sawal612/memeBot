# Memefella

Memefella is a lightweight Express API that fetches a joke from a configured upstream service and returns it in a simple question-and-answer format.

## Requirements

- Node.js 22 or later
- npm

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   BASE_URL=https://your-upstream-joke-api.example/joke
   ```

   The upstream response must include `setup` and `delivery` fields.

3. Start the server:

   ```bash
   npm start
   ```

The server listens on port `3000`.

## API

### `GET /meme`

Fetches a joke from `BASE_URL`.

Example response:

```json
{
  "status": 200,
  "message": "Meme fetched successfully",
  "data": {
    "question": "Why did the developer go broke?",
    "answer": "Because they used up all their cache."
  }
}
```

If the upstream request fails, the API responds with HTTP `500` and an error message.

## Running with Docker

Build the image:

```bash
docker build -t memefella .
```

Run the container:

```bash
docker run --rm -p 3000:3000 --env-file .env memefella
```

The API is then available at `http://localhost:3000/meme`.

## Project structure

```text
.
├── controller/
│   └── meme.js       # Joke-fetching controller
├── server.js         # Express application entry point
├── Dockerfile        # Container image definition
└── package.json      # Project metadata and scripts
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the API server |
