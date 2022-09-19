import React from 'react';
import Context from './Context';
import Config from "react-native-config";

export default class GlobalState extends React.Component {
    state = {
        results: [],
        page: 1,
        term: ""
    }

    searchByTerm = async (term) => {
        try {
            const url = `https://pixabay.com/api/?key=${Config.API_KEY}&q=${term}&image_type=photo&per_page=30&page=1`
            const response = await fetch(url);
            const json = await response.json();
            this.setState({ 
                results: json.hits,
                page: 2,
                term: term
            });
        } catch (error) {
            console.log(error);
        }
    };

    handleMore = async () => {
        try {
            const url = `https://pixabay.com/api/?key=${Config.API_KEY}&q=${this.state.term}&image_type=photo&per_page=30&page=${this.state.page}`
            const response = await fetch(url);
            const json = await response.json();
            if(json.hits.length != 0) {
                this.setState({ 
                    results: [...this.state.results, ...json.hits],
                    page: this.state.page + 1
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <Context.Provider
                value={{
                    results: this.state.results,
                    page: this.state.page,
                    term: this.state.term,
                    searchByTerm: this.searchByTerm,
                    handleMore: this.handleMore
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}