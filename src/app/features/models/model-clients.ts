export interface usersSale{
    userId: string,
    fullName: string,
    rol: string,
    job: string
}

export interface User {
    uid?: string;
    token?: string;
    currentToken?: string;
    name?: string;
    email?: string;
    rol?: string;
  }

export const Days=[
    {id:1, day: "1"},
    {id:2, day: "2"},
    {id:3, day: "3"},
    {id:4, day: "4"},
    {id:5, day: "5"},
    {id:6, day: "6"},
    {id:7, day: "7"}
]