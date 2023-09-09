class Bot {
    
    /**
     * format setiap elemen:
     * {
     *      'regex'   :     // berisi regex untuk template input yg mencapture string
     *      'response':     // berisi literal string. gunakan variabel ${s} untuk template
     *                      // yang menggunakan hasil match dari regex
     * }
     */
    templates = []

    /**
     * merefleksikan kalimat,
     * e.g. : i was cleaning my room ---> you were cleaning your room;
     *        you are mine ---> i am yours 
     * @param {String} sentence kalimat yg akan dibalikkan
     * @returns {String}
     */
    reflectSentence(sentence) {
        const reflection = {
            "am"     : "are",
            "was"    : "were",
            "i"      : "you",
            "i'd"    : "you would",
            "i've"   : "you have",
            "i'll"   : "you will",
            "my"     : "your",
            "are"    : "am",
            "you've" : "I have",
            "you'll" : "I will",
            "your"   : "my",
            "yours"  : "mine",
            "you"    : "me",
            "me"     : "you"
        }
        // simple tokenization
        const tokens = sentence.toLowerCase().split(' ')
        return tokens
            // reflect each word
            .map(token => reflection[token] ? reflection[token] : token)
            // build sentence back
            .join(' ')
    }

    /**
     * @param {RegExp} regex regex berupa template yg mereturn String s
     * @param {Array<String>} response string template literal dimana ${s} dapat digunakan
     */
    addTemplate(regex, response) {
        this.templates.push({
            "regex"     : regex,
            "response"  : response
        })
    }

    /**
     * @param {String} input chat yang diberikan user ke Bot
     * @returns {String} output/response dari bot berdasar properti this.template
     */
    getResponse(input) {
        for (const template of this.templates) {
            const match = input.match(template.regex)
            if (match !== null) {
                let s = match[1]
                if (!s) {s = match[2]}
                if (!s) {s = ""}
                // pick one random sentence
                return template.response[Math.floor(Math.random()*template.response.length)]
                    .replace("${s}", this.reflectSentence(s))
            }
        }
    }



}