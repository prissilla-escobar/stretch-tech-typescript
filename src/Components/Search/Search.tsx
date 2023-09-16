import './Search.css'
import dunkLogo from '../../Assets/Jumpman_logo.svg.png'

type SearchProps = {
  setSearchTerm: (term: string) => void;
};

const Search = ({ setSearchTerm }: SearchProps) => {
    const handleSubmit = (event: any) => {
      event.preventDefault()
  }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    

    return (
        <div className="search-area">
            <form onSubmit={handleSubmit}>
                <input 
                  type='search' 
                  id="searchInput" 
                  name="q" 
                  placeholder='Search Team Name & Dunk >' 
                  onChange={handleInputChange}
                />
            </form>
            <img className="dunk-logo" src={dunkLogo} alt="a black silhouette of a man dunking a basketball" />
        </div>
    );
}

export default Search;