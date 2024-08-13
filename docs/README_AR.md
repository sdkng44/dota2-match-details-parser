# Dota 2 Match Details Parser
`dota2-match-details-parser` هو أداة تتيح لك تنزيل تفاصيل مباريات Dota 2 بتنسيقات CSV وJSON. يستخدم هذا الأداة OpenDota API للحصول على معلومات تفصيلية حول المباريات ويوفر دعمًا متعدد اللغات للعديد من اللغات.

## المتطلبات الأساسية
تأكد من تثبيت [Node.js](https://nodejs.org/) على جهاز الكمبيوتر الخاص بك.

## إشعار هام
لاستخدام هذه الأداة، يجب ضبط ملف تعريف Steam ID الخاص بك على الوضع العام. وإلا فلن يمكن استرجاع البيانات.

## التثبيت
يمكنك تثبيت المشروع عن طريق استنساخ المستودع من GitHub أو باستخدام npm.

### من GitHub
اتبع هذه الخطوات لتثبيت المشروع وإعداده:

1. استنسخ المستودع أو قم بتنزيله من موقع GitHub:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. قم بتثبيت التبعيات:
    ```bash
    npm install
    ```

3. قم بتكوين ملف `config.json` باستخدام `STEAM_ID` الخاص بك:
    ```json
    {
      "steamId": "أدخل_steam_id_هنا"
    }
    ```

### من npm
يمكنك أيضًا تثبيت الحزمة باستخدام npm:

#### لأنظمة Windows

1. أنشئ الدليل الأساسي وانتقل إليه:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. قم بتثبيت الحزمة:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. أنشئ دليل الجذر الجديد وقم بنقل محتوى الحزمة خارج دليل الجذر الحالي، ثم انتقل إلى دليل الجذر الجديد:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. قم بإزالة دليل التثبيت الجذري السابق:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. قم بتثبيت التبعيات في الدليل الجديد:
    ```powershell
    npm install
    ```

6. قم بتكوين ملف `config.json` باستخدام `STEAM_ID` الخاص بك:
    ```json
    {
      "steamId": "أدخل_steam_id_هنا"
    }
    ```

#### لأنظمة Unix (Linux/macOS)

1. أنشئ الدليل الأساسي وانتقل إليه:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. قم بتثبيت الحزمة:
    ```bash
    npm install dota2-match-details-parser
    ```

3. أنشئ دليل الجذر الجديد وقم بنقل محتوى الحزمة خارج دليل الجذر الحالي، ثم انتقل إلى دليل الجذر الجديد:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. قم بإزالة دليل التثبيت الجذري السابق:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. قم بتثبيت التبعيات في الدليل الجديد:
    ```bash
    npm install
    ```

6. قم بتكوين ملف `config.json` باستخدام `STEAM_ID` الخاص بك:
    ```json
    {
      "steamId": "أدخل_steam_id_هنا"
    }
    ```

## الاستخدام
لتشغيل المشروع، انتقل ببساطة إلى دليل التثبيت واستخدم الأمر التالي:
```bash
npm start
```
سيؤدي هذا إلى بدء التطبيق وسيطلب منك اختيار اللغة المفضلة لديك. بعد ذلك، سيتم تنزيل تفاصيل مباريات Dota 2 المرتبطة بـ STEAM_ID المقدم.


## استمرارية التنزيلات
إذا قمت بتشغيل البرنامج النصي وتنزيل عدد معين من المباريات، ثم توقفت عن تشغيل البرنامج النصي وأعدت تشغيله، ستبحث الأداة عن الملفات التي تم إنشاؤها مسبقًا بالمباريات التي تم تنزيلها. ستقرأ المباريات التي تم تنزيلها بالفعل وتواصل من حيث توقفت.


## استكشاف أخطاء عرض اللغة وإصلاحها
إذا واجهت مشكلات في عرض الأحرف في لغتك، قد تحتاج إلى تكوين CMD أو PowerShell لاستخدام خط يدعم هذه الأحرف.
1. انقر بزر الماوس الأيمن على شريط العنوان لـ CMD أو PowerShell.
2. اختر "Properties".
3. انتقل إلى علامة التبويب "Font".
4. اختر "SimSun Ext-B" كخط. يدعم هذا الخط مجموعة واسعة من الأحرف ويتم تثبيته بشكل افتراضي.
ملاحظة: "SimSun Ext-B" هو مجرد مثال تم اختباره ليعمل مع جميع الأحرف. يمكنك أيضًا تثبيت خطوط أخرى تدعم الأحرف في لغتك إذا لزم الأمر.


## المستودع والحزمة
يتوفر هذا المشروع على GitHub وnpm:
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## حدود API
يستخدم هذا المشروع OpenDota API، والذي يحتوي على قيود على عدد الطلبات التي يمكنك تقديمها. يرجى الانتباه إلى هذه القيود لتجنب مشاكل استرجاع البيانات.


## الترخيص
تم ترخيص هذا المشروع بموجب ترخيص MIT. راجع ملف LICENSE لمزيد من التفاصيل.


## سجل التغييرات
للحصول على معلومات مفصلة حول التحديثات، يرجى الرجوع إلى [CHANGELOG](CHANGELOG.md).








