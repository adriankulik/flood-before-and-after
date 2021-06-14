import photo from './data/db';

function PhotosList(props) {
    return (
        <div className="photos">
            {photo.map((props) => (
                <div className="photos__container" key={props.id}>
                    <h2 className="photos__h2"> {props.title} </h2>
                    <img className="photos__floodImg" alt={props.alt} src={props.relativePath_floodStage}></img>
                </div>
            ))}
        </div>
    );
};

export default PhotosList;