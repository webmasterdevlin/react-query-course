import { useQuery } from "react-query";
import { api, EndPoints } from "axios/api-config";
import { VillainModel } from "../villain";

/* This function won't send an http request if not necessary.
 * So we can use this function to sync states in different components
 * */
export default function useFetchVillains() {
  return useQuery("villains", () =>
    api.get<VillainModel[]>(EndPoints.villains)
  );
}
