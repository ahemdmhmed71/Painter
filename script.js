// الرابط الأساسي للصور
const baseURL = "https://blogger.googleusercontent.com/img/b/";

// قائمة بأسماء الصور (استبدل هذه الأسماء بأسماء الصور الفعلية)
const imageNames = [
    "AVvXsEjktWNGOY0tslPji9yKB5KOKsFwsRWiHEX1e2S5xiQqKLYh30JOXolSgNtrq4j-Focqc-M8X_2f4t-vfv9XPjOE8ICuQs-ko4Isdv6t3CJt0ebQebDZb3MaNMCukBpjP0R06XeigbUvem4/s1600/f861fbe7-dad4-422c-9d58-2609e77f42d8.jpg",
    "R29vZ2xl/AVvXsEgTR-b5XjLV0x1FoiDuE3NQr68MROA2SqPd4YwGsBVrsBovdVmtPtCj75PrVfavog5m_xhZO7ss5UWcjyNWl0NBssKuF3jtq89yjHpcdwvx3V5T7gvhUS-3SuLgzY_Tuhyp6qLU8SzETwU/s1600/f09d7e8c-9d25-440c-b50a-b9dd26039684.jpg",
    "myImage3.png",
    "exampleImage4.jpg",
    // أكمل القائمة لبقية الصور
];

// الحصول على عنصر معرض الصور
const imageGallery = document.getElementById('imageGallery');

// تكرار عبر قائمة أسماء الصور وإضافتها إلى المعرض
imageNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = `${baseURL}${imageName}`;  // تكوين رابط الصورة باستخدام الرابط الأساسي واسم الصورة
    img.alt = `صورة عمل ${imageName}`;
    imageGallery.appendChild(img);
});

// تنبيه عند الضغط على رابط الواتساب
document.querySelector('.cta').addEventListener('click', function() {
    alert('ستتم الآن إعادة توجيهك إلى الواتساب للتواصل مع أبو سالم.');
});
