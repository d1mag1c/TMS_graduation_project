export type CardsTopFilmsType = {
    films: FilmsType[],
    pagesCount: number
}

export type FilmsType = {
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

export type CardReviewType = {
    kinopoiskId: number,
    imdbId?: number,
    nameRu?: string,
    nameEn?: string,
    nameOriginal?: string,
    posterUrl: string,
    posterUrlPreview?: string,
    coverUrl: string,
    logoUrl?: string,
    reviewsCount: number,
    ratingGoodReview: number,
    ratingGoodReviewVoteCount: number,
    ratingKinopoisk: number,
    ratingKinopoiskVoteCount: number,
    ratingImdb: number,
    ratingImdbVoteCount: number,
    ratingFilmCritics: number,
    ratingFilmCriticsVoteCount: number,
    ratingAwait?: number,
    ratingAwaitCount: number,
    ratingRfCritics: number,
    ratingRfCriticsVoteCount: number,
    webUrl: string,
    year: number,
    filmLength: number,
    slogan?: string,
    description: string,
    shortDescription: string,
    editorAnnotation?: string,
    isTicketsAvailable?: boolean,
    productionStatus?: string,
    type: string,
    ratingMpaa?: string,
    ratingAgeLimits: string,
    countries: CountriesType[],
    genres: GenresType[],
    startYear?: number,
    endYear?: number,
    serial?: string,
    shortFilm?: string,
    completed?: boolean,
    hasImax?: string,
    has3D?: string,
    lastSync?: string,
}

export type CardsSimilarType = {
    total: number,
    items: ItemsSimilarType[]

}

type ItemsSimilarType = {
    filmId:number,
    nameRu:string,
    nameEn:string,
    nameOriginal:string,
    posterUrl:string,
    posterUrlPreview:string,
    relationType:string
}

export type VideoType = {
    total: number,
    items: ItemsVideoType[]
}

type ItemsVideoType = {
    url: string,
    name: string,
    site: string
}