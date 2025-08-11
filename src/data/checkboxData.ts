import type { NestedCheckBoxDataInterface } from "./types";

export const nestedCheckboxData: NestedCheckBoxDataInterface[] = [
    {
        id: '1',
        name: 'Electronics',
        children: [
            {
                id: '1.1',
                name: 'Laptops',
                children: [
                    {
                        id: '1.1.1',
                        name: 'Gaming Laptops',
                    },
                    {
                        id: '1.1.2',
                        name: 'Ultrabooks',
                    },
                    {
                        id: '1.1.3',
                        name: 'Chromebooks',
                    },
                ],
            },
            {
                id: '1.2',
                name: 'Smartphones',
                children: [
                    {
                        id: '1.2.1',
                        name: 'Android',
                    },
                    {
                        id: '1.2.2',
                        name: 'iOS',
                    },
                ],
            },
            {
                id: '1.3',
                name: 'Cameras',
                children: [
                    {
                        id: '1.3.1',
                        name: 'DSLR',
                    },
                    {
                        id: '1.3.2',
                        name: 'Mirrorless',
                    },
                    {
                        id: '1.3.3',
                        name: 'Point and Shoot',
                    },
                ],
            },
        ],
    },
    {
        id: '2',
        name: 'Clothing',
        children: [
            {
                id: '2.1',
                name: "Men's Clothing",
                children: [
                    {
                        id: '2.1.1',
                        name: 'Shirts',
                    },
                    {
                        id: '2.1.2',
                        name: 'Pants',
                    },
                    {
                        id: '2.1.3',
                        name: 'Jackets',
                    },
                ],
            },
            {
                id: '2.2',
                name: "Women's Clothing",
                children: [
                    {
                        id: '2.2.1',
                        name: 'Dresses',
                    },
                    {
                        id: '2.2.2',
                        name: 'Skirts',
                    },
                    {
                        id: '2.2.3',
                        name: 'Blouses',
                    },
                ],
            },
        ],
    },
    {
        id: '3',
        name: 'Books',
        children: [
            {
                id: '3.1',
                name: 'Fiction',
                children: [
                    {
                        id: '3.1.1',
                        name: 'Science Fiction',
                    },
                    {
                        id: '3.1.2',
                        name: 'Fantasy',
                    },
                    {
                        id: '3.1.3',
                        name: 'Mystery',
                    },
                ],
            },
            {
                id: '3.2',
                name: 'Non-Fiction',
                children: [
                    {
                        id: '3.2.1',
                        name: 'Biography',
                    },
                    {
                        id: '3.2.2',
                        name: 'History',
                    },
                    {
                        id: '3.2.3',
                        name: 'Science',
                    },
                ],
            },
        ],
    },
    {
        id: '4',
        name: 'Sports & Outdoors',
        children: [
            {
                id: '4.1',
                name: 'Team Sports',
                children: [
                    {
                        id: '4.1.1',
                        name: 'Basketball',
                    },
                    {
                        id: '4.1.2',
                        name: 'Soccer',
                    },
                    {
                        id: '4.1.3',
                        name: 'Baseball',
                    },
                ],
            },
            {
                id: '4.2',
                name: 'Outdoor Recreation',
                children: [
                    {
                        id: '4.2.1',
                        name: 'Camping & Hiking',
                    },
                    {
                        id: '4.2.2',
                        name: 'Fishing',
                    },
                    {
                        id: '4.2.3',
                        name: 'Cycling',
                    },
                ],
            },
        ],
    },
];