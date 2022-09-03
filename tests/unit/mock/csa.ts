import { CSAGameSummary } from "@/ipc/csa";
import {
  CSAGameSetting,
  CSAGameSettingHistory,
  CSAServerSetting,
} from "@/settings/csa";
import { Color } from "@/shogi";

export const playerURI = "es://usi/test-engine";

const playerSetting = {
  name: "USI Engine",
  uri: playerURI,
  usi: {
    uri: playerURI,
    name: "my usi engine",
    defaultName: "engine",
    author: "author01",
    path: "/engines/engine",
    options: {},
  },
};

export const csaServerSetting: CSAServerSetting = {
  host: "test-server",
  port: 4081,
  id: "TestPlayer",
  password: "test-password",
};

export const csaGameSetting: CSAGameSetting = {
  player: playerSetting,
  server: csaServerSetting,
  autoFlip: true,
};

export const emptyCSAGameSettingHistory: CSAGameSettingHistory = {
  player: playerSetting,
  serverHistory: [],
  autoFlip: true,
};

export const singleCSAGameSettingHistory: CSAGameSettingHistory = {
  player: playerSetting,
  serverHistory: [
    {
      host: "test-server",
      port: 4081,
      id: "TestPlayer",
      password: "test-password",
    },
  ],
  autoFlip: true,
};

const initialPosition = `\
P1-KY-KE-GI-KI-OU-KI-GI-KE-KY
P2 * -HI *  *  *  *  * -KA * 
P3-FU-FU-FU-FU-FU-FU-FU-FU-FU
P4 *  *  *  *  *  *  *  *  * 
P5 *  *  *  *  *  *  *  *  * 
P6 *  *  *  *  *  *  *  *  * 
P7+FU+FU+FU+FU+FU+FU+FU+FU+FU
P8 * +KA *  *  *  *  * +HI * 
P9+KY+KE+GI+KI+OU+KI+GI+KE+KY
P+
P-
+`;

export const csaGameSummary: CSAGameSummary = {
  id: "test-game",
  blackPlayerName: "me",
  whitePlayerName: "enemy",
  myColor: Color.BLACK,
  toMove: Color.BLACK,
  position: initialPosition,
  timeUnitMs: 1000,
  totalTime: 600,
  byoyomi: 30,
  delay: 0,
  increment: 0,
};
