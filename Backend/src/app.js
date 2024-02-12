const express = require('express');
const path = require('path');

const aplicantsRoutes = require('./routes/aplicants');
const professionsRoutes = require('./routes/professions');

const methodOverride = require('method-override');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3031;

app.use(cors());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/aplicantes', aplicantsRoutes);
app.use('/profesiones', professionsRoutes);

app.listen(PORT, () =>
   console.log(`[running on]: http://localhost:${PORT}/`)
)