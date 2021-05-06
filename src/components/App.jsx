import Header from "./Header";
import ContentList from "./ContentList";
import {useFetchContent} from "../hooks/useFetchContent";
import "./App.css";
import {useEffect, useState} from "react";
import FetchMoreButton from "./FetchMoreButton";
import {useDispatch, useSelector} from "react-redux";
import {setFetchMoreVisibilityAC} from "../state/app-reducer";

const App = () => {
    const [content, fetch, fetchMore] = useFetchContent();
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const dispatch = useDispatch();
    const charactersList = useSelector(state => state.app.characters);
    const charactersPortion = useSelector(state => state.app.portion);
    const nextPage = useSelector(state => state.app.nextPage);
    const isFetchMoreEnabled = useSelector(state => state.app.isFetchMoreEnabled);
    const searchError = useSelector(state => state.app.searchError);

    useEffect(() => {
        if (isFirstLoad) {
            fetch();
            setIsFirstLoad(false);
        }
    }, []);

    const fetchMoreHandler = () => {
        let finalList = charactersList ? charactersList : content;
        fetchMore(finalList, charactersPortion, nextPage)
    };

    if (charactersList.length !== 0 && charactersPortion.length !== 0) {
        if (!nextPage && charactersList[charactersList.length - 1].id === charactersPortion[charactersPortion.length - 1].id) {
            dispatch(setFetchMoreVisibilityAC(false));
        }
    } else if (charactersList.length === 0) {
        dispatch(setFetchMoreVisibilityAC(false));
    } else {
        dispatch(setFetchMoreVisibilityAC(true));
    }

    return (
        <div className="App">
            <Header onSearch={fetch}/>
            <h1>Simple content list</h1>
            <h2>{searchError}</h2>
            <ContentList content={charactersList ? charactersList : content}/>
            {isFetchMoreEnabled && <FetchMoreButton onClick={fetchMoreHandler}/>}
        </div>
    );
};

export default App;
