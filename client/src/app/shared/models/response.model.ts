

export interface Response {
  status: number;
  result?: any;
  userid?: string;
  token?: string;
  message?: string;
  verif?: boolean; 
  user?: any;
  error?: number;
}
