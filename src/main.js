/*!
 * NumberToWords v1.0.0
 * (c) itsvvishnu
 * Released under the MIT License.
 */
class NumToWords{
    constructor(_number,_format){
        this.number = _number
        this.format = _format ?? 'US'
    }
    /**
     * @returns {Boolean} If the parameter is a valid number or not.
     */
    isNumber(){
        if(typeof (this.number) == 'number' && Number.isFinite(this.number) ) return true
        return false
    }
}