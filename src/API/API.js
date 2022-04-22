// Récupération des infos de la classe d'instrument
export function getClasse() {
    const url = 'http://192.168.1.196/EMusicK/public/Instrument/listerClasseInstrument2'
    return fetch(url,  {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }})
      .then((response) => response.json())
      .catch((error) => console.error(error))
}