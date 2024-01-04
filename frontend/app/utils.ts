const REGEX = /(?<id>\w{5,6})-(?<port>\d{1,5})\.(?<hostname>.*)/;
const API_PORT = 5000;

function getCodesandboxHost() {
  const currentUrl = location.host;
  const currentMatch = currentUrl.match(REGEX);

  if (!currentMatch?.groups) {
    return undefined;
  }
  const { id, hostname } = currentMatch.groups;

  if (!id || !hostname) {
    return undefined;
  }

  return `${id}-${API_PORT}.${hostname}`;
}

export function getApiHostUrl() {
  return process.env.NEXT_PUBLIC_CODESANDBOX_HOST
    ? `https://${getCodesandboxHost()}`
    : `http://127.0.0.1:${API_PORT}`;
}
