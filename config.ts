const plugins: any = {

};

export default {
  bot: {
    owner: 1073166996
  },
  connect: {
    token: 'ThisIsAVeryVeryVeryLongPassword',
    host: '120.53.4.161',
    ws_port: 6700,
    http_port: 5700,
    reconnect: 3000
  },
  logger: {
    level: 'info'
  },
  webui: {
    enable: true,
    port: 8000,
    access_token: '123',
    hostname: '127.0.0.1'
  },
  plugins: plugins
};