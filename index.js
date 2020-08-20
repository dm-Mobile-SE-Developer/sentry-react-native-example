/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import * as Sentry from '@sentry/react-native';

AppRegistry.registerComponent(appName, () => App);

console.log('test');
Sentry.init({
    beforeBreadcrumb(breadcrumb, hint) {
    return null; // this disables all JS breadcrumbs
    },
    dsn: 'PLACEHOLDER',
    enableNative: true,
    enableNativeCrashHandling: true,
    enabled: true, // this has to be true, preventing crashes from being sent is handled in shouldSendEvent
    environment: 'development',
});
