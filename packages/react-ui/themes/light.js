const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 2, 5, 10],
  fontSizes: [0, 11, 12, 14, 16, 20, 24, 32, 48, 64, 72],
  lineHeights: {
    compact: '1.2',
    default: '1.6',
    cosy: '2'
  },
  shadows: {
    // this part is ugly, this can be improved.
    // bonus: these are terrible names
    small: `0 5px 15px hsla(0, 0%, 0%, 0.1)`
  },
  colors: {
    white: '#fff',
    reds: {
      100: '#F8E4E4',
      200: '#EFA6A6',
      300: '#E06161',
      400: '#D95252',
      500: '#D12D2D',
      600: '#B41F1F',
      700: '#A20808',
      800: '#821919',
      900: '#5E1717'
    },
    yellows: {
      100: '#FDF3D7',
      200: '#FAECC2',
      300: '#F8E8BA',
      400: '#FAE29F',
      500: '#FFD97E',
      600: '#F4CA64',
      700: '#CAA53D',
      800: '#8C6D1F',
      900: '#5C4813'
    },
    blues: {
      100: '#EFF8FF',
      200: '#B7DBF7',
      300: '#A8D1F2',
      400: '#63A2D8',
      500: '#3793E0',
      600: '#217CC9',
      700: '#2368A2',
      800: '#1A4971',
      900: '#203D54'
    },
    greens: {
      100: '#E3FCEC',
      200: '#A8EEC1',
      300: '#8FF2B2',
      400: '#4BE38C',
      500: '#22D66F',
      600: '#38C172',
      700: '#259D58',
      800: '#197741',
      900: '#145239'
    },
    grays: {
      100: '#f5faff',
      200: '#E1E7EC',
      300: '#D1D9E0',
      400: '#C8D0D7',
      500: '#AEBECD',
      600: '#929FB1',
      700: '#6E7A8A',
      800: '#404B5A',
      900: '#202833'
    }
  },
  components: {
    Form: {
      background: 'white',
      width: 400,
      margin: 'auto',
      boxShadow: 'small',
      paddingY: 4,
      borderRadius: 1
    },
    FormField: {
      border: 'none',
      padding: 'none',
      paddingX: 4,
      '&:not(:last-child)': {
        marginBottom: 3
      }
    },
    FormLabel: {
      color: 'grays.800',
      display: 'block',
      fontSize: 2,
      lineHeight: 'default',
      marginBottom: 1
    },
    FormHeader: {
      fontSize: 5,
      fontWeight: 'normal',
      marginX: 4,
      marginTop: 0,
      marginBottom: 4
    },
    Input: {
      padding: 2,
      lineHeight: 'default',
      fontSize: 3,
      border: '2px solid',
      borderColor: 'grays.400',
      backgroundColor: 'grays.100',
      borderRadius: 2,
      width: '100%',
      ':hover': {
        borderColor: 'blues.300'
      },
      ':focus': {
        outline: 'none',
        borderColor: 'blues.500',
        backgroundColor: 'blues.100'
      }
    }
  }
}

export default theme
