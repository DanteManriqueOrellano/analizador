export namespace Temporal {
    export type ComparisonResult = -1 | 0 | 1;
  
    export interface DisambiguationOptions {
      disambiguation: 'constrain' | 'balance' | 'reject';
    }
  
    export interface ArithmeticOptions {
      disambiguation: 'constrain' | 'reject';
    }
  
    export interface DifferenceOptions<T extends string> {
      largestUnit: T;
    }
  
    export interface DurationLike {
      years?: number;
      months?: number;
      days?: number;
      hours?: number;
      minutes?: number;
      seconds?: number;
      milliseconds?: number;
      microseconds?: number;
      nanoseconds?: number;
    }
  
    export class Duration {
      static from(item: Temporal.Duration | string | object, options?: DisambiguationOptions): Temporal.Duration;
      constructor(
        years?: number,
        months?: number,
        days?: number,
        hours?: number,
        minutes?: number,
        seconds?: number,
        milliseconds?: number,
        microseconds?: number,
        nanoseconds?: number
      );
      readonly years: number;
      readonly months: number;
      readonly days: number;
      readonly hours: number;
      readonly minutes: number;
      readonly seconds: number;
      readonly milliseconds: number;
      readonly microseconds: number;
      readonly nanoseconds: number;
      with(durationLike: DurationLike, options: DisambiguationOptions): Temporal.Duration;
      plus(other: Temporal.Duration, options: ArithmeticOptions): Temporal.Duration;
      minus(other: Temporal.Duration, options: ArithmeticOptions): Temporal.Duration;
      getFields(): Required<DurationLike>;
      toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
      toJSON(): string;
      toString(): string;
    }
  
    export class Absolute {
      static fromEpochSeconds(epochSeconds: number): Temporal.Absolute;
      static fromEpochMilliseconds(epochMilliseconds: number): Temporal.Absolute;
      static fromEpochMicroseconds(epochMicroseconds: bigint): Temporal.Absolute;
      static fromEpochNanoseconds(epochNanoseconds: bigint): Temporal.Absolute;
      static from(item: Temporal.Absolute | string | object): Temporal.Absolute;
      static compare(one: Temporal.Absolute, two: Temporal.Absolute): 1 | -1 | 0;
      constructor(epochNanoseconds: bigint);
      getEpochSeconds(): number;
      getEpochMilliseconds(): number;
      getEpochMicroseconds(): bigint;
      getEpochNanoseconds(): bigint;
      plus(temporalDurationLike: DurationLike): Temporal.Absolute;
      minus(temporalDurationLike: DurationLike): Temporal.Absolute;
      difference(
        other: Temporal.Absolute,
        options?: DifferenceOptions<'days' | 'hours' | 'minutes' | 'seconds'>
      ): Temporal.Duration;
      inTimeZone(temporalTimeZoneLike?: TimeZoneLike): Temporal.DateTime;
      toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
      toJSON(): string;
      toString(temporalTimeZoneLike?: TimeZoneLike): string;
    }
  
    export interface DateLike {
      year?: number;
      month?: number;
      day?: number;
    }
  
    export class Date {
      static from(item: Temporal.Date | string | object, options?: DisambiguationOptions): Temporal.Date;
      static compare(one: Temporal.Date, two: Temporal.Date): ComparisonResult;
      constructor(year: number, month: number, day: number);
      readonly year: number;
      readonly month: number;
      readonly day: number;
      readonly dayOfWeek: number;
      readonly dayOfYear: number;
      readonly weekOfYear: number;
      readonly daysInYear: number;
      readonly daysInMonth: number;
      readonly isLeapYear: boolean;
      with(temporalDateLike: DateLike, options?: DisambiguationOptions): Temporal.Date;
      plus(temporalDurationLike: DurationLike, options?: ArithmeticOptions): Temporal.Date;
      minus(temporalDurationLike: DurationLike, options?: ArithmeticOptions): Temporal.Date;
      difference(other: Temporal.Date, options?: DifferenceOptions<'years' | 'months' | 'days'>): Temporal.Duration;
      withTime(temporalTime: Temporal.Time): Temporal.DateTime;
      getYearMonth(): Temporal.YearMonth;
      getMonthDay(): Temporal.MonthDay;
      getFields(): Required<DateLike>;
      toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
      toJSON(): string;
      toString(): string;
    }
  
    export interface DateTimeLike {
      year?: number;
      month?: number;
      day?: number;
      hour?: number;
      minute?: number;
      second?: number;
      millisecond?: number;
      microsecond?: number;
      nanosecond?: number;
    }
  
    export class DateTime {
      static from(item: Temporal.DateTime | string | object, options?: DisambiguationOptions): Temporal.DateTime;
      static compare(one: Temporal.DateTime, two: Temporal.DateTime): ComparisonResult;
      constructor(
        year: number,
        month: number,
        day: number,
        hour?: number,
        minute?: number,
        second?: number,
        millisecond?: number,
        microsecond?: number,
        nanosecond?: number
      );
      readonly year: number;
      readonly month: number;
      readonly day: number;
      readonly hour: number;
      readonly minute: number;
      readonly second: number;
      readonly millisecond: number;
      readonly microsecond: number;
      readonly nanosecond: number;
      readonly dayOfWeek: number;
      readonly dayOfYear: number;
      readonly weekOfYear: number;
      readonly daysInYear: number;
      readonly daysInMonth: number;
      readonly isLeapYear: boolean;
      with(temporalDateTimeLike: DateTimeLike, options?: DisambiguationOptions): Temporal.DateTime;
      plus(temporalDurationLike: DurationLike, options?: ArithmeticOptions): Temporal.DateTime;
      minus(temporalDurationLike: DurationLike, options?: ArithmeticOptions): Temporal.DateTime;
      difference(
        other: Temporal.DateTime,
        options?: DifferenceOptions<'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds'>
      ): Temporal.Duration;
      inTimeZone(temporalTimeZoneLike: TimeZoneLike, options?: DisambiguationOptions): Temporal.Absolute;
      getDate(): Temporal.Date;
      getYearMonth(): Temporal.YearMonth;
      getMonthDay(): Temporal.MonthDay;
      getTime(): Temporal.Time;
      getFields(): Required<DateTimeLike>;
      toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
      toJSON(): string;
      toString(): string;
    }
  
    export interface MonthDayLike {
      month?: number;
      day?: number;
    }
  
    export class MonthDay {
      static from(item: Temporal.MonthDay | string | object, options?: DisambiguationOptions): Temporal.MonthDay;
      static compare(one: Temporal.MonthDay, two: Temporal.MonthDay): ComparisonResult;
      constructor(month: number, day: number);
      readonly month: number;
      readonly day: number;
      with(temporalMonthDayLike: MonthDayLike, options?: DisambiguationOptions): Temporal.MonthDay;
      withYear(year: number): Temporal.Date;
      getFields(): Required<MonthDayLike>;
      toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
      toJSON(): string;
      toString(): string;
    }
  
    export interface TimeLike {
      hour?: number;
      minute?: number;
      second?: number;
      millisecond?: number;
      microsecond?: number;
      nanosecond?: number;
    }
  
    export class Time {
      static from(item: Temporal.Time | string | object, options?: DisambiguationOptions): Temporal.Time;
      static compare(one: Temporal.Time, two: Temporal.Time): ComparisonResult;
      constructor(
        hour?: number,
        minute?: number,
        second?: number,
        millisecond?: number,
        microsecond?: number,
        nanosecond?: number
      );
      readonly hour: number;
      readonly minute: number;
      readonly second: number;
      readonly millisecond: number;
      readonly microsecond: number;
      readonly nanosecond: number;
      with(temporalTimeLike: TimeLike, options?: DisambiguationOptions): Temporal.Time;
      plus(temporalDurationLike: DurationLike, options?: ArithmeticOptions): Temporal.Time;
      minus(temporalDurationLike: DurationLike, options?: ArithmeticOptions): Temporal.Time;
      // TODO: might need to update based on #580
      difference(other: Temporal.Time, options?: DifferenceOptions<'hours' | 'minutes' | 'seconds'>): Temporal.Duration;
      withDate(temporalDate: Temporal.Date): Temporal.DateTime;
      getFields(): Required<TimeLike>;
      toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
      toJSON(): string;
      toString(): string;
    }
  
    export type TimeZoneLike = Temporal.TimeZone | string;
  
    export class TimeZone {
      static from(timeZone: TimeZoneLike): Temporal.TimeZone;
      static [Symbol.iterator](): IteratorResult<Temporal.TimeZone>;
      constructor(timeZoneIdentifier: string);
      readonly name: string;
      getOffsetFor(absolute: Temporal.Absolute): string;
      getDateTimeFor(absolute: Temporal.Absolute): Temporal.DateTime;
      getAbsoluteFor(dateTime: Temporal.DateTime, options?: DisambiguationOptions): Temporal.Absolute;
      getTransitions(startingPoint: Temporal.Absolute): IteratorResult<Temporal.Absolute>;
      toString(): string;
      toJSON(): string;
    }
  
    export interface YearMonthLike {
      year?: number;
      month?: number;
    }
  
    export class YearMonth {
      static from(item: string | object, options?: DisambiguationOptions): Temporal.YearMonth;
      static compare(one: Temporal.YearMonth, two: Temporal.YearMonth): ComparisonResult;
      constructor(year: number, month: number);
      readonly year: number;
      readonly month: number;
      readonly daysInMonth: number;
      readonly daysInYear: number;
      readonly isLeapYear: boolean;
      with(temporalYearMonthLike: YearMonthLike, options: DisambiguationOptions): Temporal.YearMonth;
      plus(temporalDurationLike: YearMonthLike, options: ArithmeticOptions): Temporal.YearMonth;
      minus(temporalDurationLike: DurationLike, options: ArithmeticOptions): Temporal.YearMonth;
      difference(other: Temporal.YearMonth, options: DifferenceOptions<'years' | 'months'>): Temporal.Duration;
      withDay(day: number): Temporal.Date;
      getFields(): Required<YearMonthLike>;
      toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
      toJSON(): string;
      toString(): string;
    }
  
    export namespace now {
      function absolute(): Temporal.Absolute;
      function dateTime(temporalTimeZoneLike?: TimeZoneLike): Temporal.DateTime;
      function date(temporalTimeZoneLike?: TimeZoneLike): Temporal.Date;
      function time(temporalTimeZoneLike?: TimeZoneLike): Temporal.Time;
      function timeZone(): Temporal.TimeZone;
    }
  }