export default {
  idCustomer: 'user001',
  title: 'Mr.',
  name: 'Nick',
  surname: 'Jackson',
  userInfo: {
    email: 'nick_jackson@mail.com',
    taxCode: 'nick_jackson_tax_code',
    address: 'nick_jackson_address',
    telephone: 'nick_jackson_phone_number',
  },
  orders: [
    {
      id: 'order001',
      orderDate: '2007-12-03T02:55:44.000Z',
      totalPrice: '21',
      paymentType: 'Cash',
      orderStatus: 'In shipping',
      dishes: [
        {
          id: 'amatriciana',
          description: 'Amatriciana di Pasta e Fagioli',
          price: 9,
        },
        {
          id: 'cotoletta',
          description: 'Cotoletta di Pasta e Fagioli',
          price: 12,
        },
      ],
    },
  ],
  allergens: [
    {
      id: 'eggs',
      comments: 'user001 is allergic to eggs',
      description: 'somebody can be allergic to eggs',
    },
  ],
  reviews: [
    {
      id: 'review001',
      text: 'Spectacular!',
      stars: 5,
    },
    {
      id: 'review002',
      text: 'Good enough!',
      stars: 4,
    },
  ],
  foodPreferencies: [
    {
      id: 'bacon',
      comments: 'user001 likes bacon',
      description: 'bacon is food generally liked',
    },
    {
      id: 'chips',
      comments: 'user001 likes chips',
      description: 'chips is food generally liked',
    },
  ],
}
