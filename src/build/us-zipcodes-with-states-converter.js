import fs from 'fs';

const csvFilePath = './us-zipcodes-with-states.csv';
const jsonFilePath = './us-zipcodes-with-states.json';

const csvRows = fs.readFileSync(csvFilePath, 'utf8').split('\r\n').filter(Boolean);
const values = csvRows.map(c => {
  const split = c.split(',')
  const value = { stateAbbreviation: split[0], zip5: split[1]}
  return value
})
const json = JSON.stringify(values, null, 2);

fs.writeFileSync(jsonFilePath, json);

