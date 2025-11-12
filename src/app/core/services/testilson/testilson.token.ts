import { InjectionToken } from '@angular/core';
import { ITestilson } from './testilson.interface';

export const testilsonToken = new InjectionToken<ITestilson>('Testilson');