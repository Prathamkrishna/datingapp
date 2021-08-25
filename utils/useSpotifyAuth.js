import { useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import * as AuthSession from 'expo-auth-session';
import axios from "axios";
import { envVariables } from "../vars";

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};
const USE_PROXY = Platform.select({
  web: false,
  default: Constants.appOwnership === "standalone" ? false : true,
});
const REDIRECT_URI = AuthSession.getDefaultReturnUrl()
const CLIENT_ID = envVariables.spotifyClientId;
const SCOPE = [
  'user-top-read',
  'user-read-recently-played',
  'user-read-private',
  'user-read-email'
];

WebBrowser.maybeCompleteAuthSession();


export default function useSpotifyAuth() {
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authResponse, result, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri: REDIRECT_URI,
      scopes: SCOPE,
      usePKCE: false,
      responseType: AuthSession.ResponseType.Token,
    },
    {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: '', // typed as required, but not used with implicit grant
    },
  );
  useEffect(() => {
    async function updateFromAuthResponseAsync() {
      if (authResponse === null) {
        return;
      } else if (authResponse.type === "error") {
        setError(authResponse.error);
        return;
      } else if (authResponse.type === "success") {
        // console.log(authResponse)
      }
    }

    if (!isAuthenticated) {
      updateFromAuthResponseAsync();
    }
  }, [authResponse]);
  useEffect(() => {
    if (result?.type === 'success') {
      const { access_token: token, expires_in: expiresIn } = result.params;
      const expires = new Date().getTime() + Number(expiresIn) * 1000;
      // console.log(token,expires)
    }
  }, [result?.type]);
  return {
    error,
    isAuthenticated,
    authenticateAsync: () => promptAsync({ useProxy: USE_PROXY }),
  };
}
