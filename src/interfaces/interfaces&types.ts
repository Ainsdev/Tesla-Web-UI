export type PreviewCarType = {
    name: string;
    photo: string;
    path: string;
};

export type TeslaCarType = {
    name?: string;
    bgImages?: Array<string>;
    principalData?: {
        range: number;
        velocity: number;
        topSpeed: number;
        power: number;
    };
    data?: object;
}