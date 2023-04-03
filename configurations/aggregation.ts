import { AggregationSchema } from '@mia-platform-internal/fast-data-automation-lib'

const aggregation: AggregationSchema = {
  'version': '1.3.0',
  'config': {
    'SV_CONFIG': {
      'dependencies': {
        'pr_registry': {
          'type': 'projection',
          'on': '_identifier',
          'identifierQueryMapping': {
            'ID_USER': '_identifier.idCustomer',
          },
        },
        'ALLERGENS': {
          'type': 'config',
        },
        'FOOD_PREFERENCIES': {
          'type': 'config',
        },
        'ORDERS': {
          'type': 'config',
        },
        'REVIEWS': {
          'type': 'config',
        },
      },
      'mapping': {
        'idCustomer': 'pr_registry.ID_USER',
        'title': {
          '_select': {
            'options': [
              {
                'when': {
                  '==': [
                    'pr_registry.GENDER',
                    '__string__[Male]',
                  ],
                },
                'value': '__string__[Mr.]',
              },
              {
                'when': {
                  '==': [
                    'pr_registry.GENDER',
                    '__string__[Female]',
                  ],
                },
                'value': '__string__[Mrs.]',
              },
            ],
            'default': '__string__[]',
          },
        },
        'name': 'pr_registry.NAME',
        'surname': 'pr_registry.SURNAME',
        'userInfo': {
          'taxCode': 'pr_registry.TAX_CODE',
          'email': 'pr_registry.EMAIL',
          'address': 'pr_registry.ADDRESS',
          'telephone': 'pr_registry.PHONE',
        },
        'allergens': 'ALLERGENS',
        'orders': 'ORDERS',
        'foodPreferencies': 'FOOD_PREFERENCIES',
        'reviews': 'REVIEWS',
      },
    },
    'ALLERGENS': {
      'joinDependency': 'pr_allergens_registry',
      'dependencies': {
        'pr_allergens_registry': {
          'type': 'projection',
          'on': 'pr_registry__to__pr_allergens_registry_0',
        },
        'pr_allergens': {
          'type': 'projection',
          'on': 'pr_allergens_registry__to__pr_allergens_0',
        },
      },
      'mapping': {
        'id': 'pr_allergens_registry.ID_ALLERGEN',
        'comments': 'pr_allergens_registry.COMMENTS',
        'description': 'pr_allergens.description',
      },
    },
    'FOOD_PREFERENCIES': {
      'joinDependency': 'pr_food_preferencies_registry',
      'dependencies': {
        'pr_food_preferencies_registry': {
          'type': 'projection',
          'on': 'pr_registry__to__pr_food_preferencies_registry_0',
        },
        'pr_food_preferencies': {
          'type': 'projection',
          'on': 'pr_food_preferencies_registry__to__pr_food_preferencies_0',
          // NOTE: onStates is used here
          'onStates': ['PUBLIC', 'DRAFT'],
        },
      },
      'mapping': {
        'id': 'pr_food_preferencies_registry.ID_FOOD_PREFERENCE',
        'comments': 'pr_food_preferencies_registry.COMMENTS',
        'description': 'pr_food_preferencies.DESCRIPTION',
      },
    },
    'ORDERS': {
      'joinDependency': 'pr_orders',
      'dependencies': {
        'pr_orders': {
          'type': 'projection',
          'on': 'pr_registry__to__pr_orders_0',
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
    'REVIEWS': {
      'joinDependency': 'pr_reviews',
      'dependencies': {
        'pr_reviews': {
          'type': 'projection',
          'on': 'pr_registry__to__pr_reviews_0',
        },
      },
      'mapping': {
        'id': 'pr_reviews.ID_REVIEW',
        'text': 'pr_reviews.TEXT',
        'stars': 'pr_reviews.STARS',

      },
    },
    'DISHES': {
      'joinDependency': 'pr_orders_dishes',
      'dependencies': {
        'pr_dishes': {
          'type': 'projection',
          'on': 'pr_orders_dishes__to__pr_dishes_0',
        },
        'pr_orders_dishes': {
          'type': 'projection',
          'on': 'pr_orders__to__pr_orders_dishes_0',
        },
      },
      'mapping': {
        'id': 'pr_orders_dishes.ID_DISH',
        'description': 'pr_dishes.description',
        'price': 'pr_dishes.price',
      },
    },
    'SPECIAL_REVIEWS': {
      'joinDependency': 'pr_reviews',
      'dependencies': {
        'pr_reviews': {
          'type': 'projection',
          '_select': {
            'options': [
              {
                'when': {
                  '==': [
                    'pr_registry.GENDER',
                    '__string__[Female]',
                  ],
                },
                'value': {
                  'on': 'pr_registry__to__pr_reviews_female',
                },
              },
              {
                'when': {
                  '==': [
                    'pr_registry.GENDER',
                    '__string__[Male]',
                  ],
                },
                'value': {
                  'on': 'pr_registry__to__pr_reviews_male',
                },
              },
            ],
            'default': {
              'on': 'pr_registry__to__pr_reviews_0',
            },
          },
        },
      },
      'mapping': {
        'id': 'pr_reviews.ID_REVIEW',
        'text': 'pr_reviews.TEXT',
        'stars': 'pr_reviews.STARS',
      },
    },
  },
}

export default aggregation
