export interface PokemonPage {
    results: { name: string }[];
    next: string | null;
    previous: string | null;
}
