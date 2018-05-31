export interface IBookmark {
    Name: string,
    Url: IUrl,
    Description: string,
    Denominator: 'IBookmark'
}

export interface IUrl {
    hash: string,
    host: string,
    hostname: string,
    href: string,
    readonly origin: string,
    password: string,
    pathname: string,
    port: string,
    protocol: string,
    search: string,
    username: string,
    toString(): string
}