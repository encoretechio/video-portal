import { Pipe, PipeTransform } from '@angular/core';
import * as Utils from '../shared/utils'

@Pipe({
  name: 'videoLengthToSeconds'
})
export class VideoLengthToSecondsPipe implements PipeTransform {

  transform(value: string, args?: any): number {
    return Utils.getSecondsFromLengthText(value);
  }

}
