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
        const workBook = XLSX.readFile('./newFile.xls');
        const sheetNameList = workBook.SheetNames;
        const data = XLSX.utils
            .sheet_to_json(workBook.Sheets[sheetNameList[0]]);

        const filteredData = [];
        data.forEach(el => {
          const props = Object.keys(el);
          /* Библиотека XLSX при конвертации xls файла в json
             в названии ключей объектов товаров использует
             '__EMPTY' и '__EMPTY_1'.
          */
          if (props.includes('__EMPTY')
              && props.includes('__EMPTY_1')
              && !props.includes('__EMPTY_2')
          ) {
            const obj = {};
            props.forEach(prop => {
              switch (prop) {
                case '__EMPTY':
                  obj.code = el[prop];
                  break;
                case '__EMPTY_1':
                  obj.price = el[prop];
                  break;
                default:
                  obj.name = el[prop];
              }
            });

            filteredData.push(obj);
          }
        });

        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(filteredData);

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
