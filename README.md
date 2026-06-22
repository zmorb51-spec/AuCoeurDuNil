# Au Cœur du Nil — Digital Flagship

واجهة متجر إلكتروني تفاعلية للبراند، تعمل مباشرة بدون build step.

## التشغيل

من داخل هذا المجلد:

```powershell
node server.js
```

ثم افتح `http://127.0.0.1:4173`.

## الملفات الأساسية

- `index.html`: الهيكل العام، الهيدر، الشعار، السلة والبحث.
- `styles.css`: الهوية البصرية والاستجابة للموبايل.
- `app.js`: الصفحات، المنتجات، الفلاتر، Wishlist، Cart، Checkout وOrder Tracking.
- `assets/logo-original.png`: الشعار الأصلي كما أرسله المالك، بلا إعادة تصميم.
- `assets/nile-line-tee.png`: تصور التيشيرت Front / Back.
- `assets/nile-line-hoodie.png`: تصور الهودي Front / Back.
- `assets/nile-line-abaya.png`: تصور العباية Front / Back.
- `assets/noir-du-nil-signature-cloak-techpack.png`: لوحة التصميم والمقاسات متعددة الزوايا للـ Signature Cloak.
- `docs/NOIR_DU_NIL_TECH_PACK_AR.md`: مواصفات الإنتاج الدقيقة للقطعة.
- `docs/COLLECTION_CHAPTER_I_AR.md`: خريطة الكوليكشن، الخامات، الـGSM، الأسعار والحكايات.
- `docs/DESIGN_DIRECTION_AR.md`: مواصفات تنفيذ المطبوعات والتطريز للإنتاج.

## جاهزية الربط التجاري

النسخة الحالية Prototype كامل الواجهة. للإطلاق الفعلي يربط `app.js` مع Shopify Headless أو Medusa، بوابة دفع مصرية/دولية، شركة الشحن، ونظام المصادقة. لا تُجمع بيانات دفع حقيقية في النسخة الحالية.
