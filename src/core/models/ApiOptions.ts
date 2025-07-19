export interface ApiOptions {
  skip?: number;
  take?: number;
  filter?: string;
  dynamicKey?: string;
  [key: string]: unknown;
}