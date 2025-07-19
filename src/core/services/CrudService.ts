import axios, { type AxiosInstance } from "axios";
import type { ApiResponse } from "../models/ApiResponse";
import type { ApiOptions } from "../models/ApiOptions";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export abstract class CrudService<T, ID = string> {
  protected _http: AxiosInstance;
  protected APIUrl: string;

  constructor(resourcePath: string) {
    this.APIUrl = `${BASE_URL}/${resourcePath}`;
    this._http = axios.create({ baseURL: BASE_URL });
  }

  protected getResourceUrl(): string {
    return this.APIUrl;
  }

  async findAll(apiOptions: ApiOptions = {}): Promise<ApiResponse<T[]>> {
    const params = {
      skip: apiOptions.skip,
      take: apiOptions.take,
      ...apiOptions,
    };
    const response = await this._http.get<ApiResponse<T[]>>(
      this.getResourceUrl(),
      { params }
    );
    return response.data;
  }

  async findOne(id: ID): Promise<ApiResponse<T>> {
    const response = await this._http.get<ApiResponse<T>>(
      `${this.getResourceUrl()}/${id}`
    );
    return response.data;
  }

  async add(item: Partial<T>): Promise<T> {
    const response = await this._http.post<T>(this.getResourceUrl(), item);
    return response.data;
  }

  async update(id: ID, item: Partial<T>): Promise<T> {
    const response = await this._http.put<T>(
      `${this.getResourceUrl()}/${id}`,
      item
    );
    return response.data;
  }

  async delete(id: ID): Promise<void> {
    await this._http.delete(`${this.getResourceUrl()}/${id}`);
  }
}
