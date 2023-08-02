const getStorybookDefaultData = (defaultValue: any) => {
    return {
      table: {
        defaultValue: { summary: defaultValue },
      },
    };
  };
  
  export { getStorybookDefaultData };