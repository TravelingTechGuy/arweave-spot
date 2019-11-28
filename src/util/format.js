import moment from 'moment-timezone';

export const formatDate = (updated, tz = 'America/Los_Angeles') => moment(updated).tz(tz).format('M/D/YYYY LTS z');

export const formatUnixDate = (updated, tz = 'America/Los_Angeles') => moment.unix(updated).tz(tz).format('M/D/YYYY LTS z');

export const formatNumber = str => Number(str) < 10**-4 ? str : Number(str).toLocaleString();

export const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

export const toGram = toz => (Number(toz.replace(',', '')) / 31.1035).toFixed(2);
