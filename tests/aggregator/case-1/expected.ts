export default {
  idCustomer: 'ebc12dc8-939b-447e-88ef-6ef0b802a487',
  taxCode: 'tax_code',
  name: 'MARIO',
  surname: 'ROSSI',
  email: 'email_mario',
  address: 'address_1',
  telephone: 'phone_number_1',
  orders: [
    {
      id: 'd2829a1d-80ca-4eff-a93a-e97c83a5550f',
      orderDate: '2007-12-03T02:55:44.000Z',
      totalPrice: '52.54',
      paymentType: 'Cash',
      orderStatus: 'In shipping',
      dishes: [
        {
          id: 'Amatriciana_id',
          description: 'a delicious dish',
          price: 12,
        },
        {
          id: 'Cotoletta_id',
          description: 'a splendid dish',
          price: 12,
        },
      ],
    },
  ],
  allergens: [
    {
      id: 'eggs',
      comments: 'this is a comment change',
      description: 'can be found in cakes, sauces and pastries',
    },
  ],
  reviews: [
    {
      id: 'review_1',
      text: 'Spectacular!',
      stars: 5,
    },
    {
      id: 'review_2',
      text: 'Tasteless!',
      stars: 1,
    },
  ],
  withCustom: {
    isOk: 'ok',
  },
}
