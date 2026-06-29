/**
 * មុខងារពន្លាត ឬបង្រួមបង្ហាញកម្មវិធីផ្ទឹម និងសូត្រមន្តលម្អិត
 */
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    const toggleBtn = document.querySelector('.btn-program-toggle');
    
    if (timeline) {
        if (timeline.classList.contains('collapsed')) {
            // ពន្លាតបង្ហាញកម្មវិធី
            timeline.classList.remove('collapsed');
            if (toggleBtn) toggleBtn.innerHTML = "📋 សូមចុចទីនេះដើម្បីបិទកម្មវិធីវិញ";
        } else {
            // បង្រួមលាក់កម្មវិធី
            timeline.classList.add('collapsed');
            if (toggleBtn) toggleBtn.innerHTML = "📋 សូមចុចទីនេះដើម្បីមើលកម្មវិធីផ្ទឹម និងសូត្រមន្តលម្អិត";
        }
    }
}

/**
 * មុខងារគ្រប់គ្រងការបង្ហាញប៊ូតុង "ត្រឡប់ទៅកំពូល" នៅពេលទាញ Scroll ចុះក្រោម
 */
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        // បើទាញ Scroll ចុះក្រោមលើសពី 20px នឹងបង្ហាញប៊ូតុង
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
}

/**
 * មុខងាររុញទំព័រត្រឡប់ទៅផ្នែកខាងលើបង្អស់ដោយរលូន (Smooth Scroll)
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // ធ្វើឱ្យផ្ទៃអេក្រង់រំកិលឡើងទៅលើថ្នមៗ
    });
}
