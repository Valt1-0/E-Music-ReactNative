// Récupération des infos de la classe d'instrument
export function getClasse() {
    const url = 'http://172.20.177.77/EMusicK-ReactNative/public/Instrument/listerClasseInstrument2'
    return fetch(url,  {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }})
      .then((response) => response.json())
      //.then((response) => console.log(response))
      .catch((error) => console.error(error))
}