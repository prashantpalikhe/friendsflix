import './search.css';

const SearchComponent = {
    bindings: {
        onQueryChanged: '&'
    },
    template:  `
        <div class="search">
            <input class="search__input" type="search" placeholder="Search by title..." ng-model="$ctrl.query" ng-change="$ctrl.onQueryChanged({query: $ctrl.query})" />
        </div>
    `
};

export default SearchComponent;