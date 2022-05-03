// IMPORT packages
import express from 'express';
import easyinvoice from 'easyinvoice';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 8000;


// Server listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})