import './Search.css'
import dunkLogo from '../../Assets/Jumpman_logo.svg.png'

const Search: React.FC = () => {
    return (
        <div className="search-area">
            <form>
                <input type='search' id="searchInput" name="q" placeholder='Dunk in a Team Name to Find' />
            </form>
            <img className="dunk-logo" src={dunkLogo} alt="a black silouhette of a man dunking a basketball" />
        </div>
    )
}

export default Search