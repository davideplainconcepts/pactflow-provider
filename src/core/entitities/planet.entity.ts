export interface Planet {
    id: string;
    name: string;
    orderFromSun: number;
    hasRings: boolean;
    mainAtmosphere: string[];
    surfaceTemperatureC: SurfaceTemperature;
}

export interface SurfaceTemperature {
    min: number | null;
    max: number | null;
    mean: number;
}