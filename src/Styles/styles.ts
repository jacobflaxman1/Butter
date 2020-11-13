import { Platform } from "react-native";

// export const inputWarningText = {
//   color: Colors.accent.red,
//   paddingTop: Spacing.sm,
//   ...Typography.captionImportant,
// };

const tCombControlContainer = {
  marginBottom: 5,
  borderWidth: 1,
  borderRadius: 8,
  borderColor: "black",
};

export const formStyleSheet = Object.freeze({
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10,
    },
    error: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: "black",
      fontSize: 14,
      marginBottom: 2,
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 14,
      marginBottom: 2,
    },
  },
  helpBlock: {
    normal: {
      color: "red",
      fontSize: 14,
      marginBottom: 2,
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 14,
      marginBottom: 2,
      //   marginHorizontal: Spacing.lg,
    },
  },
  errorBlock: {
    color: "red",
    marginBottom: 2,
  },
  textboxView: {
    normal: {
      ...tCombControlContainer,
    },
    error: {
      ...tCombControlContainer,
    },
    notEditable: {},
  },
  textbox: {
    normal: {
      color: "black",
      fontSize: 16,
      height: 36,
      paddingVertical: 7,
      paddingHorizontal: 7,
      borderRadius: 0,
      borderColor: "black",
      borderWidth: 0,
      marginBottom: 0,
      width: 250,
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 14,
      height: 36,
      paddingVertical: Platform.OS === "ios" ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 0,
      borderColor: "red",
      borderWidth: 0,
      marginBottom: 0,
    },
    // the style applied when the textbox is not editable
    // notEditable: {
    //   fontSize: FONT_SIZE,
    //   ...Typography.secondaryReg,
    //   height: 36,
    //   paddingVertical: Platform.OS === "ios" ? 7 : 0,
    //   paddingHorizontal: 7,
    //   borderRadius: 4,
    //   borderColor: BORDER_COLOR,
    //   borderWidth: 1,
    //   marginBottom: 5,
    //   color: DISABLED_COLOR,
    //   backgroundColor: DISABLED_BACKGROUND_COLOR,
    // },
  },
  checkbox: {
    normal: {
      marginBottom: 4,
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4,
    },
  },
  pickerContainer: {
    normal: {
      ...tCombControlContainer,
    },
    error: {
      ...tCombControlContainer,
    },
    active: {
      ...tCombControlContainer,
    },
    open: {
      ...tCombControlContainer,
    },
  },
  select: {
    normal: Platform.select({
      android: {
        color: "black",
        fontSize: 14,
        height: 36,
        paddingVertical: 0,
        paddingHorizontal: 7,
        borderRadius: 0,
        borderColor: "black",
        borderWidth: 0,
        marginBottom: 0,
      },
      ios: {
        color: "black",
        fontSize: 14,
        height: 36,
        paddingVertical: 7,
        paddingHorizontal: 7,
        borderRadius: 0,
        borderColor: "white",
        borderWidth: 0,
        marginBottom: 0,
      },
    }),
    // the style applied when a validation error occours
    error: Platform.select({
      android: {
        paddingLeft: 7,
        color: "red",
      },
      ios: {
        color: "red",
      },
    }),
  },
  pickerTouchable: {
    normal: {
      ...tCombControlContainer,
    },
    error: {
      ...tCombControlContainer,
    },
    active: {
      ...tCombControlContainer,
    },
    notEditable: {
      backgroundColor: "purple",
    },
  },
  pickerValue: {
    normal: {
      fontSize: 14,
      paddingLeft: 7,
      color: "red",
    },
    error: {
      fontSize: 14,
      paddingLeft: 7,
    },
  },
  datepicker: {
    normal: {},
    error: {},
  },
  dateTouchable: {
    normal: {
      ...tCombControlContainer,
    },
    error: {
      ...tCombControlContainer,
    },
    notEditable: {
      ...tCombControlContainer,
      backgroundColor: "purple",
    },
  },
  dateValue: {
    normal: {
      color: "red",
      fontSize: 14,
      padding: 7,
      height: 36,
    },
    error: {
      color: "red",
      fontSize: 14,
      padding: 7,
      height: 36,
    },
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  button: {
    height: 36,
    backgroundColor: "blue",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export const createStyleSheet = Object.freeze({
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10,
    },
    error: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: "black",
      fontSize: 14,
      marginBottom: 2,
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 14,
      marginBottom: 2,
    },
  },
  helpBlock: {
    normal: {
      color: "red",
      fontSize: 14,
      marginBottom: 2,
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 14,
      marginBottom: 2,
      //   marginHorizontal: Spacing.lg,
    },
  },
  errorBlock: {
    color: "red",
    marginBottom: 2,
  },
  textboxView: {
    normal: {
      ...tCombControlContainer,
    },
    error: {
      ...tCombControlContainer,
    },
    notEditable: {},
  },
  textbox: {
    normal: {
      color: "black",
      fontSize: 16,
      height: 500,
      paddingVertical: 7,
      paddingHorizontal: 7,
      borderRadius: 0,
      borderColor: "black",
      borderWidth: 0,
      marginBottom: 0,
      width: 250,
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 14,
      height: 36,
      paddingVertical: Platform.OS === "ios" ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 0,
      borderColor: "red",
      borderWidth: 0,
      marginBottom: 0,
    },
    // the style applied when the textbox is not editable
    // notEditable: {
    //   fontSize: FONT_SIZE,
    //   ...Typography.secondaryReg,
    //   height: 36,
    //   paddingVertical: Platform.OS === "ios" ? 7 : 0,
    //   paddingHorizontal: 7,
    //   borderRadius: 4,
    //   borderColor: BORDER_COLOR,
    //   borderWidth: 1,
    //   marginBottom: 5,
    //   color: DISABLED_COLOR,
    //   backgroundColor: DISABLED_BACKGROUND_COLOR,
    // },
  },
  checkbox: {
    normal: {
      marginBottom: 4,
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4,
    },
  },
  pickerContainer: {
    normal: {
      ...tCombControlContainer,
    },
    error: {
      ...tCombControlContainer,
    },
    active: {
      ...tCombControlContainer,
    },
    open: {
      ...tCombControlContainer,
    },
  },
  select: {
    normal: Platform.select({
      android: {
        color: "black",
        fontSize: 14,
        height: 36,
        paddingVertical: 0,
        paddingHorizontal: 7,
        borderRadius: 0,
        borderColor: "black",
        borderWidth: 0,
        marginBottom: 0,
      },
      ios: {
        color: "black",
        fontSize: 14,
        height: 36,
        paddingVertical: 7,
        paddingHorizontal: 7,
        borderRadius: 0,
        borderColor: "white",
        borderWidth: 0,
        marginBottom: 0,
      },
    }),
    // the style applied when a validation error occours
    error: Platform.select({
      android: {
        paddingLeft: 7,
        color: "red",
      },
      ios: {
        color: "red",
      },
    }),
  },
  pickerTouchable: {
    normal: {
      ...tCombControlContainer,
    },
    error: {
      ...tCombControlContainer,
    },
    active: {
      ...tCombControlContainer,
    },
    notEditable: {
      backgroundColor: "purple",
    },
  },
  pickerValue: {
    normal: {
      fontSize: 14,
      paddingLeft: 7,
      color: "red",
    },
    error: {
      fontSize: 14,
      paddingLeft: 7,
    },
  },
  datepicker: {
    normal: {},
    error: {},
  },
  dateTouchable: {
    normal: {
      ...tCombControlContainer,
    },
    error: {
      ...tCombControlContainer,
    },
    notEditable: {
      ...tCombControlContainer,
      backgroundColor: "purple",
    },
  },
  dateValue: {
    normal: {
      color: "red",
      fontSize: 14,
      padding: 7,
      height: 36,
    },
    error: {
      color: "red",
      fontSize: 14,
      padding: 7,
      height: 36,
    },
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  button: {
    height: 36,
    backgroundColor: "blue",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});
