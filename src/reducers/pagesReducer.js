import types from 'actions/types';
const {
  REMOVE_SELECTED_GENRE,
  GET_DJ,
  FILTER_SEARCH_SUCCESS,
  GET_ARTISTS_SUCCESS,
} = types;
const INITIAL_STATE = {
  artistsPage: {
    selectedGenres: [],
    selectedPrice: '0',
    selectedDate: Date.now(),
    results: [],
  },
};

export default function pagesReducer(state = INITIAL_STATE, action) {
  if (action.type === '@@redux-form/CHANGE') {
    switch (action.meta.field) {
      case 'genre':
        return Object.assign({}, state, {
          artistsPage: Object.assign({}, state.artistsPage, {
            selectedGenres: state.artistsPage.selectedGenres
              .filter(el => el !== action.payload.toString())
              .concat(action.payload),
          }),
        });

      default:
        return state;
    }
  }

  if (action.type === GET_ARTISTS_SUCCESS) {
    return Object.assign({}, state, {
      artistsPage: Object.assign({}, state.artistsPage, {
        results: action.data.result,
      }),
    });
  }

  if (action.type === REMOVE_SELECTED_GENRE) {
    return Object.assign({}, state, {
      artistsPage: Object.assign({}, state.artistsPage, {
        selectedGenres: state.artistsPage.selectedGenres.filter(
          el => el !== action.payload.toString()
        ),
      }),
    });
  }

  if (action.type === GET_DJ) {
    return Object.assign({}, state, {
      artistID: action.payload,
    });
  }

  return state;
}
