import express from 'express';
import urlRoutes from './routes/urlRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Simple root route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Test route for CD
app.get("/test-cd", (req, res) => {
  res.json({
    message: "CD working ",
    timestamp: new Date()
  });
});

// URL routes
app.use('/', urlRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
