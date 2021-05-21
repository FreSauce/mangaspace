import { useParams } from "react-router-dom"

const MangaDetails = () => {

    const { id } = useParams();

    return(
        <div class="">
            <h2>Manga Details</h2>
            <h3>ID is {id}</h3>
        </div>
    );
};

export default MangaDetails;