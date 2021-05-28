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
        component: Index
    },

    {
        path: '/pokemon-list',
        component: PokemonList,
        children: [
            {
                path: '/',
                name: 'AllPokemon',
                component: AllPokemon,
            },
            {
                path: 'favorites',
                name: 'FavoritePokemon',
                component: FavoritePokemon,
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

export default router
