import faker from 'faker'
import { Mappable } from './CustomMap'

export class User implements Mappable {
    name: string
    location: {
        lat: number
        lng: number
    }

    constructor(){
        this.name = faker.name.findName()
        this.location = {
            lat: parseFloat(faker.address.latitude()), 
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `<div>
        <h1>User name: ${this.name}</h3>
        <h3>Latitude: ${this.location.lat}
        <br>
        Longitude: ${this.location.lng}</h3>
        </div>`
    }
}