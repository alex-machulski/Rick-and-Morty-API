import {useCallback, useState} from "react";
import {appAPI} from "../api/api";
import {useDispatch} from "react-redux";
import {
    clearCharacterListAC,
    setCharactersListAC, setFetchMoreVisibilityAC,
    setNextPageAC,
    setPortionAC, setSearchErrorAC
} from "../state/app-reducer";

export const useFetchContent = () => {

    const dispatch = useDispatch();
    const [imgList, setImgList] = useState([]);

    const fetch = useCallback(async (value) => {
        try {
            const res = await appAPI.getCharacters(value);
            if (res.data) {
                const arr = res.data.results;
                setImgList(arr.slice(0, 10));
                dispatch(clearCharacterListAC());
                dispatch(setCharactersListAC(arr.slice(0, 10)));
                dispatch(setPortionAC(arr));
                dispatch(setNextPageAC(res.data.info.next));
                if (arr.length > 10) {
                    dispatch(setFetchMoreVisibilityAC(true));
                }
            }
        } catch (err) {
            dispatch(clearCharacterListAC());
            dispatch(setSearchErrorAC(err.response.data.error));
            dispatch(setFetchMoreVisibilityAC(false));
        }
    }, [dispatch]);

    const fetchMore = useCallback(async (imagesList, imagesPortion, nextPage) => {
        if (imagesList[imagesList.length - 1].id !== imagesPortion[imagesPortion.length - 1].id) {
            dispatch(setCharactersListAC(imagesPortion.slice(10)))
        } else {
            const res = await appAPI.getCharactersByLink(nextPage);
            if (res.data) {
                const arr = res.data.results;
                dispatch(setPortionAC(arr));
                dispatch(setCharactersListAC(arr.slice(0, 10)));
                dispatch(setNextPageAC(res.data.info.next));
            }
        }
    }, [dispatch]);

    return [imgList, fetch, fetchMore];
};

/* fetch images from this url: https://rickandmortyapi.com/api/character/
(to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick) */
