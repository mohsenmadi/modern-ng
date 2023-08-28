import {ActivatedRoute} from '@angular/router';
import {inject} from '@angular/core';

export const getRouteParam = (key: string, ar: any = undefined) =>
  (ar ?? inject(ActivatedRoute)).snapshot.paramMap.get(key);

