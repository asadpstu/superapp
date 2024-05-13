/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import {name as appName} from './app.json';
import App from './App';

const resolveURL = Federated.createURLResolver({
  containers: {
    rnsuperapp: 'https://8381-119-30-46-168.ngrok-free.app/[name][ext]', //ngrok http 8081
    rnminiappone: 'http://5ixvnm-ip-119-30-37-203.tunnelmole.net/[name][ext]', //tmole 8083
    chorki: 'http://bore.pub:51066/[name][ext]', //bore local 8084 --to bore.pub
    child_app_one: 'https://ten-years-camp.loca.lt/[name][ext]' // lt --port 8085
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
