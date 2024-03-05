import styles from "./page.module.css";
import Link from "next/link";
import PokemonPage from "./components/PokemonPage";
import PokemonDetail from "./components/PokemonDetail";

export default function Home() {
    return (
        <>
            <nav>
                Gotta Catch 'em all!
                <Link href="/inventory">Go to Inventory!</Link>
            </nav>
            <main>
                <PokemonPage />
                <PokemonDetail />
            </main>
        </>
    );
}
