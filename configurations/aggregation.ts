export default {
  'version': '1.0.0',
  'config': {
    'SV_CONFIG': {
      'dependencies': {
        'pr_registry': {
          'type': 'projection',
          'on': '_identifier',
        },
        'ALLERGENS': {
          'type': 'config',
        },
        'REVIEWS': {
          'type': 'config',
        },
        'ORDERS': {
          'type': 'config',
        },
      },
      'mapping': {
        'idCustomer': 'pr_registry.ID_USER',
        'taxCode': 'pr_registry.TAX_CODE',
        'name': 'pr_registry.NAME',
        'surname': 'pr_registry.SURNAME',
        'email': 'pr_registry.EMAIL',
        'address': 'pr_registry.ADDRESS',
        'telephone': 'pr_registry.PHONE',
        'allergens': 'ALLERGENS',
        'reviews': 'REVIEWS',
        'orders': 'ORDERS',
        'withCustom': '__fromFile__[myCustomFx]',
      },
    },
    'ALLERGENS': {
      'joinDependency': 'pr_allergens_registry',
      'dependencies': {
        'pr_allergens_registry': {
          'type': 'projection',
          'on': 'reg_to_aller_reg',
        },
        'pr_allergens': {
          'type': 'projection',
          'on': 'aller_reg_to_aller',
        },
      },
      'mapping': {
        'id': 'pr_allergens_registry.ID_ALLERGEN',
        'comments': 'pr_allergens_registry.COMMENTS',
        'description': 'pr_allergens.description',
      },
    },
    'REVIEWS': {
      'joinDependency': 'pr_reviews',
      'dependencies': {
        'pr_reviews': {
          'type': 'projection',
          'on': 'reg_to_rev',
        },
      },
      'mapping': {
        'id': 'pr_reviews.ID_REVIEW',
        'text': 'pr_reviews.TEXT',
        'stars': 'pr_reviews.STARS',
      },
    },
    'ORDERS': {
      'joinDependency': 'pr_orders',
      'dependencies': {
        'pr_orders': {
          'type': 'projection',
          'on': 'reg_to_order',
        },
        'DISHES': {
          'type': 'config',
        },
      },
      'mapping': {
        'id': 'pr_orders.ID_ORDER',
        'orderDate': 'pr_orders.DATE',
        'totalPrice': 'pr_orders.TOTAL_PRICE',
        'paymentType': 'pr_orders.PAYMENT_TYPE',
        'orderStatus': 'pr_orders.ORDER_STATUS',
        'dishes': 'DISHES',
      },
    },
    'DISHES': {
      'joinDependency': 'pr_orders_dishes',
      'dependencies': {
        'pr_orders_dishes': {
          'type': 'projection',
          'on': 'order_to_order_dish',
        },
        'pr_dishes': {
          'type': 'projection',
          'on': 'order_dish_to_dish',
        },
      },
      'mapping': {
        'id': 'pr_orders_dishes.ID_DISH',
        'description': 'pr_dishes.description',
        'price': 'pr_dishes.price',
      },
    },
  },
}
