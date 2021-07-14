import { LatLngExpression } from "leaflet"
import { Rendement } from "./rendement"

export class Producteur {
    Lastname!: string
    Firstname!: string
    Village!: string
    GPSLocation!: LatLngExpression
    Performance!: number
    Rendements?: Rendement[]
}
