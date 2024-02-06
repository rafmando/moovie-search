import { SearchInput } from "./search.styled"

export const Search = ({ setSearch }: any) => {
    const handleSearchProperties = (e: any) => {
        setSearch(e.target.value);
    };
    return <SearchInput placeholder="Search Movie" onChange={(e) => handleSearchProperties(e)} />
       
       
}