import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItensServiceService {

  constructor(private http: HttpClient) { }

  public getLanches() {
    return [
      {
        "name": "Byte Fries Fusion",
        "descricao": "Batatas crocantes, cuidadosamente temperadas e cobertas com uma camada de queijo derretido.",
        "price": 14.99,
        "category": "Entradas",
        "image": "../../assets/matthew-reyes-5I5aqYJrdso-unsplash.jpg"
      },
      {
        "name": "Cybernetic Crispy Chicken",
        "descricao": "tiras de frango crocantes e suculentas, cuidadosamente temperadas .",
        "price": 14.99,
        "category": "Entradas",
        "image": "../../assets/aleisha-kalina-WUfEd9RaVrw-unsplash.jpg"
      },
      {
        "name": "ByteBurger",
        "descricao": "Hambúrguer suculento com queijo cheddar, bacon crocante e molho especial, servido em pão de brioche.",
        "price": 14.99,
        "category": "Lanches",
        "image": "../../assets/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg"
      },
      {
        "name": "ScriptSizzle",
        "descricao": "Hambúrguer de frango grelhado com pimentões e cebolas, servido com molho picante e alface crocante.",
        "price": 13.99,
        "category": "Lanches",
        "image": "../../assets/carlos-davila-cepeda-yVFr_D_PxkQ-unsplash.jpg"
      },
      {
        "name": "VeggieCode",
        "descricao": "Hambúrguer vegetariano feito com grão de bico e cogumelos, acompanhado de molho especial.",
        "price": 12.99,
        "category": "Lanches",
        "image": "../../assets/junior-reis-XdNgE6NIHp4-unsplash.jpg"
      },
      {
        "name": "PythonPanini",
        "descricao": "Panini de peito de peru, queijo suíço, tomate e manjericão, prensado e crocante.",
        "price": 11.99,
        "category": "Lanches",
        "image": "../../assets/javier-molina-XXtrOkeAZN0-unsplash.jpg"
      },
      {
        "name": "BugByteBagel",
        "descricao": "Bagel de salmão defumado com cream cheese, alcaparras e cebola roxa.",
        "price": 13.49,
        "category": "Lanches",
        "image": "../../assets/mafe-estudio-LV2p9Utbkbw-unsplash.jpg"
      },
      {
        "name": "CodeFizz Sundae",
        "descricao": "Sundae de baunilha com calda de caramelo, chantilly e granulado de chocolate.",
        "price": 6.99,
        "category": "Sobremesas",
        "image": "../../assets/sundae.jpg"
      },
      {
        "name": "Algoritmo de Abacate",
        "descricao": "Torrada de abacate com ovo pochê e pimenta, servido com salada de rúcula.",
        "price": 11.99,
        "category": "Entradas",
        "image": "../../assets/Torrada.webp"
      },
      {
        "name": "ByteBruschetta",
        "descricao": "Bruschetta crocante com tomate, manjericão e azeite de oliva, finalizada com lascas de parmesão.",
        "price": 9.99,
        "category": "Entradas",
        "image": "../../assets/brusquetta.jpg"
      },
      {
        "name": "JavaJolt",
        "descricao": "Café expresso forte e encorpado, perfeito para os amantes de café.",
        "price": 4.49,
        "category": "Bebidas",
        "image": "../../assets/cafe.jpg"
      },
      {
        "name": "CodeFizz",
        "descricao": "Soda italiana refrescante com um toque cítrico, ideal para acompanhar qualquer refeição.",
        "price": 3.49,
        "category": "Bebidas",
        "image": "../../assets/soda.jpg"
      }
    ]
    
  }
}