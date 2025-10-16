import { InjectionToken } from "@angular/core";
import { IApiService } from "./api.interface";

export const ApiService = new InjectionToken<IApiService>('Api');