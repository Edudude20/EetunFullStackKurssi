import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'; //database url

const create = (newPerson) => {
    const request = axios.post(baseURL, newPerson);
    return request.then((response) => response.data);
}

const getAll = () => {
    const request = axios.get(baseURL);
    return (
        request.then((response) => response.data)
    );
}
/**
 * 
 * @param {number} id persons id that will be removed
 */
const removePerson = (id) => {
    //console.log(`remove person id: `, id);
    const request = axios.delete(`${baseURL}/${id}`)
    return request;
}

export default {
    create,
    getAll,
    removePerson
};

