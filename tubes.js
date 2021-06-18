// Menampilkan ke web
function InputOutput() {
    const textnya = document.getElementById('txtInput').value;

    // 1
    // Mencari frekuensi relatif dari tiap huruf dalam text
    codes = {}
    function frequency(str) {
        var freqs = {};
        for (var i in str) {
            if (freqs[str[i]] == undefined) {
                freqs[str[i]] = 1;
            }
            else {
                freqs[str[i]] = freqs[str[i]] + 1;
            }
        }
        return freqs;
    }
    // console.log(frequency(textnya));


    // 2
    // Membuat kode untuk tiap karakter
    function sortfreq(freqs) {
        var tuples = [];
        for (var let in freqs) {
            tuples.push([freqs[let], let]);
        }
        return tuples.sort();
    }

    const w = frequency(textnya);
    // console.log(sortfreq(w));

    function buildtree(tuples) {
        while (tuples.length > 1) {
            var leasttwo = [tuples[0][1], tuples[1][1]];
            //console.log(leasttwo);
            var rest = tuples.slice(2, tuples.length);
            //console.log(rest);
            var combfreq = tuples[0][0] + tuples[1][0];
            //console.log(combfreq);
            tuples = rest;
            end = [combfreq, leasttwo];
            //console.log(end);
            tuples.push(end)
            tuples.sort();
        }
        return tuples;
    }
    // console.log(buildtree(sortfreq(w)))
    const fungtwo = buildtree(sortfreq(w));


    // 3
    //build tree  
    function buildTree(tuples) {
        while (tuples.length > 1) {
            leastTwo = [tuples[0][1], tuples[1][1]]
            //console.log(leastTwo);  
            theRest = tuples.slice(2, tuples.length);
            //console.log(theRest);  
            combFreq = tuples[0][0] + tuples[1][0];
            //console.log(combFreq);  
            tuples = theRest;
            end = [combFreq, leastTwo];
            tuples.push(end);
            //console.log(tuples);  
            tuples.sort();
            //console.log(tuples);  
        }
        return tuples[0][1];

    }
    tree = buildTree(fungtwo);
    // console.log(tree);
    //[ 'a', [ 'm', [ 'y', 'l' ] ] ]  


    // 4
    // Mengkodekan tiap karakter dengan hasil tree nya
    code = {};
    pat = '';
    //assiging codes to each letter  
    function assignCode(node, pat) {
        if (typeof (node) == typeof (""))
            code[node] = pat;
        else {
            assignCode(node[0], pat + '0');
            assignCode(node[1], pat + '1');
        }
    }
    assignCode(tree, pat);
    console.log(code);
    //{ a: '0', m: '10', y: '110', l: '111' } String is "malayalam" 


    // 5
    // Proses encoding (dari kata dimana tiap hurufnya diubah menjadi kode huffman)
    function encode(string) {
        output = '';
        for (s in string)
            output += code[string[s]];
        return output;
    }
    encoded = encode(textnya);
    console.log("Encoded as:", encoded);
    //10011101100111010(malayalam)



    // 6
    // Proses decoding (kebalikan dari encoding)
    function decode(tree, encoded) {
        output = '';
        p = tree;
        for (bit in encoded) {
            if (encoded[bit] == '0')

                p = p[0];
            else
                p = p[1];

            if (typeof (p) == typeof ('')) {
                output += p;
                p = tree;

            }
        }
        return output;
    }
    decoded = decode(tree, encoded);

    // console.log("Decoded as:", decoded);
    //malayalam


    const HuffCode = [];
    for(key in code){
        hasil = key +' = '+ code[key];
        HuffCode.push(hasil);
        // console.log(b);
    }
    // console.log(b);

    document.getElementById('txtKode').value = HuffCode;
    document.getElementById('txtEncode').value = encoded;
    document.getElementById('txtDecode').value = decoded;
}






