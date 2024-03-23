# Running Neon database migrations using Drizzle

This application is a simple typescript API using Drizzle ORM, Neon and Hono.js. It returns a list of authors and books written by them. This project uses Drizzle to generate and run database migrations. 

To build this project from scratch, check out the [guide in Neon's documentation](https://neon.tech/docs/guides/drizzle-migrations). 

## Set up locally

You will need the following:
- A [Neon](https://neon.tech) account and a project
- Node.js and npm


1. Clone this repository. 
```bash
git clone https://github.com/neondatabase/guide-neon-drizzle
```

2. Navigate to the project directory and install the dependencies.
```bash
cd guide-neon-drizzle
npm install
```

3. Create a `.env` file in the root of the project and add the following environment variables:
```bash
DATABASE_URL=
```

4. Run the migrations using Drizzle.
```bash
npm run db:migrate
```

5. Start the server.
```bash
npm run dev
```

6. Visit `http://localhost:3000` in your browser to see the list of authors and books.
