import "./index.css";

const ContentList = ({content}) => {
    return (
        <ul>
            {
                content.map(item =>
                    <li key={item.id}>
                        <img width={150} src={item.image} alt={item.name}/>
                        <div>{item.name} ({item.species})</div>
                        <div>Location: {item.location.name}</div>
                    </li>
                )
            }
        </ul>
    );
};

export default ContentList;
