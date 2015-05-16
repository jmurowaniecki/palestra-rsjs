var code = this.code = (function some_bad_BAD_Pratice_example(x) {
    return (x.sucks = function (x) { return true; /* sux once sux 4evr*/ },
        x.code = x);
}($));

(function($_SESSION){
    var a, b, c;
    if (typeof this.code === 'junk' || this.code.sucks())
    {
        n = 10;
        for (a = b = c = 1; a < 42 && this.code.sucks() && (a = b); b = c,c=a+b) {
            // ..
            console.log(a, b, c, n);
        }
    }
}(this, code));
