import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import NotFound from "../views/NotFound";
import PokemonList from "../views/PokemonList";
import AllPokemon from "../views/AllPokemon";
import FavoritePokemon from "../views/FavoritePokemon";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            title: 'Inicio'
        }
    },

    {
        path: '/pokemon-list',
        component: PokemonList,
        children: [
            {
                path: '/',
                name: 'AllPokemon',
                component: AllPokemon,
                meta: {
                    title: 'Lista Pokemon'
                }
            },
            {
                path: 'favorites',
                name: 'FavoritePokemon',
                component: FavoritePokemon,
                meta: {
                    title: 'Favoritos'
                }
            }
        ]
    },

    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach((to ) => {
    const { title } = to.meta
    document.title = `${title} | Pokedex APP`
})

export default router
