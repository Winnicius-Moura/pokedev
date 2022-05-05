//const é imutável já o let pode ser alterado e o var é a ultima opção a ser utilizada. estudar melhor dps...
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    
    pokemon.addEventListener('click',()=> {        
        

        //troca de cartoes
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado =  pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')
        
        
        //troca de itens na lista

        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')
        
        const pokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoListagem.classList.add('ativo')


    })
})
  
