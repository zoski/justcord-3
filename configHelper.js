/* eslint-disable no-template-curly-in-string */
// Do not edit this file - edit config.json instead.

import { loadJSON, saveJSON } from "./util";

const defaultConfig = {
    eris: {
        token: "TOKEN GOES HERE",
        id: "CHANNEL ID GOES HERE",
        topicTimeout: 10000,
        playing: "Just Cause 3 Multiplayer"
    },
    formatting: {
        discordToGame: {
            chat: "${nick}: ${message}",
            colour: "7289DA"
        },
        gameToDiscord: {
            topic: "Join the server at xxx.xxx.xxx.xxx:port | ${players}/${maxPlayers} players currently online | Current tick rate: ${jcmp.server.currentTickRate}",
            chat: "${username}: ${message}",
            death: "${username} ${(killer && killer.name ? \"was killed by \" + killer.name : \"died\")}",
            connect: "${username} connected to the server.",
            disconnect: "${username} disconnected from the server."
        }
    }
};

export default function getFullConfig() {
    const loadedConfig = loadJSON("./config.json");
    const fullConfig = Object.assign(defaultConfig, loadedConfig);

    if (fullConfig.length > loadedConfig.length) {
        fullConfig.lastUpdated = (new Date()).toUTCString();
        saveJSON("./config.json", fullConfig);
    }

    return fullConfig;
}
