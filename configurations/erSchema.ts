import { ERSchema } from '../tests/interfaces'

const erSchema: ERSchema = {
  'version': '1.0.0',
  'config': {
    'pr_dishes': {
      'outgoing': {
        'pr_restaurants': {
          'conditions': {
            'dish_to_rest': {
              'condition': {
                'id_restaurant': 'id_restaurant',
              },
            },
          },
        },
        'pr_orders_dishes': {
          'conditions': {
            'dish_to_order_dish': {
              'condition': {
                'ID_DISH': 'id_dish',
              },
            },
          },
        },
        'pr_reviews': {
          'conditions': {
            'dish_to_rev': {
              'condition': {
                'ID_DISH': 'id_dish',
              },
            },
          },
        },
      },
    },
    'pr_orders_dishes': {
      'outgoing': {
        'pr_orders': {
          'conditions': {
            'order_dish_to_order': {
              'condition': {
                'ID_ORDER': 'ID_ORDER',
              },
            },
          },
        },
        'pr_dishes': {
          'conditions': {
            'order_dish_to_dish': {
              'condition': {
                'id_dish': 'ID_DISH',
              },
            },
          },
        },
      },
    },
    'pr_orders': {
      'outgoing': {
        'pr_orders_dishes': {
          'conditions': {
            'order_to_order_dish': {
              'condition': {
                'ID_ORDER': 'ID_ORDER',
              },
              'oneToMany': true,
            },
          },
        },
        'pr_registry': {
          'conditions': {
            'order_to_reg': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
            },
          },
        },
      },
    },
    'pr_restaurants': {
      'outgoing': {
        'pr_dishes': {
          'conditions': {
            'res_to_dish': {
              'condition': {
                'id_restaurant': 'id_restaurant',
              },
            },
          },
        },
      },
    },
    'pr_allergens_registry': {
      'outgoing': {
        'pr_allergens': {
          'conditions': {
            'aller_reg_to_aller': {
              'condition': {
                'id_allergen': 'ID_ALLERGEN',
              },
            },
          },
        },
        'pr_registry': {
          'conditions': {
            'aller_reg_to_reg': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
            },
          },
        },
      },
    },
    'pr_allergens': {
      'outgoing': {
        'pr_allergens_registry': {
          'conditions': {
            'aller_to_aller_reg': {
              'condition': {
                'ID_ALLERGEN': 'id_allergen',
              },
            },
          },
        },
      },
    },
    'pr_registry': {
      'outgoing': {
        'pr_orders': {
          'conditions': {
            'reg_to_order': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': true,
            },
          },
        },
        'pr_reviews': {
          'conditions': {
            'reg_to_rev': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': true,
            },
          },
        },
        'pr_allergens_registry': {
          'conditions': {
            'reg_to_aller_reg': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
              'oneToMany': true,
            },
          },
        },
      },
    },
    'pr_reviews': {
      'outgoing': {
        'pr_registry': {
          'conditions': {
            'rev_to_reg': {
              'condition': {
                'ID_USER': 'ID_USER',
              },
            },
          },
        },
        'pr_dishes': {
          'conditions': {
            'rev_to_dish': {
              'condition': {
                'id_dish': 'ID_DISH',
              },
            },
          },
        },
      },
    },
  },
}

export default erSchema
