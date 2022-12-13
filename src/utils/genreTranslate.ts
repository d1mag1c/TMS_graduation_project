import {FILM, MINI_SERIES, TV_SERIES, TV_SHOW} from "../constants";

export const genreTranslate = (type: string) => {
    switch (type) {
        case FILM:
            return 'Фильм'
        case TV_SHOW:
            return 'ТВ-шоу'
        case TV_SERIES:
            return 'Сериал'
        case MINI_SERIES:
            return 'Мини-сериал'
        default:
            return type
    }
}