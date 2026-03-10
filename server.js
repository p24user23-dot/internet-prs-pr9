const express = require('express');
const cors = require('cors');

const hospitalsRouter = require('./routes/hospitals');
const doctorsRouter = require('./routes/doctors');
const patientsRouter = require('./routes/patients');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/hospitals', hospitalsRouter);
app.use('/api/doctors', doctorsRouter);
app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


