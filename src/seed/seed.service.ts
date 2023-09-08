import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios'
import { PokemonAPIResponse } from './interfaces/PokemonApiResponse';

@Injectable()
export class SeedService {

  readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokemonAPIResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')
    data.results.forEach(({ name, url}) => {
        const segments = url.split('/')
        const no = segments[segments.length - 2]
        console.log({name, no})
    })
  }
}
