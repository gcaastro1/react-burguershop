import { DefaultTheme } from 'styled-components'

export const mainTheme: DefaultTheme = {
  palette: {
    main: {
      primary: '#27AE60',
      primaryLight: '#93D7AF',
      secondary: '#EB5757',
    },
    grayScale: {
      one: '#333333',
      two: '#828282',
      three: '#E0E0E0',
      four: '#F5F5F5',
      five: '#FFFFFF',
    },
    feedback: {
      alert: '#E60000',
      warning: '#FFCD07',
      success: '#168821',
      info: '#155BCB',
    },
  },
  typography: {
    sizes: {
      one: '26px',
      two: '22px',
      three: '18px',
      four: '16px',
      five: '14px',
      six: '12px',
    },
  },
}
