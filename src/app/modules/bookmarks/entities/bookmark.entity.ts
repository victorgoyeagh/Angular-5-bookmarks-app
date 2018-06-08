export interface IBookmark {
    Id: number,
    Name: string,
    Url: string,
    Description: string,
    Denominator: 'IBookmark'
}

export interface IUrl {
    hash?: string,
    host?: string,
    hostname?: string,
    href: string,
    pathname?: string,
    port?: string,
    protocol?: string,
    search?: string,
    toString(): string
}