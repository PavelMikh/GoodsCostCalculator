import http from 'http';
import fs from 'fs';

export const download = (url, dest, cb) => {
  const file = fs.createWriteStream(dest);
  const request = http.get(url, (response) => {
    response.pipe(file);
  })
}
