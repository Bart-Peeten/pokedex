export class Pokemon {
    name: string;
    type: string;
    pictureUrl: string;


    constructor(name: string, type: string, pictureUrl: string) {
        this.name = name;
        this.type = type;
        this.pictureUrl = pictureUrl;
    }
}
