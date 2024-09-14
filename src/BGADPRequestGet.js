export const BGADPRequestGet = (path) => {
  return requestGet(path)
}

async function requestGet(path) {
  const setUrl = `https://api.mercadolibre.com/${path}`;
  try {
    const response = await fetch(setUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    return error.message;
  }
}

