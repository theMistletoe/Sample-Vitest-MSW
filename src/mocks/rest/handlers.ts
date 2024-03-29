import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get(`https://pokeapi.co/api/v2/pokemon/:id`, ({ params }) => {
        console.log(`Captured a "GET https://pokeapi.co/api/v2/pokemon/${params.id}" request`)
        return HttpResponse.json({
            name: "bulbasaur",
            height: 7,
            weight: 69,
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            }
        })
    }),
]