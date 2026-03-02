// Travel Price Tracker - API Server
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store
let trips = [
  {
    id: '1',
    location: 'Paris, France',
    dates: 'Mar 18 - Mar 25, 2025',
    departPrice: 450,
    arrivePrice: 560,
    departLowest: 420,
    arriveLowest: 420,
    totalPrice: 1010,
    budget: 1200,
    changePct: '-5.2%'
  },
  {
    id: '2',
    location: 'Tokyo, Japan',
    dates: 'Apr 10 - Apr 18, 2025',
    departPrice: 1100,
    arrivePrice: 800,
    departLowest: 1050,
    arriveLowest: 780,
    totalPrice: 1900,
    budget: 2500,
    changePct: '-0.5%'
  }
];

// Routes
app.get('/api/trips', (req, res) => {
  res.json(trips);
});

app.get('/api/trips/:id', (req, res) => {
  const trip = trips.find((t) => t.id === req.params.id);
  if (!trip) {
    return res.status(404).json({ error: 'Trip not found' });
  }
  res.json(trip);
});

app.post('/api/trips', (req, res) => {
  const newTrip = {
    id: String(trips.length + 1),
    ...req.body
  };
  trips.push(newTrip);
  res.status(201).json(newTrip);
});

app.put('/api/trips/:id', (req, res) => {
  const index = trips.findIndex((t) => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Trip not found' });
  }
  trips[index] = { ...trips[index], ...req.body };
  res.json(trips[index]);
});

app.delete('/api/trips/:id', (req, res) => {
  const index = trips.findIndex((t) => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Trip not found' });
  }
  trips.splice(index, 1);
  res.status(204).send();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Travel Price Tracker API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
