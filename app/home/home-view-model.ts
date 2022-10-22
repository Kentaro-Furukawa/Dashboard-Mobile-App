import { fromObject } from '@nativescript/core'

export function HomeViewModel() {
    const viewModel = fromObject({
        subIcons: [
        {
          name: 'Login',
          description: 'Description for Item 1',
          backgroundColor: 'green',
          size: 1,
        },
        {
          name: 'Morning Cafe',
          description: 'Description for Item 2',
          backgroundColor: 'green',
          size: 1,
        },
        {
          name: 'Memo',
          description: 'Description for Item 3',
          backgroundColor: 'green',
          size: 1,
        },
        {
          name: 'Tasks',
          description: 'Description for Item 4',
          backgroundColor: 'green',
          size: 1,
        },
        {
          name: 'Lesson',
          description: 'Description for Item 5',
          backgroundColor: 'green',
          size: 1,
        },
        {
          name: 'Point',
          description: 'Description for Item 6',
          backgroundColor: 'green',
          size: 1,
        },
        {
          name: 'Blog',
          description: 'Description for Item 7',
          backgroundColor: 'green',
        }
      ],
    })
  
    return viewModel
  }
  