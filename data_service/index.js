import express from 'express';
import path from 'path';
import * as fs from 'fs';
import https from 'https';
import XLSX from 'xlsx';

import {config} from './config.js';

const app = express();
const PORT = process.env.PORT ?? config.port;
const __dirname = path.resolve();


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

app.get('/data', (req, res) => {
  const file = fs.createWriteStream('./newFile.xls');

  https.get(config.dataUrl, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        const wb = XLSX.readFile('./newFile.xls');
        const sheetNameList = wb.SheetNames;
        const data = XLSX.utils.sheet_to_json(wb.Sheets[sheetNameList[0]]);

        res.status(200).json(data);

        fs.unlink('./newFile.xls', (err) => {
          if (err) {
            console.error('Err: ', err);
          }
        });
      });
    });
  }).on('error', (err) => {
    console.log('Error: ', err.message);
  })
});

app.listen(PORT, () => console.log(`Server listen port: ${PORT}...`));
