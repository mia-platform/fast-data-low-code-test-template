export type ProjectionsSchema = {
    pr_allergens: {
        id_allergen: string
        description: string
    }
    pr_allergens_registry: {
        ID_ALLERGEN: string
        ID_USER: string
        COMMENTS: string
    }
    pr_dishes: {
        id_dish: string
        id_restaurant: string
        price: number
        description: string
    }
    pr_orders: {
        ID_ORDER: string
        ID_USER: string
        DATE: string
        TOTAL_PRICE: string
        ORDER_STATUS: string
        PAYMENT_TYPE: string
    }
    pr_orders_dishes: {
        ID_ORDER: string
        ID_DISH: string
    }
    pr_registry: {
        ID_USER: string
        TAX_CODE: string
        NAME: string
        SURNAME: string
        EMAIL: string
        ADDRESS: string
        PHONE: string
        PROFESSION: string
    }
    pr_restaurants: {
        id_restaurant: string
        name: string
    }
    pr_reviews: {
        ID_REVIEW: string
        ID_USER: string
        ID_DISH: string
        TEXT: string
        STARS: 1 | 2 | 3 | 4 | 5
    }
}

type ProjectionName = keyof ProjectionsSchema

export type Fixtures = {
    [K in ProjectionName]: (ProjectionsSchema[K] & {
        __STATE__: 'PUBLIC'
    })[]
}
export type ERSchema = {
    version: '1.0.0',
    config: {
        [k in ProjectionName]: {
            outgoing: {
                [j in ProjectionName]?: j extends k ? never : {
                    conditions: Record<string, {
                        condition: object
                        oneToMany?: boolean
                    }>
                }
            }
        }
    }
}
