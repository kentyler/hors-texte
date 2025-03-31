
import express from 'express';
import routes from './src/routes/index.mjs';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Home route
app.get('/', (req, res) => {
  res.send('Server is running');
});

export default app;