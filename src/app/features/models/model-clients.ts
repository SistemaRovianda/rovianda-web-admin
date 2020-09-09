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
    {id:1, day: "Lunes"},
    {id:2, day: "Martes"},
    {id:3, day: "Miércoles"},
    {id:4, day: "Jueves"},
    {id:5, day: "Viernes"},
    {id:6, day: "Sábado"},
    {id:7, day: "Domingo"}
]