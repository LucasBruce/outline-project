import { InjectionToken } from "@angular/core";
import { IApi } from "./api.interface";

export const ApiService = new InjectionToken<IApi>('Api');