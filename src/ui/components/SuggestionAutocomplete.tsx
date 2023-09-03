import Autocomplete from "./Autocomplete";
import { connect, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { SuggestionsSelectors } from "../suggestions/suggestionsSelectors";
import { Suggestion } from "@/entities/types";
import {  selectFiltersAndFetch } from "../filters/filterSlice";
  
interface SuggestionAutocompleteProps {
  items: Suggestion[];
  onSearch: (val: string) => void;
}

const SuggestionAutocomplete = ({ items, onSearch }: SuggestionAutocompleteProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const onChange = (search: string) => { 
    onSearch(search)
  }

  const  onSelect = (search: string) => {
    dispatch(selectFiltersAndFetch({ search }))
  }
   
  return <Autocomplete items={items.map(i => i.text)} onChange={onChange} onSelect={onSelect} />;
};

const mapStateToProps = (state: RootState) => {
  const items = SuggestionsSelectors.selectAll(state)
  
  return {  
    items,
  }
}


export default connect(mapStateToProps)(SuggestionAutocomplete);
