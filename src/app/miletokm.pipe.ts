import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miletokm',
})
export class MiletokmPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return value * 1.60934 + 'km';
  }
}
