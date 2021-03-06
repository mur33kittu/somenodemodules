import { NgxLoggerLevel } from '../types/logger-level.enum';
export declare class NGXLoggerUtils {
    static prepareMetaString(timestamp: string, logLevel: string, fileName: string, lineNumber: string): string;
    static getColor(level: NgxLoggerLevel): 'blue' | 'teal' | 'gray' | 'red' | undefined;
    /**
     *  This allows us to see who called the logger
     *  @return {string}
     *  @private
     */
    static getCallerDetails(): {
        lineNumber: string;
        fileName: string;
    };
    static prepareMessage(message: any): any;
    static prepareAdditionalParameters(additional: any[]): any[];
}
