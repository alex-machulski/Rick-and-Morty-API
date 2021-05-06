import axios from "axios";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character"
});

export const appAPI = {
    getCharacters(name = '', page = 1) {
        return name ? instance.get(`/?page=${page}&name=${name}`) : instance.get(`/?page=${page}`);
    },
    getCharactersByLink(link) {
        return axios.get(link);
    }
};