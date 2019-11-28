import cheerio from 'cheerio';
import moment from 'moment-timezone';

const SITE_URL = 'https://www.kitco.com/market/';
const PMs = [
  {symbol: 'AU', name: 'gold'},
  {symbol: 'AG', name: 'silver'},
  {symbol: 'PT', name: 'platinum'},
  {symbol: 'PD', name: 'palladium'},
  {symbol: 'RH', name: 'rhodium'},
];

export const callService = async tz => {
  tz = tz || Intl.DateTimeFormat().resolvedOptions().timeZone;
  let result = {
    date: moment.tz(tz).format('M/D/YYYY LTS z')
  };
  try {
    let response = await fetch(SITE_URL, {
      mode: 'no-cors',
      cache: 'no-cache',
      referrer: 'no-referrer',
      headers: {'Access-Control-Allow-Origin': '*'}
    });
    let text = await response.text();
    let $ = cheerio.load(text);
    console.log(text)
    PMs.forEach(pm => {
      result[pm.name] = {
        symbol:    pm.symbol,
        spot:      $(`#${pm.symbol}-ask`).text(),
        change:    $(`#${pm.symbol}-change`).text(),
        changePct: $(`#${pm.symbol}-change-percent`).text()
      };
    });
    return result;
  }
  catch(err) {
    console.error(err);
    throw err;
  }
};
