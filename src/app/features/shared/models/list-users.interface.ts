export interface ItemUser{
    userId:string;
    fullName:string;
    email:string;
    rol:string;
    rolId:number;
    job: string;
    status:string;
}

export interface ItemUserEdit{
    userId:string;
    fullName:string;
    email:string;
    rol:string;
    rolId:number,
    job: string;
    editing:boolean;
    fullNameTemp:string;
    status:string;
    updating:boolean;
}