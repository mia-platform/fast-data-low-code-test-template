import { SpecificERSchema } from '../tests/interfaces'
import { ERSchema } from '@mia-platform-internal/fast-data-automation-lib'

const erSchema: SpecificERSchema & ERSchema = {
  'version': '1.0.0',
  'config': {
    'pr_dishes': {
      'outgoing': {
        'pr_restaurants': {
          'conditions': {
            'pr_dishes__to__pr_restaurants_0': {
              'condition': {
                'id_restaurant': 'id_restaurant',
              },
              'oneToMany': false,
            },
          },
        },
        'pr_orders_dishes': {
          'conditions': {
            'pr_dishes__to__pr_orders_dishes_0': {
              'condition': {
                'ID_DISH': 'id_dish',
              },
              'oneToMany': false,
            },
          },
        },
        'pr_reviews': {
          'conditions': {
            'pr_dishes__to__pr_reviews_0': {
              'condition': {
                'ID_DISH': 'id_dish',
              },
              'oneToMany': false,
            },
          },
        },
      },
    },
    'pr_restaurants': {
      'outgoing': {
        'pr_dishes': {
          'conditions': {
            'pr_restaurants__to__pr_dishes_0': {
              'condition': {
                'id_restaurant': 'id_restaurant',
              },
              'oneToMany': false,
            },
          },
        },
      },
    },
    'pr_orders': {
      'outgoing': {
        'pr_orders_dishes': {
          'conditions': {
            'pr_orders__to__pr_orders_dishes_0': {
              'condition': {
                'ID_ORDER': 'ID_ORDER',
              },
              'oneToMany': false,
            },
          },
        },
        'pr_registry': {
          'conditions': {
            'pr_orders__to__pr_registry_0': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': true,
            },
          },
        },
      },
    },
    'pr_orders_dishes': {
      'outgoing': {
        'pr_dishes': {
          'conditions': {
            'pr_orders_dishes__to__pr_dishes_0': {
              'condition': {
                'id_dish': 'ID_DISH',
              },
              'oneToMany': false,
            },
          },
        },
        'pr_orders': {
          'conditions': {
            'pr_orders_dishes__to__pr_orders_0': {
              'condition': {
                'ID_ORDER': 'ID_ORDER',
              },
              'oneToMany': false,
            },
          },
        },
      },
    },
    'pr_reviews': {
      'outgoing': {
        'pr_dishes': {
          'conditions': {
            'pr_reviews__to__pr_dishes_0': {
              'condition': {
                'id_dish': 'ID_DISH',
              },
              'oneToMany': false,
            },
          },
        },
        'pr_registry': {
          'conditions': {
            'pr_reviews__to__pr_registry_0': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': false,
            },
          },
        },
      },
    },
    'pr_registry': {
      'outgoing': {
        'pr_orders': {
          'conditions': {
            'pr_registry__to__pr_orders_0': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': false,
            },
          },
        },
        'pr_allergens_registry': {
          'conditions': {
            'pr_registry__to__pr_allergens_registry_0': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': true,
            },
          },
        },
        'pr_food_preferencies_registry': {
          'conditions': {
            'pr_registry__to__pr_food_preferencies_registry_0': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': true,
            },
          },
        },
        'pr_reviews': {
          'conditions': {
            'pr_registry__to__pr_reviews_0': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': false,
            },
          },
        },
      },
    },
    'pr_allergens_registry': {
      'outgoing': {
        'pr_registry': {
          'conditions': {
            'pr_allergens_registry__to__pr_registry_0': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': false,
            },
          },
        },
        'pr_allergens': {
          'conditions': {
            'pr_allergens_registry__to__pr_allergens_0': {
              'condition': {
                'id_allergen': 'ID_ALLERGEN',
              },
              'oneToMany': false,
            },
          },
        },
      },
    },
    'pr_allergens': {
      'outgoing': {
        'pr_allergens_registry': {
          'conditions': {
            'pr_allergens__to__pr_allergens_registry_0': {
              'condition': {
                'ID_ALLERGEN': 'id_allergen',
              },
              'oneToMany': false,
            },
          },
        },
      },
    },
    'pr_food_preferencies_registry': {
      'outgoing': {
        'pr_registry': {
          'conditions': {
            'pr_food_preferencies_registry__to__pr_registry_0': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': false,
            },
          },
        },
        'pr_food_preferencies': {
          'conditions': {
            'pr_food_preferencies_registry__to__pr_food_preferencies_0': {
              'condition': {
                'ID_FOOD_PREFERENCE': 'ID_FOOD_PREFERENCE',
              },
              'oneToMany': false,
            },
          },
        },
      },
    },
    'pr_food_preferencies': {
      'outgoing': {
        'pr_food_preferencies_registry': {
          'conditions': {
            'pr_food_preferencies__to__pr_food_preferencies_registry_0': {
              'condition': {
                'ID_FOOD_PREFERENCE': 'ID_FOOD_PREFERENCE',
              },
              'oneToMany': false,
            },
          },
        },
      },
    },
  },
}

export default erSchema
