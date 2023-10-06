const axios = require("axios");
const logger = require("../logger");
const { getGraphQLQuery, fieldsNames } = require("./constant");
const ENTITY_DEFINITION = process.env.ENTITY_DEFINITION;
const AUTHORIZATION_TOKEN = process.env.AUTHORIZATION_TOKEN;
const SC_APIKEY = process.env.SC_APIKEY;
const SITECORE_API_ENDPOINT = process.env.SITECORE_API_ENDPOINT;
const ENDPOINT = process.env.ENDPOINT;
const TYPE_DETAIL = process.env.TYPE_DETAIL;

const getDataFromWebhook = async (data) => {
  try {
    if (data?.updates && ENTITY_DEFINITION) {
      const ENTITY_DEFINITIONData = JSON.parse(ENTITY_DEFINITION);
      if (ENTITY_DEFINITIONData) {
        const newData = data?.updates?.filter((updates) =>
          ENTITY_DEFINITION.includes(updates?.entity_definition)
        );
        if (newData?.length > 0) {
          return await getAllSelectedDataFromWebhook(newData);
        }
      }
    }
    return "No data related to ENTITY_DEFINITION";
  } catch (err) {
    logger.error("Error during filter request data", err?.messages);
  }
};
const postDataToAPI = async (data) => {
  try {
    let firstAPIResponse = await axios.all(
      data?.map((endpointData) => {
        return axios.post(SITECORE_API_ENDPOINT, endpointData, {
          headers: {
            authorization: AUTHORIZATION_TOKEN,
          },
        });
      })
    );
    const response = firstAPIResponse?.map((response) => response?.data);
    return response;
  } catch (err) {
    return { error: err?.response?.data?.error, data: data };
  }
};
const getFormattedData = (responseData, isItem) => {
  if (isItem) {
    const newApiResponse = {};
    const apiResponse = responseData?.data?.item;
    if (apiResponse && Object.keys(apiResponse)) {
      const newType = JSON.parse(TYPE_DETAIL);
      Object.keys(apiResponse)?.forEach((fieldsName) => {
        const newFieldsName = fieldsNames[fieldsName] || fieldsName;
        switch (fieldsName) {
          case "id":
          case "path":
            newApiResponse[newFieldsName] = apiResponse?.[fieldsName];
            break;
          case "assetTitle":
          case "assetDescription":
            newApiResponse[newFieldsName] = apiResponse?.[fieldsName]?.value;
            break;
          case "businessSegment":
          case "businessUnit":
            newApiResponse[newFieldsName] = [
              apiResponse?.[fieldsName]?.targetItem?.field?.value,
            ]?.filter((data) => {
              if (data) {
                return data;
              }
            });
            break;
          case "assetType":
          case "productCategoryType":
            newApiResponse[newFieldsName] =
              apiResponse?.[fieldsName]?.targetItem?.field?.value;
            break;
          case "mediaItem":
            newApiResponse[newFieldsName] =
              apiResponse?.[fieldsName]?.targetItem?.field?.value;
            newApiResponse.type = "media";
            if (
              newType &&
              newType?.[
                apiResponse?.[fieldsName]?.targetItem?.field?.value
                  ?.substring(
                    apiResponse?.[fieldsName]?.targetItem?.field?.value.length -
                      6
                  )
                  ?.split(".")?.[1]
              ]
            ) {
              newApiResponse.type =
                newType[
                  apiResponse?.[fieldsName]?.targetItem?.field?.value
                    ?.substring(
                      apiResponse?.[fieldsName]?.targetItem?.field?.value
                        .length - 6
                    )
                    ?.split(".")[1]
                ];
            }
            break;
          default:
            newApiResponse[newFieldsName] = apiResponse?.[fieldsName];
            break;
        }
      });
    }
    logger.debug("API response", newApiResponse);
    return newApiResponse;
  } else {
    const data = {};
    const apiResponse = responseData?.data?.layout?.item;
    if (apiResponse && Object.keys(apiResponse)) {
      Object.keys(apiResponse)?.forEach((fieldsName) => {
        const newFieldsName = fieldsNames[fieldsName] || fieldsName;
        switch (fieldsName) {
          case "id":
          case "path":
            data[newFieldsName] = apiResponse?.[fieldsName];
            break;
          case "title":
          case "description":
          case "date":
            data[newFieldsName] = apiResponse?.[fieldsName]?.value;
            break;
          case "imageUrl":
            data[newFieldsName] = apiResponse?.[fieldsName]?.src;
            break;
          case "pageUrl":
            data[newFieldsName] = apiResponse?.[fieldsName]?.url;
            break;
          case "businessSegments":
          case "businessUnits":
          case "categories":
          case "capabilities":
          case "brands":
            data[newFieldsName] = apiResponse?.[fieldsName]?.targetItems
              ?.map((data) => data?.field?.value)
              ?.filter((data) => {
                if (data) {
                  return data;
                }
              });

            break;
          default:
            data[newFieldsName] = apiResponse?.[fieldsName];
            break;
        }
      });
    }
    return { ...data, type: "page" };
  }
};
const postDataFromWebhook = async (data, itemDetails) => {
  try {
    return await postDataToAPI(
      data?.map((apiResponse) => {
        const isItem =
          itemDetails?.filter(
            (item) =>
              item.identifier === apiResponse?.data?.item?.id ||
              item.identifier === apiResponse?.data?.layout?.item?.id
          )?.[0]?.entity_definition === "Item";
        return {
          document: {
            fields: getFormattedData(apiResponse, isItem),
            id: isItem
              ? apiResponse?.data?.item?.id
              : apiResponse?.data?.layout?.item?.id,
          },
        };
      })
    );
  } catch (err) {
    console.log("Error during postDataFromWebhook for final API call", err);
    logger.error(
      "Error during postDataFromWebhook for final API call",
      err?.messages
    );
  }
};
const getAllSelectedDataFromWebhook = async (data) => {
  try {
    let firstAPIResponse = await axios.all(
      data?.map((endpoint) =>
        axios({
          method: "POST",
          url: ENDPOINT,
          headers: {
            SC_APIKEY: SC_APIKEY,
          },
          data: {
            query: getGraphQLQuery(
              endpoint?.entity_definition,
              endpoint?.identifier
            ),
          },
        })
      )
    );
    const response = firstAPIResponse?.map((response) => response?.data);
    return postDataFromWebhook(
      response,
      data?.map((item) => {
        return {
          entity_definition: item?.entity_definition,
          identifier: item?.identifier,
        };
      })
    );
  } catch (err) {
    logger.error("Error during first API call", err?.messages, data);
  }
};

module.exports = {
  getDataFromWebhook,
};
