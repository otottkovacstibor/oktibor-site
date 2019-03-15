const { stringify } = require('qs');
const fetch = require('node-fetch');

const UPTIMEROBOT_API = 'https://api.uptimerobot.com/v2';
const { UPTIMEROBOT_API_KEY } = process.env;

const api = async (type) => {
  if (!UPTIMEROBOT_API_KEY) throw new Error('Missing Uptimerobot API key!');

  const options = {
    method: 'POST',
    timeout: 2000,
    body: stringify({
      api_key: UPTIMEROBOT_API_KEY, format: 'json', logs: 0, all_time_uptime_ratio: 0,
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  };

  const response = await fetch(`${UPTIMEROBOT_API}/${type}`, options);
  const json = await response.json();
  if (!response.ok) throw new Error(json.message);
  return json;
};

const methods = {
  getMonitors: async () => {
    try {
      const { monitors } = await api('getMonitors');
      return monitors.map(({ url, friendly_name, status }) => (
        { url, friendly_name, isOnline: status === 2 }
      ));
    } catch (e) {
      return console.log('Uptimerobot error: ', e);
    }
  }
};

module.exports = methods;
