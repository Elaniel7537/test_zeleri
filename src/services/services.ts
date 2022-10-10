import { ServiceResponse, ServiceStatu } from "./config";
import { getWeatherRoute } from "./routes";
import Axios from "@services/axios";

export const getWeather = async (params: any) => {
  const serviceResponse = Object.assign({}, new ServiceResponse());
  try {
    const response = await Axios.get(getWeatherRoute(params));
    serviceResponse.data = response.data;
    serviceResponse.code = response.status;
    serviceResponse.status = ServiceStatu.SUCCESS;
  } catch (err: any) {
    serviceResponse.error = err.message ? err.message : err;
    serviceResponse.code = err.cod;
    serviceResponse.status = ServiceStatu.FAIL;
  }

  return serviceResponse;
};
