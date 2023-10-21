//import Button from 'components/Button';
//import Button from '@/components/shared/Button';
import theme, {Text} from '@/utils/theme'
import { textVariants } from '@/utils/theme/text-variants';
import { StatusBar } from 'expo-status-bar';
import { AppState, StyleSheet, View } from 'react-native';
import {ThemeProvider} from "@shopify/restyle"
import Navigation from '@/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useUserGlobalStore from '@/store/useUserGlobalStore';
import { useEffect } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { fetcher } from '@/services/config';

export default function App() {
 
  return (
    <ThemeProvider theme = {theme}>
    <SafeAreaProvider>
    <SWRConfig  value={{
            provider: () => new Map(),
            isVisible: () => {
              return true
            },
            initFocus(callback) {
              let appState = AppState.currentState

              const onAppStateChange = (nextAppState: any) => {
                /* If it's resuming from background or inactive mode to active one */
                if (
                  appState.match(/inactive|background/) &&
                  nextAppState === "active"
                ) {
                  callback()
                }
                appState = nextAppState
              }

              // Subscribe to the app state change events
              const subscription = AppState.addEventListener(
                "change",
                onAppStateChange
              )

              return () => {
                subscription.remove()
              }
            },
          }}
        >
    <Navigation/>
    </SWRConfig>
    <StatusBar translucent/>
    </SafeAreaProvider>
    </ThemeProvider>
  );
}

