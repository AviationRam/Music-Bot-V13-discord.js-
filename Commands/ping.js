const i18n = require("../util/i18n");

module.exports = {
  name: "ping",
  cooldown: 10,
  description: i18n.__("ping.description"),
  execute(message) {
    message
      .reply(i18n.__mf("ping.result", { ping: Math.round(message.client.ws.ping) }))
      .catch(console.error);
  }
};
//Made by ramdoguy3659#0001
//Independent Company
//Copyright 2021 Matthew's Private Commissions.
//MIT License 
