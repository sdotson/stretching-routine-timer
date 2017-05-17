const defaultValues = {
  settings: {
    rest: 3,
    duration: 5
  },
  routines: [{
    name: "regular",
    default: true,
    exercises: [
        {
          name: "Hamstring",
          isOneSided: true,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 5
        },
        {
          name: "Butterfly",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 5
        },
        {
          name: "Splits",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        }
      ]
    }, {
      name: "legs",
      default: true,
      exercises: [
        {
          name: "Hamstring",
          isOneSided: true,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 5
        },
        {
          name: "Butterfly",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        },
        {
          name: "Rest",
          isOneSided: false,
          type: 'rest',
          duration: 5
        },
        {
          name: "Splits",
          isOneSided: false,
          duration: 2,
          type: 'stretch'
        }
      ]
    }],
    exercises: [
      {
        name: "Rest",
        isOneSided: false,
        default: true,
        type: 'rest',
        duration: 2
      },
      {
        name: "Hamstring",
        isOneSided: true,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Butterfly",
        isOneSided: false,
        default: true,
        type: 'stretch',
        duration: 2
      },
      {
        name: "Splits",
        isOneSided: false,
        default: true,
        type: 'stretch',
        duration: 2
      }
    ]
}

export default defaultValues;