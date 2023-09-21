import axios from "axios";
const baseURL = "http://localhost:3001/notes";

/**
 * @description Muistiinpanopalvelut määrittelevä moduuli
 */

const getAll = () => {
  const request = axios.get(baseURL);
  const nonExistingNote = {
    //fake note to hard-code simulate user trying to get a note that doesn't exist
    id: 1000,
    content: 'This note is not saved to server',
    important: true,
  };

  return request.then((response) => response.data.concat(nonExistingNote));
};

const create = (newObject) => {
  const request = axios.post(baseURL, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  // Olion määrittelyssä vasemmalla puolella kaksoispistettä olevat nimet tarkoittavat eksportoitavan olion kenttiä,
  // kun taas oikealla puolella olevat nimet ovat moduulin sisällä määriteltyjä muuttujia.
  // Koska olion kenttien nimet ovat samat kuin niiden arvon määrittelevien muuttujien nimet, voidaan olion määrittely kirjoittaa tiiviimmässä muodossa:
  getAll,
  create,
  update,
};
