export type CardsTop100Type = {
    films: FilmsType[],
    pagesCount: number
}

type FilmsType = {
    countries: CountriesType[]
    filmId: number,
    filmLength: string,
    genres: GenresType[],
    nameEn?: string | null,
    nameRu: string | null,
    posterUrl: string,
    posterUrlPreview: string,
    rating: string,
    ratingChange: string | null,
    ratingVoteCount: number,
    year: string
}

type CountriesType = {
    country: string
}

type GenresType = {
    genre: string
}


export type CardsHomeType = {
    total: number,
    totalPages: number,
    items: ItemsType[]
}

export type ItemsType = {
    countries: CountriesType[],
    genres: GenresType[],
    imdbId: string,
    kinopoiskId: number,
    filmLength: string,
    nameEn?: string | null,
    nameOriginal?: string,
    nameRu: string | null,
    posterUrl: string,
    posterUrlPreview: string,
    ratingImdb: number,
    ratingKinopoisk: number,
    type: string,
    year: string
}