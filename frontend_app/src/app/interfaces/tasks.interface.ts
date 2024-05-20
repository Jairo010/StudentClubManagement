export interface ITasks {
    id?:         number,   
    name:        string;
    description: string;
    limittDate:  Date;
    state:       string;
    evidence:    string;
    idProject:   number;
}