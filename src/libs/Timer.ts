type Props = {
  display?: 'hour' | 'minute' | 'second';
  seconds?: number;
  miliseconds?: number;
};

export class Timer {
  static toDigitalClock(props: Props): string {
    const seconds = (props.seconds ?? 0) + (props.miliseconds ?? 0) / 1000;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (props.display === 'hour') {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    if (props.display === 'minute') {
      return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    if (props.display === 'second') {
      return `${secs.toString().padStart(2, '0')}`;
    }

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}
