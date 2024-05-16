quotes = [
    `- {رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الرَّاحِمِينَ}</br>.[المؤمنون/109]`,
    `- {رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ}</br>.[آل عمران/53]`,
    `- {رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ (4) رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنْتَ الْعَزِيزُ الْحَكِيمُ }</br>.[الممتحنة/4- 5]`,
    `- {رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ}</br>.[الأعراف/ 23]`,
    `- {رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ}</br>.[التحريم/8]`,
    `- {رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ (97) وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ (98)}</br>.[المؤمنون/ 97- 98]`,
    `- {رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ}</br>.[المؤمنون/118]`,
    `- {رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ (85) وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ (86)}</br>.[يونس/85- 86]`,
    `{قال أرأيت إذ أوينا إلى الصخرة فإني نسيت الحوت وما أنسانيه إلا الشيطان أن أذكره واتخذ سبيله في البحر عجبا}</br>.[سورة الكهف، آية:٦٣]`,
    `- {لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ}</br>.[الأنبياء/ 87]`,
    `- {حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ} </br>.[التوبة/ 129]`,
    `{ربنا واجعلنا ‌مسلمَين ‌لك ومن ذريتنا أمة مسلمة لك}</br>.[سورة البقرة، آية: ١٢٨]`,
    `{وإذا سألتموهن متاعًا فاسألوهن من وراء حجاب ذلكم أطهر لقلوبكم وقلوبهن}</br>.[سورة الأحزاب، آية: ٥٣]`,
    `{ومَن يرغب عن ملة إبراهيم إلا من سفه نفسه ولقد اصطفيناه في الدنيا وإنه في الآخرة لمن الصالحين}</br>.[سورة البقرة، آية: ١٣٠]`,
    `{يَومَ نَحْشُرُ المُتَّقِينَ إلى الرَّحمَنِ وَفْدًا}</br>.[سورة مريم، آية: ٨٥]`,
    `{قد أفلح المؤمنون} </br>.[سورة المؤمنون، آية: ١]`,
    `{إنَّ الَّذِينَ قَالوا رَبّنَا اللَّهُ ثُمَّ اسْتَقَامُوا}</br>.[سورة فصلت، آية: ٣٠]`,
    `{وربك الغفور ذو الرحمة لو يؤاخذهم بما كسبوا لعجل لهم العذاب بل لهم موعد لن يجدوا من دونه موئلا}</br>.[سورة الكهف، آية: ٥٨]`,
    `{إن تُبدُوا شيئًا أو تخفوه فإن الله كان بكل شيء عليمًا}</br>.[سورة الأحزاب آية: ٥٤]`,
    `{يَومَ نَحْشُرُ المُتَّقِينَ إلى الرَّحمَنِ وَفْدًا}</br>.[سورة مريم، آية: ٨٥]`,
    `{قد أفلح المؤمنون}</br>.[سورة المؤمنون، آية: ١]`
]
var y;
function display() {
    var x = Math.random().toFixed(1) * 20;
    if (y === x) {
        x = Math.random().toFixed(1) * 20;
    }
    else {
        y = x
        document.getElementById('demo').innerHTML = quotes[x];
    }
}
