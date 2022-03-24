import { Fixtures } from '../../interfaces'

const fixtures: Fixtures = {
  pr_allergens: [
    {
      id_allergen: 'eggs',
      description: 'can be found in cakes, sauces and pastries',
      __STATE__: 'PUBLIC',
    },
    {
      id_allergen: 'fish',
      description: 'found in pizza, dressings and Worcestshire sauce',
      __STATE__: 'PUBLIC',
    },
  ],
  pr_allergens_registry: [
    {
      ID_ALLERGEN: 'eggs',
      ID_USER: 'ebc12dc8-939b-447e-88ef-6ef0b802a487',
      COMMENTS: 'this is a comment change',
      __STATE__: 'PUBLIC',
    },
    {
      ID_ALLERGEN: 'fish',
      ID_USER: 'asdasdf8-939b-447e-88ef-6ef0b80fdsaf',
      COMMENTS: 'i love fish so I can not eat them',
      __STATE__: 'PUBLIC',
    },
  ],
  pr_dishes: [
    {
      id_dish: 'Amatriciana_id',
      id_restaurant: 'Pinzimonio_id',
      price: 12,
      description: 'a delicious dish',
      __STATE__: 'PUBLIC',
    },
    {
      id_dish: 'Cotoletta_id',
      id_restaurant: 'Pinzimonio_id',
      price: 12,
      description: 'a splendid dish',
      __STATE__: 'PUBLIC',
    },
    {
      id_dish: 'Bolgheri_id',
      id_restaurant: 'Pulcinella_id',
      price: 12,
      description: 'a splendid dish',
      __STATE__: 'PUBLIC',
    },
    {
      id_dish: 'Tignanello_id',
      id_restaurant: 'Pulcinella_id',
      price: 99,
      description: 'best seller dish',
      __STATE__: 'PUBLIC',
    },
  ],
  pr_orders: [
    {
      ID_ORDER: 'd2829a1d-80ca-4eff-a93a-e97c83a5550f',
      ID_USER: 'ebc12dc8-939b-447e-88ef-6ef0b802a487',
      DATE: '2007-12-03T02:55:44.000Z',
      TOTAL_PRICE: '52.54',
      ORDER_STATUS: 'In shipping',
      PAYMENT_TYPE: 'Cash',
      __STATE__: 'PUBLIC',
    },
    {
      ID_ORDER: 'b6789a1d-80ca-4eff-a93a-e97c83a666aa',
      ID_USER: 'asdasdf8-939b-447e-88ef-6ef0b80fdsaf',
      DATE: '2018-01-04T02:43:44.000Z',
      TOTAL_PRICE: '52.78',
      ORDER_STATUS: 'Completed',
      PAYMENT_TYPE: 'Credit Card',
      __STATE__: 'PUBLIC',
    },
  ],
  pr_orders_dishes: [
    {
      ID_ORDER: 'd2829a1d-80ca-4eff-a93a-e97c83a5550f',
      ID_DISH: 'Amatriciana_id',
      __STATE__: 'PUBLIC',
    },
    {
      ID_ORDER: 'd2829a1d-80ca-4eff-a93a-e97c83a5550f',
      ID_DISH: 'Cotoletta_id',
      __STATE__: 'PUBLIC',
    },
    {
      ID_ORDER: 'b6789a1d-80ca-4eff-a93a-e97c83a666aa',
      ID_DISH: 'Cotoletta_id',
      __STATE__: 'PUBLIC',
    },
    {
      ID_ORDER: 'b6789a1d-80ca-4eff-a93a-e97c83a666aa',
      ID_DISH: 'Tignanello_id',
      __STATE__: 'PUBLIC',
    },
  ],
  pr_registry: [
    {
      ID_USER: 'ebc12dc8-939b-447e-88ef-6ef0b802a487',
      TAX_CODE: 'tax_code',
      NAME: 'MARIO',
      SURNAME: 'ROSSI',
      EMAIL: 'email_mario',
      ADDRESS: 'address_1',
      PHONE: 'phone_number_1',
      PROFESSION: 'profession 1',
      __STATE__: 'PUBLIC',
    },
    {
      ID_USER: 'asdasdf8-939b-447e-88ef-6ef0b80fdsaf',
      TAX_CODE: 'tax_code',
      NAME: 'LUIGI',
      SURNAME: 'VERDI',
      EMAIL: 'email_luigi',
      ADDRESS: 'address_2',
      PHONE: 'phone_number_2',
      PROFESSION: 'profession 2',
      __STATE__: 'PUBLIC',
    },
  ],
  pr_restaurants: [
    {
      id_restaurant: 'Pinzimonio_id',
      name: 'Pinzimonio',
      __STATE__: 'PUBLIC',
    },
    {
      id_restaurant: 'Pulcinella_id',
      name: 'Pulcinella',
      __STATE__: 'PUBLIC',
    },
  ],
  pr_reviews: [
    {
      ID_REVIEW: 'review_1',
      ID_USER: 'ebc12dc8-939b-447e-88ef-6ef0b802a487',
      ID_DISH: 'Amatriciana_id',
      TEXT: 'Spectacular!',
      STARS: 5,
      __STATE__: 'PUBLIC',
    },
    {
      ID_REVIEW: 'review_2',
      ID_USER: 'ebc12dc8-939b-447e-88ef-6ef0b802a487',
      ID_DISH: 'Cotoletta_id',
      TEXT: 'Tasteless!',
      STARS: 1,
      __STATE__: 'PUBLIC',
    },
    {
      ID_REVIEW: 'review_3',
      ID_USER: 'asdasdf8-939b-447e-88ef-6ef0b80fdsaf',
      ID_DISH: 'Cotoletta_id',
      TEXT: 'Pretty bad...',
      STARS: 2,
      __STATE__: 'PUBLIC',
    },
    {
      ID_REVIEW: 'review_4',
      ID_USER: 'asdasdf8-939b-447e-88ef-6ef0b80fdsaf',
      ID_DISH: 'Tignanello_id',
      TEXT: 'Almost perfect',
      STARS: 4,
      __STATE__: 'PUBLIC',
    },
  ],
}

export default fixtures
