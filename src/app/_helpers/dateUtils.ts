
declare var moment: any;

export default class Utils {
    static prettifyDate(date): string {
        return moment(date).fromNow();
    }
}