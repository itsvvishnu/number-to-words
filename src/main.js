/*!
 * InWords v1.0.0
 * (c) itsvvishnu
 * Released under the MIT License.
 */
export default class InWords{
    constructor(_number,_lang){
        this.number = _number
        this.lang = _lang ?? 'US'
        this.words = ''
        this.exec()
    }
    static errors(e){
        switch(e){
            case 'o': InWords.error('Overflow')
            break
            case 'NaN': InWords.error('Invalid Number')
            break
        }
    }
    static error(e){
        console.log('%cInWords'+'%c'+'Error: '+e+'!',
        'background-color:#3f51b5;color:#fff;margin-right:5px;padding:2px 6px;border-radius:4px;',
        'color:#f44336; font-weight: bold;'
        );
    }
    static twos(l,index){
        let lang = l ?? 'US'
        const digits = {
            US:[
                '',
                'one',
                'two', 
                'three', 
                'four',
                'five', 
                'six', 
                'seven', 
                'eight', 
                'nine',
                'ten', 
                'eleven', 
                'twelve', 
                'thirteen', 
                'fourteen',
                'fifteen', 
                'sixteen', 
                'seventeen', 
                'eighteen', 
                'nineteen'
            ]
        }
        return digits[lang][index]
    }
    static tens(l,index){
        let lang = l ?? 'US'
        const tens = {
            US:[
                '',
                '', 
                'twenty', 
                'thirty', 
                'forty',
                'fifty', 
                'sixty', 
                'seventy', 
                'eighty', 
                'ninety'
            ]
        }
        return tens[lang][index]
    }
    static other(l,index){
        let lang = l ?? 'US'
        const others = {
            US:[
                '', 
                'thousand', 
                'million', 
                'billion', 
                'trillion', 
                'quadrillion',
                'quintillion', 
                'sextillion', 
                'septillion', 
                'octillion', 
                'nonillion'
            ]
        }
        return others[lang][index]
    }
    static cat(...entries){
        let str = ''
        let threshold = entries.length - 1
        for( let i=0; i<entries.length;i++){
            str += entries[i]
            if( i != threshold) {
                str+=' '
            }
        }
        return str.trimEnd()
    }
    set toWords(word){
        this.words = word
    }
    get len(){
        return this.number.toString().length
    }
    /**
     * @returns {Boolean} If the parameter is a valid number or not.
     */
    isNumber(){
        return Number(this.number) && Number.isFinite(Number(this.number))
    }
    split(number){
        let str = number.toString()
        let acc = []
        for (let i=0;i<str.length;i++){
            acc.push(Number(str[i]))
        }
        return acc
    }
    exec(){
        let words = ''
        if(!this.isNumber()){
            InWords.errors('NaN')
            return
        }
        switch(this.len){
            case 1:
            case 2: 
                if(this.number < 20){
                    words = InWords.twos(this.lang,this.number)
                }
                else if(this.number < 100){
                    let splits = this.split(this.number)
                    words = InWords.cat(
                        InWords.tens(this.lang,splits[0]),
                        InWords.twos(this.lang,splits[1])
                    )
                }
                break
        }
        this.toWords = words
    }
}

let number = new InWords(39)
console.log(number)
