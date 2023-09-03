import Autocomplete from "./Autocomplete";
import { connect, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchSuggestions } from "../suggestions/thunks/fetchSuggestions";
import { SuggestionsSelectors } from "../suggestions/suggestionsSelectors";
import { Suggestion } from "@/entities/types";
  
interface SuggestionAutocompleteProps {
  items: Suggestion[];
  onSearch: (val: string) => void;
}

const SuggestionAutocomplete = ({ items, onSearch }: SuggestionAutocompleteProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const onChange = (q: string) => {
   dispatch(fetchSuggestions({ q }))
  }

  const  onSelect = (item: string) => {
    onSearch(item)
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
